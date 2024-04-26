const { hash, compare } = require("bcryptjs"); //Importa a Criptografia de senhas
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite"); 

class UsersController {
    async create(request, response) {
        const {name, email, password} = request.body;

        const database = await sqliteConnection();
        
        //Verificar se usuário existe
        const checkUserExists = await database.get("SELECT * FROM  users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError("Esse e-mail já está em uso");
        }

        const hashedPassword = await hash(password, 8); 

        //Criar usuário
        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
        [name, email, hashedPassword]);

        return response.status(201).json("Usuário Criado");
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]); //Selecionar o usuário
        
        //Caso não exista
        if(!user) {
            throw new AppError("Usuário não existe");
        }

        const userUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        //Se email for igual ou igual de outro usuário
        if(userUpdatedEmail && userUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail ja está em uso");
        }

        //Atualiza com novo dado
        user.name = name ?? user.name;  //Nullish coalescing operator (??) = verifica se existe conteúdo
        user.email = email ?? user.email;

        //Verficar se a senha antiga foi digitada
        if(password && !old_password) {
            throw new AppError("digite a senha antiga para definir a nova senha");
        }

        //Verficar se a senhas foram digitadas
        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password); //compare tira a criptografia para comparação

            //Verifica se a senha antiga é a mesma digitada pelo usuário
            if(!checkOldPassword) {
                throw new AppError("Senha antiga não confere!")
            }

            //atualiza a senha
            user.password = await hash(password, 8);
        }

        await database.run(`
            UPDATE users SET    
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password, id]
        );

        return response.status(200).json("Dados atualizados");
    }
}

module.exports = UsersController;
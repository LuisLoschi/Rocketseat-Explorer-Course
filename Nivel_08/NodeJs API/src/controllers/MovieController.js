const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieController{
    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        if(rating < 1 || rating > 5){
            throw new AppError("Avaliação deve ser entre 1 a 5")
        }

        const [movie_id] = await knex("movies").insert({
            title,
            description,
            rating,
            user_id
        });
        

        const tagsInsert = tags.map(gender => {
            return {
                movie_id,
                gender,
                user_id
            }
        });

        await knex("tags").insert(tagsInsert);

        response.json(`Filme ${title} adicionado`);
    }

    async show(request, response) {
        const { id } = request.params;

        const movie = await knex("movies").where({ id }).first();
        const tags = await knex("tags").where({ movie_id: id }).orderBy("gender")

        return response.json({
            ...movie, tags
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movies").where({ id }).delete();

        return response.json("Filme deletado");
    }

    async index(request, response) {
        const { user_id, title, tags  } = request.query;

        let movies;

        if(tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());

            movies = await knex("tags")
                .select([
                    "movies.id",
                    "movies.title",
                    "movies.user_id"
                ])
                .where("movies.user_id", user_id)
                .whereLike("movies.title", `${title}`)
                .whereIn("gender", filterTags)
                .innerJoin("movies", "movies.id", "tags.movie_id")
                .orderBy("movies.title")

        } else {
            movies = await knex("movies")
                .where({ user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }

        const userTags = await knex("tags").where({ user_id });
        const moviesWithTags = movies.map(movie => {
            const movieTags = userTags.filter(tag => tag.movie_id === movie.id);

            return {
                ...movie,
                tags: movieTags
            }
        });

        return response.json(moviesWithTags);
    }
}

module.exports = MovieController;
import db from "$lib/db.js";

export async function load() {
    return {
        movies: await db.getMovies()
    }
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        db.deleteMovie(data.get('id'));
        let movie = {
            _id: data.get('id'),
            title: data.get('title'),
            year: data.get('year'),
            length: data.get('length')
        }
        await db.updateMovie(movie);

        return { success: true }
    }
}
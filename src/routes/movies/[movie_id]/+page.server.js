import db from '$lib/db.js'

export async function load({ params }) {
    return {
        movie: await db.getMovie(params.movie_id)
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();
        console.log('asdadsadsdas');
        console.log('id: ' + data);

       // db.updateMovie(data.get('id'));
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
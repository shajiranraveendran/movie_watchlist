import { navigating } from '$app/stores';
import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        let movie = {
            title: data.get('title'),
            year: data.get('year'),
            length: data.get('length')
        };

        await db.createMovie(movie)

        return {
            success: true,
            redirect: '$routes/movies',

        }

    }
}
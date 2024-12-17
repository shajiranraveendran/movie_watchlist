<!-- SCRIPT -->
<script>
    //import { movies } from "$lib/movies.js";
    let { data } = $props();
</script>

<!-- SECTION -->
<section>
    <h1>Movies</h1>
    <a href="/movies/create" class="btn btn-warning" role="button">Add Movie</a><br /><br />

    <div class="movies-container">
        {#each data.movies as movie}
            <div class="card">
                <img src={movie.poster} alt={movie.title} class="poster" />
                <div class="card-body">
                    <span class="title">
                        <a href={"/movies/" + movie._id}>{movie.title}</a>
                    </span><br />
                    Jahr: {movie.year}<br />
                    Länge: {movie.length}
                </div>
                
                
                <form method="POST" action="?/delete">
                    <input type="hidden" name="id" value={movie._id} />
                    <button class="btn btn-danger">Delete</button>
                </form>

                
            </div>
        {/each}
    </div>
</section>



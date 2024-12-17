<script>
    let { data } = $props();
    console.log(data.movie);
</script>

<section>
    <h1>Movie Detail</h1>
    <div class="movie-detail">
        <img src={data.movie.poster} alt={data.movie.title} class="poster" />
        <div class="form-container">


            <form method="POST" action="?/update">
                <input name="id" type="hidden" value={data.movie._id} />

                <div class="mb-3">
                    <label class="form-label" for="">Title</label>
                    <input class="form-control" type="text" name="title" id="" value={data.movie.title}/>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="">Year</label>
                    <input class="form-control" type="text" name="year" id="" value={data.movie.year}/>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="">Length</label>
                    <input class="form-control" type="text" name="length" id="" value={data.movie.length}/>
                </div>

                <button class="btn btn-warning custom-button">Update Movie</button>
            </form>

            <form method="POST" action="?/delete">
                <input type="hidden" name="id" value={data.movie._id} />
                <button class="btn btn-danger custom-button">Delete Movie</button>
            </form>
        </div>
    </div>
</section>

<style>
    .movie-detail {
        display: flex;
        align-items: flex-start;
        gap: 50px;
    }

    .form-control {
        width: 250%;
    }

    .poster {
        width: 150px;
        height: auto;
        border-radius: 5px;
    }
</style>

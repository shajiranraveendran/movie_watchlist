<script>
    let { form } = $props();
</script>

<section>
    <a href="/movies" class="btn btn-warning" role="button">Back</a>
    <h1>Add Movie</h1>
    <form method="POST" action="?/create">
        <div class="mb-3">
            <label for="" class="form-label">Title</label>
            <input name="title" class="form-control" type="text" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Year</label>
            <input name="year" class="form-control" type="number" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Length</label>
            <input name="length" class="form-control" type="number" />
        </div>
        <button type="submit" class="btn btn-warning btn-large custom-button">Add Movie</button>
    </form>
</section>

{#if form?.success}
    <p>Movie created successfully!</p>
{/if}
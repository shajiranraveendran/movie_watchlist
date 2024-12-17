<!-- SCRIPT -->
<script>
    import "./styles.css";
    let { children } = $props();
</script>

<!-- SECTION -->
<section>
    <!-- NAVIGATION-->
    <div class="nav">
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand navfont" href="/">Home</a>
                <a class="nav-link navfont" href="/movies">Movies</a>
            </div>
        </nav>
    </div>

    <!-- PAGE INHALT-->
    <div class="container">
        {@render children()}
    </div>
</section>

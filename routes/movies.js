/* ----------------------------- */
/* 6. Adding New Movies          */
/* ----------------------------- */

router.get("/movies/create", (req, res) => {
    res.render("movies/new-movie")
})


/* ----------------------------- */
/* 3. Adding new celebrities     */
/* ----------------------------- */

const router    = require("express").Router();
const Celebrity = require("../models/Celebrity");

//Create celebrities
router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({
        name,
        occuation,
        catchPhrase
    })
    .then(createdCelebrity => {
        res.redirect("/celebrities");
    })
    .catch(err => {
        res.render("celebrities/new-celebrity");
    })
})


/* ----------------------------- */
/* 4. Listing our celebrities    */
/* ----------------------------- */

router.get("/celebrities", (req, res) => {
    Celebrity.find()
    .then(celebrities => {
        res.render("celebrities/celebrities", { celebrities });
    })
    .catch(err => {
        console.log(err);
    })
})

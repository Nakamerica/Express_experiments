const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
//const ejs = require('ejs')
app.set('view engine', 'ejs'); //setting ejs as the view engine
//routing page
app.get('/', (req,res) => res.render('employee'))
app.listen(3000, () => console.log(`server is running at http://localhost:${port}`))

app.use(bodyParser.urlencoded({ extended: true }));
// Route to handle form submission
app.post("/details", (req, res) => {
    const employeeData = req.body;  // ✅ Capture form data
    res.render("details", { employee: employeeData });  //Pass data to details
});
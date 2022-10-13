const path = require("path")
const express = require("express");

const app = express();
const publicDictionat = path.join(__dirname, "../public")
app.use(express.static(publicDictionat))


app.get("", (req, res) => {
    res.send('<h1>hello world</h1>')
})
app.get("/help", (req, res) => {
    res.send({
        name: 'prince',
        age: 27
    })
})
app.get("/about", (req, res) => {
    res.send('about page')
})
app.get("/products", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "you must provide a serch term"
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})
app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'you must provide address'
        })
    }
    res.send({

        forcast: "it is a snowing",
        location: "shimla",
        address: req.query.address
    })
})

app.listen(5000, () => {
    console.log('server is up to 5000')
})
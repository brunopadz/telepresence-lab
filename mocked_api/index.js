const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Try a request to /list-routes")
})

app.get('/list-routes', (req, res) => {
    res.json(
        {
            routes: [
                "/list-users",
                "/list-routes"
                ]
        }
    )
})

app.get('/list-users', (req, res) => {
    res.json(
        {
            data: [
                {
                    name: "bruno",
                    age: 35
                },
                {
                    name: "mirella",
                    age: 33
                }
            ]
        }
    )
})

app.listen(port, () => {
    console.log(`App is up.`)
})

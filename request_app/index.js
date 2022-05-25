require('dotenv').config()
const express = require('express')
const axios = require('axios')
const {response, json, raw} = require("express");
const app = express()
const port = 3000

let service = axios.create({
    baseURL: process.env.API_URL,
    responseType: "json"
})
//
// app.get('/', (req, res) => {
//     res.json({routes: 'show-routes'})
// })

app.get('/', (req, res) => {
    service.get("/").then(result => res.json(result.data))
})

// app.get('/routes', (req, res) => {
//     console.log("Requesting")
//     service.get("/list-routes").then(result => res.json(result.data))
// })
//
// app.get('/users', (req, res) => {
//     console.log("Requesting")
//     service.get("/list-users").then(result => res.json(result.data))
// })

app.listen(port, () => {
    console.log(`App is up.`)
})

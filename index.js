const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
const app = express();
const tld = 'hudektech.com'

// Get the production root
const myRoot = () => {
    mySegment = __dirname.split(tld);
    return mySegment.length == 1 ? '/' : `${mySegment[1]}`
}


const printOutput = (req, res) => {
    var output = `Root pathname is ${__dirname}, NODE_ENV = ${process.env.NODE_ENV}, Port = ${process.env.PORT} <br>`;
    for (var property in process.env) {
        output += `${property}: ${process.env[property]} <br>`
    }

    output += ' <br>Req</br>'
    for (var property in req) {
        output += `${property}: ${process.env[property]} <br>`
    }
    res.send(output);
}

app.get(`${myRoot()}`, (req, res) => {
    res.send(`Root "/" page, __dirname = ${__dirname}, NODE_ENV = ${process.env.NODE_ENV}, myRoot = ${myRoot()}, PORT = ${PORT}`)
})
app.get(`${myRoot()}/about`, (req, res) => {
    res.send(`/about page, __dirname = ${__dirname}, NODE_ENV = ${process.env.NODE_ENV}, myRoot = ${myRoot()}, PORT = ${PORT}`)
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
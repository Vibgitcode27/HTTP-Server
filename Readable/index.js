let express = require(`express`)
let app = express()
let bodyParser = require(`body-parser`)
let port = 3000

// This is MIDDLEWare 

app.use(bodyParser.json())

// Authantication through header

callbackMIDDLEWare = (req , res, next) =>
{
    if (req.headers.id == 100) {
        next()
    } else {
        res.status(401).send("You are not authorized")
    }
}

app.use(callbackMIDDLEWare)

// This is a sum function

general_sum_function = (count) =>
{
    let result = 0
    for (let i = 1; i <= count; i++)
    {
        result = result + i
    }

    return result;
}

callbackGET = (req , res) =>
{
    let count = 10
    res.send(`Sum is ${general_sum_function(count)}`) 
    // res.send(ans)
}

app.get(`/get` , callbackGET)

callbackHTML = (req , res) =>
{
    res.sendFile(__dirname + '/index.html')
}

app.get('/get/HTML' , callbackHTML)


callbackPOSTQuery = (req , res) =>
{
    let count = req.query.count
    // res.send(`Sum is ${general_sum_function(count)}`) 
    let ans = {
        sum : general_sum_function(count)
    }
    res.send(ans)
}

app.post(`/post/query` , callbackPOSTQuery)


callbackPOSTHeader = (req , res) =>
{
    let count = req.headers.count
    // res.send(`Sum is ${general_sum_function(count)}`) 
    let ans = {
        sum : general_sum_function(count)
    }
    res.send(ans)
}

app.post(`/post/headers` , callbackPOSTHeader)


callbackPOSTBody = (req , res) =>
{
    let count = req.body.count
    // res.send(`Sum is ${general_sum_function(count)}`) 
    let ans = {
        sum : general_sum_function(count)
    }
    res.send(ans)
}

app.post(`/post/body` , callbackPOSTBody)

listerner = () =>
{
    console.log(`HTTP server is active at local host${port}`)
}

app.listen(port , listerner)

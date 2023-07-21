// let express = require(`express`)
// let app = express()
// let port = 3000

// calSum = (num) =>
// {let count = 0
//     for (let i = 1; i <= num; i++) 
//     {
//         count = count + i;
//     }
//     return count
// }

// executor = (req , res) =>
// {
//     res.send(`The sum is ${count}`)
// }

// app.get(`/vibhor`, executor)

// // This api request runs code foreven (until we close port) and listens requests

// listener = () =>
// {
//     console.log(`Example post has started running ${port}`)
// }

// app.listen(port , listener)

let express = require(`express`)
let bodyParser = require(`body-parser`)  // This liberary is used to fetch library
let app = express()
let port = 3000

calSum = (num) =>
{let count = 0
    for (let i = 1; i <= num; i++) 
    {
        count = count + i;
    }
    return count
}

// MIDDLEWares 

app.use(bodyParser.json())  // This also a middle ware

// middleWare = (req , res , next) =>
// {
//     console.log("This is a middleWare " + req.headers.count)
//     next()
// }

// app.use(middleWare)


// This api request runs code forever (until we close port) and listens requests

listener = () =>
{
    console.log(`Example post has started running ${port}`)
}

app.listen(port , listener)

// GET request

executor = (req , res) =>
{
    let count = req.query.count // the request we are giving to the host is http://localhost:3000/vibhor?count=10
    res.status(201).send(`The sum is ${calSum(count)}`) // You can also add status codes
}

app.get(`/vibhor`, executor)

// POST Request

 post = (req ,res) =>
 {
    if (req.body.count < 30000){
        console.log(req.body)
        // let count = req.query.count    //***** Counter from query
        // let count = req.headers.count  //***** Count from headers
        let count = req.body.count        //***** count form body  
        
                let retJSON = {
                    Sum : calSum(count)
                }
        res.status(202).send(retJSON)
    } 
    else {
        res.status(406).send("Ask is big")
    }
 }
app.post("/post" , post)

// This is How you send Html FIle

post_html = (req ,res) =>
{
    res.sendFile(__dirname + '/index.html')
}

app.get(`/get/html` , post_html)
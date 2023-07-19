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

executor = (req , res) =>
{
    let count = req.query.count // the request we are giving to the host is http://localhost:3000/vibhor?count=10
    res.send(`The sum is ${calSum(count)}`)
}

app.get(`/vibhor`, executor)

// This api request runs code foreven (until we close port) and listens requests

listener = () =>
{
    console.log(`Example post has started running ${port}`)
}

app.listen(port , listener)
let express = require(`express`)
let app = express()
let port = 3000

listener = () =>
{
    console.log(`This is the an example ${port}`)
}
app.listen(`/vibhor` , main_executor)

app.get(port , listener )

main_executor = () =>
{
    let count = 30
    res.send(count)
}

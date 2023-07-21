sendObj = {
    method : "GET"
}

logResponseBody = (jsonBody) =>
{
    console.log(jsonBody)
}

callback = (result) =>
{
    result.json().then(logResponseBody)
}

fetch("http://localhost:3000/linking_another_node?count=100" , sendObj).then(callback)
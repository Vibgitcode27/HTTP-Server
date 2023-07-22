sendObj = {
    method : "POST" , 
    headers: { 'id': 100 } // This is just to authenticate and passes middleware
    }

logResponseBody = (jsonBody) =>
{
    console.log(jsonBody)
}

callback = (result) =>
{
    result.json().then(logResponseBody)
}

fetch("http://localhost:3000/post/query?count=100" , sendObj).then(callback)
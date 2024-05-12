const express = require("express");
const { handler } = require("./controller");
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());
app.post("*", async (req, res) => {
    //console.log(req.body);
    //res.send("hello post");
    res.send(await handler(req))

});
app.get("*", async (req, res) => {
    res.send("Hello Get");
    res.send(await handler(req))
});

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("server listening to port -->", PORT); 
});


//https://api.telegram.org/bot7078040352:AAEQNwCghPyBTueWnHvgP3O0-vB-TQ-WvWs/${method}
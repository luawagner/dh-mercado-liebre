const express= require("express");
const path = require ("path");
const app = express();

const PORT = process.env.PORT || 3000;

//Le decimos que puede devolver todo lo que esté en public, si es pedido.
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(PORT, () => console.log("servidor en http://localhost:3000/"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
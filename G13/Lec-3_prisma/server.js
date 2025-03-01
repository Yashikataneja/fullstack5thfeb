const express= require("express");
const app = express();

app.use(express.json());


app.use("/api/users",require("./routes/userRoute"))
app.use("/api/blogs",require("./routes/blogRoute"))
app.listen(4545,()=>{
    console.log("server started")
})
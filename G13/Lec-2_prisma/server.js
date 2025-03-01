const express= require("express");
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
app.use(express.json());

app.get("/users/:email",async(req,res)=>{
    const {email} = req.params;
    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      res.json({user});
})

app.post("/users",async(req,res)=>{
      const {email,name} =req.body;
      let newUser = await prisma.user.create({
        data:{
            email:email,
            name:name
        }
      })
      res.json({newUser})
})

app.delete("/users/:email",async(req,res)=>{
    const {email} = req.params
    const deleteUser = await prisma.user.delete({
        where: {
          email: email,
        },
      })
      res.send("user deleted")
})
app.put("/users",(req,res)=>{

})


app.listen(4545,()=>{
    console.log("server started")
})
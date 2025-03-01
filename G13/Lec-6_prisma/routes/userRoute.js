const express = require("express");
const router= express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get("/users/:email",async(req,res)=>{
    const {email} = req.params;
    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      res.json({user});
})

router.post("/",async(req,res)=>{
      const {email,name,password} =req.body;
      let newUser = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:password
        }
      });

      let token=Math.random()*10000
      
      res.json({newUser})
})

router.delete("/users/:email",async(req,res)=>{
    const {email} = req.params
    const deleteUser = await prisma.user.delete({
        where: {
          email: email,
        },
      })
      res.send("user deleted")
})
//HW
// app.put("/users",(req,res)=>{

// })


module.exports=router
// const express = require("express");
// const router= express.Router();
// const {sendMail} = require("../utils/sendMail")

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient()

// router.get("/users/:email",async(req,res)=>{
//     const {email} = req.params;
//     const user = await prisma.user.findUnique({
//         where: {
//           email: email,
//         },
//       })
//       res.json({user});
// })

// router.post("/",async(req,res)=>{
//       const {email,name,password} =req.body;
//       let newUser = await prisma.user.create({
//         data:{
//             email:email,
//             name:name,
//             password:password
//         }
//       });

//       let token=Math.floor(Math.random()*100000);
//       let newToken=await prisma.token.create({
//         data:{
//           token:token,
//           userId:newUser.Id
//         }
//       })
//       let Link = `http://localhost:4545/verify/${token}/`
//       await sendMail(email,"verify Email",Link)
//       res.json({newUser})
// })

// router.delete("/users/:email",async(req,res)=>{
//     const {email} = req.params
//     const deleteUser = await prisma.user.delete({
//         where: {
//           email: email,
//         },
//       })
//       res.send("user deleted")
// })
// //HW
// // app.put("/users",(req,res)=>{

// // })


// module.exports=router












const express = require("express");
const router = express.Router();
const { sendMail } = require("../utils/sendMail"); // Assuming you have a utility to send mail

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs'); // For password hashing

// GET: Retrieve user by email
router.get("/users/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Create a new user and send verification email
router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword, // Store hashed password
      },
    });

    // Generate a random token for email verification
    const token = Math.floor(Math.random() * 100000);
    const newToken = await prisma.token.create({
      data: {
        token: token,
        userId: newUser.id, // Ensure this matches the actual field name in your schema
      },
    });

    // Create the verification link
    const link = `http://localhost:4545/verify/${token}/`;

    // Send the verification email
    await sendMail(email, "Verify Your Email", link);

    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a user by email
router.delete("/users/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        email: email,
      },
    });

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Optional: Update user endpoint (commented out as a placeholder for future implementation)
// router.put("/users", async (req, res) => {
//   // Your update logic goes here
// });

module.exports = router;

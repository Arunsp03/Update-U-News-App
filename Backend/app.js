require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const Product = require("./models/user");

const connectDB = require("./DB/connect");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieparser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyparser = require("body-parser");
const LocalStrategy = require("passport-local");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(3001, (req, res) => {
      console.log("Server is listening");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(
//     cors({
//       origin: "http://localhost:3000", // <-- location of the react app were connecting to
//       credentials: true,
//     })
//   );
app.use(cors());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieparser("secretcode"));
// require('./passportconfig')(passport);
// passport.use(new LocalStrategy(async function verify(name, password, cb) {
//   const user=await User.model.findOne({name,password})
//     console.log(user);

// }));
// app.use(passport.initialize())
// app.use(passport.session());

// app.post('/api/login',(req,res,next)=>{
//     passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//          console.log(user);
//         if (!user) res.send("No User Exists");
//         else {
//           req.logIn(user, (err) => {
//             if (err) throw err;
//             res.send("Successfully Authenticated");
//             console.log(req.user);
//           });
//         }
//       })(req, res, next);
//     });
// app.post('/api/login',passport.authenticate('local',

// ))
// app.post("/api/register", (req, res) => {
//     Product.model.findOne({ name: req.body.name }, async (err, doc) => {
//       if (err) throw err;
//       if (doc) res.send("User Already Exists");
//       if (!doc) {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);

//         const newUser =  Product.model.create({
//           name: req.body.name,
//           email:req.body.email,
//           password: hashedPassword,
//         });

//         res.send("User Created");
//       }
//     });
//   });
//   app.get("/user", (req, res) => {
//     res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
//   });

// app.post('/api/register', (req,res)=>{
//     if(Product.model.findOne({name:req.body.name},async (err,doc)=>{
//         if(err) throw err;
//         if(doc)res.send("useralready exixts");
//         if(!doc){
//             const hashpasword=await bcrypt.hash(req.body.password,10);
//             const user=Product.model.create({
//                 name:req.body.name,
//                 email:req.body.email,
//                 password:hashpasword,
//             })
//             await user.save();
//             res.send({user})
//         }
//         }))
// ;
// })

// app.use(passport.initialize())
// app.use(passport.session())
// initializepassport(passport,
//     email=app.post('/api/login',async(req,res)=>{
//         try{
//             const user=Product.model2.findOne({
//                 email:req.body.email,
//             })
//             return res.json({user})
//         }
//         catch(e){
//             return res.json({success:false})
//             }
//     }));
app.post("/api/login", async (req, res) => {
  try {
    const user = await Product.model.findOne({
      name: req.body.name,
      password: req.body.password,
    });
    if (!user) {
      return res.json({ success: false });
    }
    if (req.body.password === user.password) {
      const token = jwt.sign(
        {
          name: user.name,
          password: user.password,
        },
        process.env.JWT_SECRET
      );
      res.json({ user, token, success: true });
      console.log(token);
    }
  } catch (e) {
    res.json({ success: false });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const user = Product.model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send({ success: true });
  } catch {
    res.send({ success: false });
  }
});
app.post("/api/wishlist/delete", async (req, res) => {
  try {
    const m = await Product.model2.findOneAndDelete({
      title: req.body.title,
    });
    res.json({ m });
  } catch (e) {
    res.json({ m });
  }
});
app.post("/api/wishlist", async (req, res) => {
  try {
    const item = await Product.model2.create({
      name: req.body.name,
      title: req.body.title,
      image: req.body.img,
      source: req.body.source,
      description: req.body.description,
      link: req.body.link,
    });
    res.json({ success: true, item });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});
app.get("/api/showwishlist", async (req, res) => {
  console.log(req.headers["x-loca-name"]);
  try {
    // const user_id = req.user._id
    const item = await Product.model2.find({
      name: req.headers["x-loca-name"],
    });
    return res.json({ item });
  } catch (e) {
    return res.json({ success: false });
  }
});

require("dotenv").config();
const path = require('path')
const express = require('express');
const app = express();
const formRoutes = require('./routes/formRoute')
const InvestRoutes = require('./routes/investorRoute')

const cors = require('cors');
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: true, limit: '120MB'}));
app.use(express.json({limit: '120MB'}));
app.use(cors());




app.use('/crowdfunding', formRoutes)
const server = require('http').createServer(app);



app.use('/investors', InvestRoutes)


mongoose.set('strictQuery', false);

const MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
}).then(()=> { console.log("Connected to DB");
}).catch(err=> {
  console.log(err.message)
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`);
})




if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

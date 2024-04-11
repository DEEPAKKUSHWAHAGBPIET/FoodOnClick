const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL =
  "mongodb+srv://csedeepak2021:deepak123@cluster0.03tgz28.mongodb.net/goFoodMern?retryWrites=true&w=majority&appName=Cluster0";
//const mongoURL = "mongodb+srv://goFoodMern:deepak123@cluster0.unfngxf.mongodb.net/goFoodMern?retryWrites=true&w=majority"
//const mongoURL = "mongodb://csedeepak2021:deepak123@ac-orri63m-shard-00-00.03tgz28.mongodb.net:27017,ac-orri63m-shard-00-01.03tgz28.mongodb.net:27017,ac-orri63m-shard-00-02.03tgz28.mongodb.net:27017/goFoodMern?ssl=true&replicaSet=atlas-8bvnlr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const MongooseConnection = async () => {
  try {
    //
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    
    const fetched_categories = await mongoose.connection.db.collection("food_Category");
    const categories = await fetched_categories.find({}).toArray();

     global.food_items = data;
     global.food_categories = categories;

    //console.log(global.food_items);
  } catch (error) {
    console.error(error);
  }
};

MongooseConnection();
module.exports = MongooseConnection;

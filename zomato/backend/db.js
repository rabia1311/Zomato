const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://RabiaZomato:zomato@cluster0.kh5ettk.mongodb.net/gofoodmern?';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const fetchedData = await mongoose.connection.db.collection("sample").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("FoodCategory").find({}).toArray();

    global.food_items = fetchedData;
    global.foodCategory = foodCategory;

    // console.log(global.food_items);
  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;

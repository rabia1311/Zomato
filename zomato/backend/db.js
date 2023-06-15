const mongoose= require('mongoose')
const mongoURI='mongodb+srv://RabiaZomato:zomato@cluster0.kh5ettk.mongodb.net/gofoodmern?'

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log('Connected to MongoDB');
  
      const fetchedData = await mongoose.connection.db.collection("sample").find({}).toArray();
      console.log();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    } 
  };
  
  module.exports = mongoDB;
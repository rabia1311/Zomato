const mongoose= require('mongoose')
const mongoURI='mongodb+srv://RabiaZomato:zomato@cluster0.kh5ettk.mongodb.net/'

const mongoDB=()=>{
    mongoose.connect('mongodb+srv://RabiaZomato:zomato@cluster0.kh5ettk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      // Add your code here for further operations
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
    
}
module.exports=mongoDB;
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/cloud-notebook";
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connection to mongoose successfully done");
    })
}

module.exports = connectToMongo;
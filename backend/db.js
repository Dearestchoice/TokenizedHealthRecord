const mongoose = require("mongoose");
const Schema = mongoose.Schema;



/** Database connection */
const url2 = "mongodb+srv://ProjectS:tAfr4H8SXOGgdqBA@projects.joiftht.mongodb.net/?retryWrites=true&w=majority&appName=ProjectS"

async function databaseConn() {
  await mongoose.connect(url2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

databaseConn().then(
  console.log("Database Connected")
  ).catch(
    err => console.log(` Error connecting to database: ${err}`)
);


/** Schema */
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: { type: String, required: true, select: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);




module.exports = { mongoose, Schema, User };
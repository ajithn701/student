const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Akshaya204:Akshaya@cluster0.hwmacja.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

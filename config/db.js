require("mongoose").connect("mongodb+srv://jamessteppingstone:lmG7lGrKAweE5EnG@cluster0.owte58w.mongodb.net")
.then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DB NOT ----- Connected", err);
})

/*
username : jamessteppingstone
password : lmG7lGrKAweE5EnG

*/
const routes = require("express").Router();
const MainMenu = require("../models/MainMenu");


routes.get("/", async(req, res)=>{
    let result = await MainMenu.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await MainMenu.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

routes.post("/", async(req, res)=>{
    await MainMenu.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await MainMenu.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await MainMenu.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;
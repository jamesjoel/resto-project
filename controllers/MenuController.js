const routes = require("express").Router();
const Menu = require("../models/Menu");


routes.get("/", async(req, res)=>{
    let result = await Menu.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await Menu.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

routes.post("/", async(req, res)=>{
    await Menu.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await Menu.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await Menu.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;
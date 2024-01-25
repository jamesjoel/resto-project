const routes = require("express").Router();
const Contact = require("../models/Contact");


routes.get("/", async(req, res)=>{
    let result = await Contact.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await Contact.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

routes.post("/", async(req, res)=>{
    await Contact.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await Contact.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await Contact.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;
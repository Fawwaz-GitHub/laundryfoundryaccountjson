const { request } = require('express');
var express = require('express');
var router = express.Router();
var userSchema = require("../Schema/schema")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/home/wash', async function (req, res){
  try{
    await userSchema.create(req.body)
    res.send('added')
  }
  catch (err){
    console.log(err)
  }
})

router.get('/home/cart', async function (req, res){
  try{
    const result = await userSchema.find()
    res.json(result)
  } 
  catch (error) {
    console.log(error)
  }
})

router.delete("/home/cart/:id", async function (req,res){
  try{
    const {id} = req.params;
    await userSchema.findByIdAndDelete(id)
    res.send('deleted')
  }
  catch (err) {
    res.send(err)
  }
})

module.exports = router;

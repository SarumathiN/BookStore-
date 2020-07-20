/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
login: async function (req, res) {
  let user = await User.findOne({ 'email': req.body.name, 'password': req.body.password });
  res.send(user);
},
   
signup: async function (req, res) {
   let newUser = await User.create(req.body).fetch();
   res.send(newUser);
  },
  updateUser:async function(req,res){
    if (req.body.id) {
      let user = await User.update({ id: req.body.id }).set(req.body).fetch();
      res.send(user[0]);
    } else {
      res.send({'message' : noupdate});
    }
  },
  getUserBooks:async function(req,res){
    let books = await Book.find({upload_email : req.body.user_email});
    res.send(books);
  }

};


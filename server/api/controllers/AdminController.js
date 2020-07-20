/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

addBook: async function (req, res) {
    if(req.body.upload_email === 'admin@gmail.com' && req.body.upload_user === 'Admin'){
      req.body.status = 'Approved';
      req.body.condition = 'new';
      req.body.old_price = 0;
    }
    else{
      req.body.status = 'Requested';
      req.body.condition = 'old';
    }
    let newBook = await Book.create(req.body).fetch();
    res.send(newBook);
},
sendFeedback : async function(req,res){ 
    let newFeed = await Feedback.create(req.body).fetch();
    res.send(newFeed);
},
getBooks : async function(req,res){
    let bookList = await Book.find({status : req.body.status,upload_email: { '!=': req.body.user_email}}).limit(50);
    res.send(bookList);
},
 getBookDetails: async function (req, res) {
    let book = await Book.find({id:req.body.id}).limit(1);
    res.send(book);
  },
  placeOrders: async function (req, res){
      if(req.body.commission_price){
      req.body.total_amount = req.body.quantity * req.body.commission_price;
      }else{
        req.body.total_amount = req.body.quantity * req.body.book_new_price; 
      }
      let order = await Order.create(req.body).fetch();
      let new_value = req.body.availability - req.body.quantity;
      let book  = await Book.update({id : req.body.book_id}).set({availability : new_value});
      let new_Order = await Order.update({id : order.id}).set({availability : new_value});
      res.send(new_Order);
  },
  getOrdersList: async function (req,res){
     let orderList = await Order.find({order_email : req.body.email , status:'Addedcart'}).limit(50);
     res.send(orderList);
  },
  deleteOrder: async function (req, res) {
    let deletedOrder = await Order.destroy({ id: req.body.id }).fetch();
    let newval = parseInt(deletedOrder[0].availability) + parseInt(deletedOrder [0].quantity);
    let book  = await Book.update({id : req.body.book_id}).set({availability : newval});
    res.send(deletedOrder);
  },
  finalizeBook: async function(req,res) {
    let purchased = await Order.update({order_email:req.body.useremail}).set({
      status: 'Purchased'
    }).fetch();
    res.send(purchased);
  },
  getOrders:async function(req,res){
    let transactions = await Order.find({status : req.body.status});
    res.send(transactions);
  },
  getRequestedBooks: async function(req,res){
    let bookList = await Book.find({status : req.body.status , upload_email : req.body.user_email});
    res.send(bookList);
  },
  salesApproval: async function(req,res){
    let approved = await Book.update({id:req.body.id}).set({
      status : 'Approved'
    }).fetch();
    let new_val = approved[0].new_price +  ((approved[0].new_price*25)/100);
    let approvedBook = await Book.update({id:req.body.id}).set({
      commission_price : new_val
    }).fetch();
    res.send(approvedBook);
  },
  deliveryComplete:async function(req,res){
    let delivered = await Order.update({id: req.body.id}).set({
      status : 'Delivered'
    }).fetch();
    res.send(delivered);
  },
  getCategory:async function(req,res){
    let books = await Book.find({category: req.body.category , status : 'Approved'});
    res.send(books);
  },
  // getBookCount:async function(req,res){
  //   let count = await Book.count({isbn: req.body.isbn , status : 'Approved' , condition : 'new'});
  //   res.send({'bookCount':count});
  // }
  getFeedback:async function(req,res){
    let feed = await Feedback.find().limit(50);
    res.send(feed);
  },
  getDashBoardCount:async function(req,res){
    let usercount = await User.count({email:{'!=': 'admin@gmail.com'}});
    let requestcount = await Book.count({status : 'Requested'});
    let purchasecount = await Order.count({status : 'Purchased'});
    let feedcount = await Feedback.count();
    res.send({'usercount' : usercount,'requestcount' : requestcount ,'feecount' : feedcount,'purchasecount' : purchasecount});
  }
};




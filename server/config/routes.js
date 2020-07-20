/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  "POST /signup": "UserController.signup",
  "POST /login": "UserController.login",
  "POST /addBook": "AdminController.addBook",
  "POST /sendFeedback": "AdminController.sendFeedback",
  "POST /getBooks": "AdminController.getBooks",
  "POST /getBookDetails": "AdminController.getBookDetails",
  "POST /placeOrders": "AdminController.placeOrders",
  "POST /getOrdersList": "AdminController.getOrdersList",
  "POST /deleteOrder": "AdminController.deleteOrder",
  "POST /updateUser": "UserController.updateUser",
  "POST /finalizeBook": "AdminController.finalizeBook",
  "POST /getOrders": "AdminController.getOrders",
  "POST /getRequestedBooks": "AdminController.getRequestedBooks",
  "POST /salesApproval" : "AdminController.salesApproval",
  "POST /getUserBooks" : "UserController.getUserBooks",
  "POST /deliveryComplete" : "AdminController.deliveryComplete",
  
  "POST /getCategory" : "AdminController.getCategory",
  "POST /getBookCount" : "AdminController.getBookCount",
  "GET /getFeedback" : "AdminController.getFeedback",
  "GET /getDashBoardCount" : "AdminController.getDashBoardCount"
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

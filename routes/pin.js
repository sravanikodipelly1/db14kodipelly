var express = require('express');
const pin_controllers= require('../controllers/pin');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET pins */
router.get('/', pin_controllers.pin_view_all_Page );
/* GET detail pin page */
router.get('/detail', pin_controllers.pin_view_one_Page);
/* GET create pin page */
router.get('/create', pin_controllers.pin_create_Page);
/* GET create update page */
router.get('/update', secured, pin_controllers.pin_update_Page);
/* GET create pin page */
router.get('/delete', pin_controllers.pin_delete_Page);

module.exports = router;
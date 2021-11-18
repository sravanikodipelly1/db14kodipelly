var express = require('express');
const pin_controllers= require('../controllers/pin');
var router = express.Router();
/* GET pins */
router.get('/', pin_controllers.pin_view_all_Page );
/* GET detail pin page */
router.get('/detail', pin_controllers.pin_view_one_Page);
/* GET create pin page */
router.get('/create', pin_controllers.pin_create_Page);
/* GET create update page */
router.get('/update', pin_controllers.pin_update_Page);
/* GET create pin page */
router.get('/delete', pin_controllers.pin_delete_Page);

module.exports = router;
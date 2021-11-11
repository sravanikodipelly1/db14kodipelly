var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pin_controller = require('../controllers/pin'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', pin_controller.pin_view_all_Page ); 
/// pin ROUTES /// 
 
// POST request for creating a pin.  
router.post('/pin', pin_controller.pin_create_post); 
 
// DELETE request to delete pin. 
router.delete('/pin/:id', pin_controller.pin_delete); 
 
// PUT request to update pin. 
router.put('/pin/:id', 
pin_controller.pin_update_put); 
 
// GET request for one pin. 
router.get('/pin/:id', pin_controller.pin_detail); 
 
// GET request for list of all pin items. 
router.get('/pin', pin_controller.pin_list); 
 
module.exports = router; 
 
 
// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"pin", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
}; 
 

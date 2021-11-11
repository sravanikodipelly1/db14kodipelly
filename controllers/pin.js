var pin = require('../models/pin'); 
 
// List of all pin 
exports.pin_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: pin list'); 
}; 
 
// for a specific pin. 
exports.pin_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pin detail: ' + req.params.id); 
}; 
 
// Handle pin create on POST. 
exports.pin_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: pin create POST'); 
}; 
 
// Handle pin delete form on DELETE. 
exports.pin_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pin delete DELETE ' + req.params.id); 
}; 
 
// Handle pin update form on PUT. 
exports.pin_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pin update PUT' + req.params.id); 
}; 
var pin = require('../models/pin'); 
 
// List of all pin 
//exports.pin_list = function(req, res) { 
  //  res.send('NOT IMPLEMENTED: pin list'); 
//};
// List of all Costumes 
exports.pin_list = async function(req, res) { 
    try{ 
        thepin = await pin.find(); 
        res.send(thepin); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
// VIEWS 
// Handle a show all view 
exports.pin_view_all_Page = async function(req, res) { 
    try{ 
        thepin = await pin.find(); 
        res.render('pin', { title: 'pin Search Results', results: thepin }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
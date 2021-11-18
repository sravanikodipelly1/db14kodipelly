var pin = require('../models/pin');
// List of all pins
exports.pin_list = function (req, res) {
    res.send('NOT IMPLEMENTED: pin list');
};
// for a specific pin.
exports.pin_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await pin.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle pin create on POST.
exports.pin_create_post = async function (req, res) {
    console.log(req.body)
    let document = new pin();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.pinType = req.body.pinType;
    document.pinCost = req.body.pinsize;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle pin delete on DELETE.
exports.pin_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await pin.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   // Handle pin update form on PUT.
exports.pin_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await pin.findById( req.params.id)
 // Do updates of properties
 
 if(req.body.pin_type) toUpdate.pin_type = req.body.pin_type;
 if(req.body.pinsize) toUpdate.pinsize = req.body.pinsize;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// List of all pins
exports.pin_list = async function (req, res) {
    try {
        thepin = await pin.find();
        res.send(thepin);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.pin_view_all_Page = async function (req, res) {
    try {
        thepin = await pin.find();
        res.render('pin', {
            title: 'pin Search Results',
            results: thepin
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.pin_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await pin.findById( req.query.id)
    res.render('pindetail',
   { title: 'pin Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a pin.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pin_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('pincreate', { title: 'pin Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a pin.
// query provides the id
exports.pin_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await pin.findById(req.query.id)
    res.render('pinupdate', { title: 'pin Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.pin_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await pin.findById(req.query.id)
    res.render('pindelete', { title: 'pin Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }
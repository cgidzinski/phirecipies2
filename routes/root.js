var DB = require('../models/models');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    app.post('/add', function(req, res) {
        var ok = new DB.Recipie
        ok.name = req.body.recipieName;
        ok.description = req.body.recipieDescription;
        ok.instructions = req.body.recipieInstructions;
        ok.save()
        res.redirect('/new');
    });
    app.get('/new', function(req, res) {
        res.render('new.ejs');
    });
    app.get('/view', function(req, res) {
        DB.Recipie.find({}, function(err, recipieList) {
            res.render('view.ejs', {
                recipieList: recipieList
            });
        });
    });
    app.get('/view/:id', function(req, res) {
        DB.Recipie.findOne({ _id: req.params.id }, function(err, recipie) {
            console.log(recipie)
            res.render('viewSingle.ejs', {
                recipie: recipie
            });
        });
    });
}

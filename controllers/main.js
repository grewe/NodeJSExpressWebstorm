/* GET home page Controller. */
module.exports.index =  function(req, res, next) {
        res.render('index', { title: 'CS at CSUEB',
            courseInfo: {
                name: 'Web Design',
                professor: 'L. Grewe'
            },

            otherCourses : [
                { name: 'CS 1',
                    professor: 'L. Ertaul'},
                { name: 'Newtworking',
                    professor: 'L. Christiansan'},
                { name: 'Computer Vision',
                    professor: 'L. Grewe' }
            ]
        });
};


/* GET form page Controller. ---simply renders the form.ejs view */
module.exports.form =  function(req, res, next) {
    console.log(req.body);
    res.render('form')
};

/* GET form page Controller. ---simply renders the form.ejs view */
module.exports.form =  function(req, res, next) {
    console.log(req.body);
    res.render('form');
};

/* POST and proform page Controller. ---simply renders the form.ejs view */
module.exports.processForm =  function(req, res, next) {

    console.log(req.body);
    var body = JSON.stringify(req.body);
    var params = JSON.stringify(req.params);
    var value_tofield_formdata = req.body.to;
    var value_sayfield_formdata = req.body.say;
    res.send("recieved your request!</br>" + "parameters: " + params + "</br>URL:" + req.url +
        "<br>body: " + body + "<br>the -to- form field = " + value_tofield_formdata +
        "<br> the - say- form field = " + value_sayfield_formdata);

};

//ANY POST request to /processForm  we expect will be sending us HTML form data with 2 fields named "to" and "say"
//   printout to the response some of this body data
/*
app.post('/processForm', function(req, res){

});
*/
//ANY GET request to /form render the form.ejs file from STEP 2
/*
app.get('/form', function(req, res){

});*/
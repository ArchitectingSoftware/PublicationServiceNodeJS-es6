var pList = require('./jsonDB/paperList');

module.exports = function(app){

    //get papers by id
    getPaperById = function(id)
    {
        return pList.db[id];
    };

    getErrorObject = function(c,m)
    {
        return {code:c, message:m};
    };

    app.get('/publications', function(req, res, next) {
        req.url = '/publications/';
        next();
    });
    app.get('/publications/all', function(req, res, next) {
        req.url = '/publications/';
        next();
    });
    app.get('/publications/:id', function(req, res) {

        var ErrorMsg= {id:req.params.id,
            msg:"the paper with this ID was not found"
            };
        var resObject = {};

        if(req.params.id >= 1 && req.params.id <= pList.db.total_count)
            resObject = getPaperById(req.params.id);
        else
            resObject = ErrorMsg;

        res.json(resObject);
    });



    //Get all of the papers
    app.get('/publications/', function(req, res) {

        var l = req.query.limit;
        var o = req.query.offset;
        var ErrorMsg= {id:400,
            msg:"both the limit and offset parameters are required"
        };

        if(l == null && o == null)
            res.json(pList.db);
        else
        if(l == null || o == null)
            res.json(getErrorObject(400,"Both the limit and offset variables are required if one is used"));
        else {

            li = parseInt(l)
            oi = parseInt(o)

            if(oi > pList.db.total_count || oi < 1)
                res.json(getErrorObject(400,"Offset variable is out of range "));
            else if(li < 0)
                res.json(getErrorObject(400,"Limit must be positive"));
            else{
                //finally all parameters are OK, build the response structure and return it
                var RspList = [];
                for(i = o; i < li+oi; i++){
                    if(i <= 14)
                        RspList.push(getPaperById(i))
                }
                res.json(RspList);

            }
        }
    });

};



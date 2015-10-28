"use strict";

var pList = require('./jsonDB/paperList2.json');
var _ = require('underscore');

module.exports = function(app){

    var DB = _.toArray(pList.db);
    var MAX_RECORDS = DB.length;


    //get papers by id
    let getPaperById = function(id)
    {
        return pList.db[id];
    };


    let buildResponse = function(payload, isError, code, msg){
        let resp = {results:null,metadata:{count:0,error:isError,statusCode:code,message:msg}};
        var res = payload;
        if(! _.isArguments(res))
            res = _.toArray(payload);
        var count = res.length;
        resp.results = res;
        resp.metadata.count = count;
        return resp;
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
        //simulate an expensive call --getPaperById using a promise
        let dbCall = new Promise((fOk, fFail) => {
            let result = getPaperById(req.params.id);

            if(result)
                fOk(result);
            else
                fFail("Paper with ID of " + req.params.id + "  was not found");
        });

        dbCall.then( (data) => {
            res.json(buildResponse([data],false,200,"OK"))
        }).catch( (errMsg) => {
            res.status(404);
            res.json(buildResponse([], true, 404, errMsg));
        });
    });

    //Get all of the papers


    app.get('/publications/', function(req, res) {

        var l = req.query.limit;
        var o = req.query.offset;

        if(l == null && o == null) {

            //simple syn version below
            //var resp = buildResponse(DB,false,200,"OK");
            //res.json(resp);

            let call = new Promise( (fOk,fFail) => {
                fOk(buildResponse(DB,false,200,"OK"));
            }).then ( (returnData) => res.json(returnData))
            .catch((error) => {
                res.json(buildResponse([],true,400,"An unknonwn error has happened " + error));
            });
        }
        else
        if(l == null || o == null)
            res.json(buildResponse([],true,400,"Both the limit and offset variables are required if one is used"));
        else {

            let li = parseInt(l);
            let oi = parseInt(o);

            if(oi > MAX_RECORDS|| oi < 1)
                res.json(buildResponse([],true,400,"Offset variable is out of range "));
            else if(li < 0)
                res.json(buildResponse([],true,400,"Limit must be positive"));
            else{
                //finally all parameters are OK, build the response structure and return it
                //start position is o-1, end is o+l

                //let RspList = DB.slice(oi-1,oi-1+li)
                //res.json(buildResponse(RspList,false,200,"OK"));

                let call = new Promise( (fOk,fFail) => {
                    fOk(DB.slice(oi-1,oi-1+li));
                }).then ( (returnArray) => {
                        res.json(res.json(buildResponse(returnArray,false,200,"OK")));
                    })
                    .catch((error) => {
                        res.json(buildResponse([],true,400,"An unknonwn error has happened "+error));
                    });
            }
        }

    });
};



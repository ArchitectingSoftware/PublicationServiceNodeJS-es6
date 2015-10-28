"use strict";

var pList = require('./jsonDB/paperList2.json');
var _ = require('underscore');

module.exports = function (app) {

    var DB = _.toArray(pList.db);
    var MAX_RECORDS = DB.length;

    //get papers by id
    var getPaperById = function getPaperById(id) {
        return pList.db[id];
    };

    var buildResponse = function buildResponse(payload, isError, code, msg) {
        var resp = { results: null, metadata: { count: 0, error: isError, statusCode: code, message: msg } };
        var res = payload;
        if (!_.isArguments(res)) res = _.toArray(payload);
        var count = res.length;
        resp.results = res;
        resp.metadata.count = count;
        return resp;
    };

    app.get('/publications', function (req, res, next) {
        req.url = '/publications/';
        next();
    });
    app.get('/publications/all', function (req, res, next) {
        req.url = '/publications/';
        next();
    });

    app.get('/publications/:id', function (req, res) {
        //simulate an expensive call --getPaperById using a promise
        var dbCall = new Promise(function (fOk, fFail) {
            var result = getPaperById(req.params.id);

            if (result) fOk(result);else fFail("Paper with ID of " + req.params.id + "  was not found");
        });

        dbCall.then(function (data) {
            res.json(buildResponse([data], false, 200, "OK"));
        })['catch'](function (errMsg) {
            res.status(404);
            res.json(buildResponse([], true, 404, errMsg));
        });
    });

    //Get all of the papers

    app.get('/publications/', function (req, res) {

        var l = req.query.limit;
        var o = req.query.offset;

        if (l == null && o == null) {

            //simple syn version below
            //var resp = buildResponse(DB,false,200,"OK");
            //res.json(resp);

            var call = new Promise(function (fOk, fFail) {
                fOk(buildResponse(DB, false, 200, "OK"));
            }).then(function (returnData) {
                return res.json(returnData);
            })['catch'](function (error) {
                res.json(buildResponse([], true, 400, "An unknonwn error has happened " + error));
            });
        } else if (l == null || o == null) res.json(buildResponse([], true, 400, "Both the limit and offset variables are required if one is used"));else {
            (function () {

                var li = parseInt(l);
                var oi = parseInt(o);

                if (oi > MAX_RECORDS || oi < 1) res.json(buildResponse([], true, 400, "Offset variable is out of range "));else if (li < 0) res.json(buildResponse([], true, 400, "Limit must be positive"));else {
                    //finally all parameters are OK, build the response structure and return it
                    //start position is o-1, end is o+l

                    //let RspList = DB.slice(oi-1,oi-1+li)
                    //res.json(buildResponse(RspList,false,200,"OK"));

                    var call = new Promise(function (fOk, fFail) {
                        fOk(DB.slice(oi - 1, oi - 1 + li));
                    }).then(function (returnArray) {
                        res.json(res.json(buildResponse(returnArray, false, 200, "OK")));
                    })['catch'](function (error) {
                        res.json(buildResponse([], true, 400, "An unknonwn error has happened " + error));
                    });
                }
            })();
        }
    });
};

//# sourceMappingURL=PaperService-compiled.js.map
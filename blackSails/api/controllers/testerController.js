/**
* tester
*
* @description :: Server-side operations for hardware production status
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

/**
* @api {POST} /tester/gettest Get the production status for defined hardwares
* @apiName gettest
* @apiGroup tester
*
* @apiParam {Int[]} hi An array with hardwares IDs to get status
*
* @apiSuccess {Int} hi Target hardware ID

*
* @apiParamExample {json} Request-Example:
* {
*	hi: [55,54]
* }
*
*
*/
exports.getTest = function(req, res) {
  var params = req.params.all();
  if (params.hi) {
    tester.find({'hi': params.hi}, function(err, results) {
      if (err) return res.badRequest();
      //Removes createdAt, updatedAt and ID.
      return res.json(results.map(function(item){
        return  {
          'hi': item.hi
        };
      }));
    });
  } else {
    res.badRequest();
  }
};

exports.findusCreatus = function(req, res) {
    var params = req.params.all();
  if (params.hi) {
    tester.findOrCreate({'hi': params.hi}, function(err, result) {
      if (err) return res.badRequest();
      return res.json({'hi': params.hi, 'views':result.views})
    });
  }
};

exports.creatusUpdatus = function(req, res) {
    var params = req.params.all();
  if (params.hi) {
    console.log(params);
    tester.findOrCreate({'hi': params.hi}, function(err, result) {
      if (err) return res.badRequest(err);
      console.log(result);
      tester.update({'hi': params.hi},{'views':result.views+1},function(err, jesus)
      {
        console.log(jesus);
        return res.json({'hi': jesus.hi, 'views':jesus.views})
      });
      console.log(result);
    });
  }
};
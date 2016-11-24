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

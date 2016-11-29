/**
 * ProdController
 *
 * @description :: Server-side logic for managing prods
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment =require('moment');
var _ = require('lodash');

exports.getprod2 = function(req, res) {

  Prod.find({limit:100},function(err, result) {
      return res.json(result.map(function(item){
      	return{
      	'pt': moment(item.pt).format('MM/DD/YYYY'),
        'ri': item.ri,
        'sis': item.sis,
        'uuid': item.uuid};        
      }));
  });
};

exports.getprod = function(req, res) {

  Prod.find(function(err, result) {
      return res.json(result.map(function(item){
      	return{
      	'pt': moment(item.pt).format('MM/DD/YYYY'),
        'ri': item.ri,
        'sis': item.sis,
        'uuid': item.uuid};        
      }));
  });
};

exports.getGrpProd = function(req, res) {

 Prod.find({limit:10},function(err, result) 
 {
  	
  	gproduction = {};
  	for(var item in result)
  	{
  		item = result[item];
  		if(!gproduction[item.ri]) 
  		{
  			gproduction[item.ri] = [];
  		}
  		gproduction[item.ri].push
  		({
	  		'pt': moment(item.pt).format('MM/DD/YYYY'),
	        'ri': item.ri,
	        'sis': item.sis,
	        'uuid': item.uuid
  		});
  	}
    return res.json(gproduction);
  });
  
};


exports.getGrpProddate = function(req, res) {

 Prod.find({limit:10},function(err, result) 
 {
  	
  	gproduction = {};
  	for(var item in result)
  	{
  		item = result[item];
  		var fdate =moment(item.pt).format('MM/DD/YYYY');
  		if(!gproduction[fdate]) 
  		{
  			gproduction[fdate] = [];
  		}
  		gproduction[fdate].push
  		({
	  		'pt': fdate,
	        'ri': item.ri,
	        'sis': item.sis,
	        'uuid': item.uuid
  		});
  	}
    return res.json(gproduction);
  });
  
};


exports.getavarageByDay = function(req, res) {

 Prod.find(function(err, result) 
 {
  	
  	gproduction = {};
  	dayAv = {};
  	for(var item in result)
  	{
  		item = result[item];
  		var fdate =moment(item.pt).format('MM/DD/YYYY');
  		if(!gproduction[fdate]) 
  		{
  			gproduction[fdate] = [];
  		}
  		gproduction[fdate].push
  		({
  			'pt': fdate,
	        'sis': item.sis,
  		});
  	}
  	
  	var count=0;

  	for(var item in gproduction)
  	{
  	 	gproduction[item]=Math.round(ProdService.calculateAverage(gproduction[item]) * 1000) / 1000;		
  		
  	}
	console.log(gproduction);


    return res.json(gproduction);
  });
  
};

///
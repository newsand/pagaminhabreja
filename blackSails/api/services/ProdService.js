
exports.calculateAverage = function (prods){
  sumSis = prods.reduce(function(prevValue, productionData){
      return prevValue + productionData.sis;
  }, 0);  
  return sumSis/prods.length;
};
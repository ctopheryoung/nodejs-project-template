var apiKey = require('./../.env').apiKey;

exports.functionName = function(param){
  $.get('https://api.someAPI.com/' + param + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

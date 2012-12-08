
var user = function(){
  var databaseUrl = "mydb";
  var collections = ["users"];
  var db = require("mongojs").connect(databaseUrl,collections);
  db.users.find({age:55},{firstname:true,lastname:true}).foreach(function(u){
    
  });
};

exports.userQuery = userQuery;

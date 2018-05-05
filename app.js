
let success = null;
let word = "love"
const fs = require("fs");
var Dictionary = require("oxford-dictionary-api");
var app_id = ""; 
var app_key = "";
var dict = new Dictionary(app_id,app_key);
dict.find(word,function(error,data){ 
    if(error) {
        success = null;
        return console.log(error);
    }
     else{
        success = (data.results[0].id);
        fs.appendFile('message.txt', `${success},`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
     }
});

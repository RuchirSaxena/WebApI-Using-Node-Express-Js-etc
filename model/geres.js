var mongoose=require('mongoose');

//Genre Schema
var genresSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

var Genre=module.exports=mongoose.model('Genre',genresSchema);

//Get Genres
module.exports.getGenres=function(callback,limit){
    Genre.find(callback).limit(limit);
};

//Add Generes
module.exports.addGenres=function(genre,callback){
    Genre.create(genre,callback);
}

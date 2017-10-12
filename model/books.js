var mongoose=require('mongoose');

//Books Schema
var booksSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

var Books=module.exports=mongoose.model('Books',booksSchema);

module.exports.getBooks=function(callback,limit){
    Books.find(callback).limit(limit);
};


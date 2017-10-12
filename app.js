var express=require('express');
var app=express();
var bodyParser=require('body-parser');
try{
var mongoose=require('mongoose');
}catch(err){
    console.log(err);
}

Genre=require('./model/geres');
Books=require('./model/books');

//Initializing Body Parser
app.use(bodyParser.json());

//Connect to Mongooes
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('Hello World123444');
});

//Getting the Genres Data From MongoDB 
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

//Getting the Books Data From MongoDB
app.get('/api/books',function(req,res){
  //  res.send("ok");
    Books.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

//Adding Genres
app.post('/api/genres',function(req,res){
    var genre=req.body;
    Genre.addGenres(genre,function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});


app.listen(3000);
console.log('Runnnig on port 3000...');

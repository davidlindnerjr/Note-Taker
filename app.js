const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid  = require('uuid');
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder
app.use(express.static(path.join(__dirname, '/public')));

//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//GET the db.json and displays contents
app.get('/api/notes', (req, res)=>{
    fs.readFile('./db/db.json', 'utf-8', (err, data)=>{
        let noteArray = JSON.parse(data);
        res.send(noteArray);
    });
});

//POST new note to db.json
app.post('/api/notes', (req, res)=>{
    fs.readFile('./db/db.json', 'utf-8', (err, data)=>{
        if(err)throw err;
        let noteArray = JSON.parse(data);
        noteArray.push({
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text,
        });

        fs.writeFile('./db/db.json', JSON.stringify(noteArray), (err)=>{
            if(err)throw err;
        });
        res.send(noteArray);
    });
});

//DELETE note from db.json
app.delete('/api/notes/:id', (req, res)=>{
    fs.readFile('./db/db.json', 'utf-8', (err, data)=>{
        if(err)throw err;
        let noteArray = JSON.parse(data);
        
        //Find index with id searched for
        for(let i = 0; i < noteArray.length; i++){
            if(noteArray[i].id === req.params.id){
                res.send(noteArray.id);
                //delete contents of the element
                noteArray.splice(i, 1);
            }
        }
        //Re-write data to db.json
        fs.writeFile('./db/db.json', JSON.stringify(noteArray), (err)=>{
            if(err)throw err;
        });
    });
});

app.listen(PORT, ()=>{console.log(`Server started on PORT: ${PORT}`)});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/businesses',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', ()=>{
    console.log('server is connected')
});

mongoose.connection.collection('error', (err)=>{
    console.log(err, "couldn't commect")
});

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose disconnected')
});
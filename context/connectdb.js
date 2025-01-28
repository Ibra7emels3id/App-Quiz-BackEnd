const mongoose = require('mongoose');

const Connectdb = () => {
    mongoose.connect('mongodb://ibra7emdev:EmoBfoSvRxWHhhFN@cluster0-shard-00-00.xu4wv.mongodb.net:27017,cluster0-shard-00-01.xu4wv.mongodb.net:27017,cluster0-shard-00-02.xu4wv.mongodb.net:27017/?ssl=true&replicaSet=atlas-dak0da-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster')
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));
}

module.exports = Connectdb;

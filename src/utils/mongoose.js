const mongoose =  require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27018/upconta?replicaSet=tocset', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => { console.log(err)})

    // mongoose.connect('mongodb://host1:port1/?replicaSet=rsName');
    // mongo mongodb://localhost:27018
    // mongodb://127.0.0.1:27018/${mongo.db}
var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/mongoose');

var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected success');
});

var userSchema = new mongoose.Schema({
    user_name: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    password: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});
userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id', startAt: 1 });

var categorySchema = new mongoose.Schema({
    title: String,
    description: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});
userSchema.plugin(autoIncrement.plugin, { model: 'Category', field: 'id', startAt: 1 });

var User = mongoose.model('User', userSchema);
var Category = mongoose.model('Category', categorySchema);


export {
    User,
    Category
}



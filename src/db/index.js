var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/mongoose');

var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose connected success');
});

var userSchema = require('./userSchema');
userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id', startAt: 1 });
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

var categorySchema = require('./categorySchema');
categorySchema.plugin(autoIncrement.plugin, { model: 'Category', field: 'id', startAt: 1 });

var User = mongoose.model('User', userSchema);
var Category = mongoose.model('Category', categorySchema);


export {
    User,
    Category
}



const mongoose =require('mongoose');

const acountSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    mail: String,
    password: String,
    likedPhotos: Number

});

module.exports = mongoose.model('Accaunts', acountSchema);
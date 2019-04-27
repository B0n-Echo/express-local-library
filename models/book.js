var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    // created two references to other models (ref: author & genre)
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
});


// Virtual properties
/* The getters are useful for formatting or combining fields, 
while setters are useful for de-composing a single value into multiple values for storage*/

BookSchema.virtual('url').get(function() {
    return `/catalog/book/${this._id}`;
});

BookSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

//Export model
module.exports = mongoose.model('Book', BookSchema);
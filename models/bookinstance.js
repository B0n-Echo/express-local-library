var mongoose = require('mongoose');
var moment = require('moment');
 
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true}, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, 
             enum : ['Available', 'Maintenance', 'Loaned', 'Reserved'], // enum: This allows us to set the allowed values of a string
             default: 'Maintenance'}, // default: We use default to set the default status
    due_back: {type: Date, default: Date.now}
});

// Virtual for bookinstance

BookInstanceSchema.virtual('url').get(function() {
   return `/catalog/bookinstance/${this._id}`;
});

BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);
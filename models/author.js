var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});


// Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB.

/* The getters are useful for formatting or combining fields, 
while setters are useful for de-composing a single value into multiple values for storage*/

AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

AuthorSchema.virtual('lifespan').get(function() {
  var lifetime_string='';

  if(this.date_of_death){
    lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
  }
  
  lifetime_string+=' - ';

  if(this.date_of_birth) {
    lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
  }

  return lifetime_string;
});

// "url" that returns the absolute URL required to get a particular instance of the model 
AuthorSchema.virtual('url').get(function() {
    return `/catalog/author/${this._id}`;
});

AuthorSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

// Export Model
module.exports = mongoose.model('Author', AuthorSchema);
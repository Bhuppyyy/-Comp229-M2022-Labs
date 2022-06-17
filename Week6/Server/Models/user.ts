// Step 1 = import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose'
const Schema = mongoose.Schema; //alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

// Step 2 = Create a Schema that matches the data
const UserSchema = new Schema

  ({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
  },
  {
      collection: "users"
  });

  declare global
  {
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
  }

  

  //Step 3 - Plugin the passport local mongoose module
  UserSchema.plugin(passportLocalMongoose);

  //Step 4 - Create a Model using the schema
  const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
  
  //Step 5 - Export the model -> this makes the file a module
  export default Model;

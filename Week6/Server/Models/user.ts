// Step 1 = import mongoose
import mongoose from 'mongoose'
const Schema = mongoose.Schema; //alias for mongoose.Schema

// Step 2 = Create a Schema that matches the data
const UserSchema = new Schema

  ({
    DsiplayName: String,
    username: String,
    EmailAdress: String,
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

  //Step 3 = Create a Model using the schema
  const Model = mongoose.model("User", UserSchema);
  
  //Step 4 = Export the model -> this makes the file a module
  export default Model;

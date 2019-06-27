import * as mongoose from "mongoose";

const uri: string = "mongodb+srv://leotm2010:7Rgzc9YjoPIi7MaY@leosplayground-ldzjr.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

export interface IUser extends mongoose.Document {
  title: string;
  author: number;
}

export const UserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
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
    firstName: String;
    lastName: String;
    email: String;
    avatarUrl: String;
    
    accounts: [
        { 
            kind: "internal";
            username: String;
            password: String;
        },
        {
            kind: "google";
            id: String;
        },
        {
            kind: "o365";
            id: String;
        }
    ],
    
    isActive: Boolean;
}

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    avatarUrl: String,
    
    accounts: [
        { 
            kind: "internal",
            username: String,
            password: String
        },
        {
            kind: "google",
            id: String
        },
        {
            kind: "o365",
            id: String
        }
    ],
    
    isActive: Boolean
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

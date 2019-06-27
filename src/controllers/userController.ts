import { Request, Response } from "express";
import User from "./../user";

// We'll start with allUsers which will return
// every we have from our database
export let allUsers = (req: Request, res: Response) => {
  let users = User.find((err: any, users: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(users);
    }
  });
};

export let getUser = (req: Request, res: Response) => {
    let user = User.findById(req.params.id, (err: any, user: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  };

  export let deleteUser = (req: Request, res: Response) => {
    let user = User.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully Deleted User");
      }
    });
  };

  export let updateUser = (req: Request, res: Response) => {
    console.log(req.body);
    let user = User.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, user: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Succesfully updated user!");
        }
      }
    );
  };

  export let addUser = (req: Request, res: Response) => {
    var user = new User(req.body);
  
    user.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  };

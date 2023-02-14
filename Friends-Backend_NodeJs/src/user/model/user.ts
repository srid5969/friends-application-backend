import { Schema, model } from "mongoose";

export interface IUser {
_id: any;
  username: string;
  name:string
  password: string;
  role: string;
  age:number
  dob:Date
  email:string
  phoneNumber:number
  address:string[]
  bloodGroup:string
}
export const userSchema: Schema = new Schema<IUser>(
  {
    username: { type:String,required: true, unique: true },
    password: { type:String,required: true, unique: true, select: false },
    role: {
      enum: {
        values: ["user","admin"],
      },
    },
    name:{type:String},
    age:{type:Number},
    dob:{type:Date},
    email:{type:String},
    phoneNumber:{type:Number},
    address:{type:Schema.Types.Mixed},
    bloodGroup:{type:String},
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);

userSchema.methods.setPassword = function (password: string) {};

userSchema.methods.validPassword = function (password: any) {
  return "this.hash === hash";
};
const User = model<IUser>("users", userSchema);
export default User;

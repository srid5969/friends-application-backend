import user, { IUser } from "../model/user";

export async function register(data: IUser) {
  data.dob = new Date(data.dob).toISOString();

  const Data = new user(data);
  const saveData = await Data.save();
  return saveData;
}
export async function get() {
 
  // return await ;
}
export async function bloodGroups() {
  const data = [
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
    "A1B+",
    "A1B-",
  ];
  return Promise.all(data);
}

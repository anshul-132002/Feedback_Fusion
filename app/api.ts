import axios from "axios";
import { userType } from "./instances";

export default async function getUserList(): Promise<userType[]> {
  const response = await axios.get<userType[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
}

import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log(">>>>> DB is connect");
  } catch (error) {
    console.log(error);
  }
};

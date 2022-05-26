import mongoose from "mongoose";
export default (idToValidate) => {
  if (!mongoose.Types.ObjectId.isValid(idToValidate)) {
    return res.status(404).send("No post with that ID!!");
  }
};

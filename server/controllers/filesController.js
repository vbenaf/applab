import FileModel from "../models/fileModel.js";
import checkIfIdValid from "../utils/index.js";
export const getFiles = async (req, res) => {
  try {
    //variable to store all files from mongodb database
    const files = await FileModel.find();
    //return 200 code with files as json object --> 200 means success
    res.status(200).json(files);
  } catch (error) {
    //404: The requested resource was not found
    res.status(404).json({ message: error.message });
  }
};

export const createFile = async (req, res) => {
  console.log("here i am");
  try {
    const file = req.body;
    const newFile = new FileModel({
      title: file.title,
      content: file.formData,
    });
    await newFile.save();
    console.log("here i am done!!");
    res.status(201).json(newFile);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

export const updateFile = async (req, res) => {
  const { id } = req.params;
  const file = req.body;
  console.log(id, file);
  checkIfIdValid(id);
  try {
    const updateFile = await FileModel.findByIdAndUpdate(id, {
      title: file.title,
      content: file.formData,
    });
    console.log("updated file: ", updateFile);
    return res.json(updateFile);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFile = async (req, res) => {
  const { id } = req.params;
  checkIfIdValid(id);
  try {
    await FileModel.findByIdAndRemove(id);
    return res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

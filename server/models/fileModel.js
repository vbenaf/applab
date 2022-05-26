import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
    title:String,
    content:String,
    creator:String,
    sharedWith:[String]
})

const FileModel = mongoose.model('FileModel',fileSchema);
export default FileModel;
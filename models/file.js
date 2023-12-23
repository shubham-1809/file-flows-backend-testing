const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
    collegeName: { type: String, required: false },
    studentName: { type: String, required: false },
    rollNumber: { type: String, required: false },
    branchName: { type: String, required: false },
    section: { type: Number, required: false },
    projectType: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
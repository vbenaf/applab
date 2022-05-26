import express from "express";
import { getFiles, createFile, updateFile, deleteFile } from "../controllers/filesController.js";
const router = express.Router();

router.get("/", getFiles);
router.post("/", createFile);
router.patch('/:id', updateFile);
router.delete("/:id",deleteFile);

export default router;

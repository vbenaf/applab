import * as API from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
export const getFilesAction = () => async (dispatch) => {
  try {
    const { data } = await API.fetchFiles();
    //save all files from databse to app state to be shared between the components of the app
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createFileAction = (newFile) => async (dispatch) => {
  try {
    const { data } = await API.createFile(newFile);
    // dispatch the action to create the file
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateFileAction = (id, file) => async (dispatch) => {
  try {
    const { data } = await API.updateFile(id, file);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFileAction = (id) => async (dispatch) => {
  try {
    await API.deleteFile(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

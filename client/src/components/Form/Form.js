import React, { useEffect, useState } from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useDispatch, useSelector } from "react-redux";
import { createFileAction, updateFileAction } from "../../actions/files";
import { useNavigate, useOutletContext } from "react-router-dom";
const Form = () => {
  const [formData, setFormData] = useState("");
  const [title, setTitle] = useState("");
  const [emails,setEmails] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [currentId, setCurrentId] = useOutletContext();
  const file = useSelector((state) =>
    currentId ? state.files.find((file) => file._id === currentId) : null
  );

  useEffect(()=>{
    if(file){
      console.log(currentId);
      console.log(file._id,file.content,file.title);
      setFormData(file.content);
      setTitle(file.title);
    }
  },[file]);
  const createDocument = (e) => {
    console.log(title, formData);
    //prevent sending to server
    e.preventDefault();
    if (currentId) {
      //dispatch the action to update the file
      dispatch(updateFileAction(currentId, { title, formData }));
    } else {
      //dispatch the action to create the file
      dispatch(createFileAction({ formData, title }));
    }
    //redirect back to home screen
    setCurrentId(null);
    navigation("/");
  };
  return (
    <Paper
      elevation={3}
      style={{
        width: "90%",
        margin: "3rem auto",
      }}
    >
      <form onSubmit={createDocument}>
        <TextField
          autoFocus
          name="title"
          variant="outlined"
          label="Títol"
          required
          value={title}
          inputProps={{ style: { fontSize: 17 } }}
          onChange={(e) => setTitle(e.target.value)}
          InputLabelProps={{ style: { fontSize: 12 } }}
          style={{
            margin: "2rem",
            width: "40rem",
          }}
        />
        <MarkdownEditor
          visible
          height="50vh"
          value = {formData}
          onChange={(editor, data, value) => setFormData(value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
          <div style = {{
margin: "2rem",
          }}>
            <h3 style = {{color:'rgba(0,0,0,0.6)'}}>Amb qui vols compartir aquest document?</h3>
            <TextField
          autoFocus
          name="emails"
          variant="outlined"
          label="Emails"
          required
          value={emails}
          inputProps={{ style: { fontSize: 17 } }}
          onChange={(e) => setEmails(e.target.value)}
          InputLabelProps={{ style: { fontSize: 12 } }}
          style={{
            margin: "2rem",
            width: "40rem",
          }}
        />
          </div>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="large"
            style={{
              margin: "2rem",
            }}
            onClick={createDocument}
          >
            GUARDAR
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;

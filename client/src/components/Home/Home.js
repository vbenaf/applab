import React, { useEffect } from "react";
import { Container, Section } from "../../global.css";
import { CreateDocumentButton } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getFilesAction,deleteFileAction } from "../../actions/files";
import { Button, Paper } from "@material-ui/core";
import { Link, useOutletContext } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useOutletContext();
  const goToFormScreen = () => {
    navigate("/crear-document");
  };
  useEffect(() => {
    dispatch(getFilesAction());
    setCurrentId(null);
  });
  const handleDelete = (id) =>{
    dispatch(deleteFileAction(id))
  }
  return (
    <Section>
      <Container>
        <CreateDocumentButton onClick={goToFormScreen}>
          <AiOutlinePlus style={{ marginRight: "1rem" }} />
          Crear document
        </CreateDocumentButton>
        <Paper>
          <ul style={{ marginTop: 30 }}>
            {files.map((file, index) => (
              <li
                key={index}
                to="/crear-document"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  borderBottom: "0.1rem solid rgba(0,0,0,0.2)",
                }}
                className="list"x 
              >
                <h3 style={{ textTransform: "uppercase" }}>{file.title}</h3>
                <div>
                  <Link to="crear-document">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={()=> setCurrentId(file._id)}
                    >
                      EDITAR
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: 5 }}
                    onClick = {()=> handleDelete(file._id)}
                  >
                    ELIMINAR
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Paper>
      </Container>
      {files.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <h4
            style={{
              fontSize: "2rem",
              fontWeight: "300",
              opacity: "0.3",
            }}
          >
            No tens cap document guardat. Crea’n un!
          </h4>
        </div>
      )}
    </Section>
  );
};

export default Home;

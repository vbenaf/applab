import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../actions/users";
import {
  Title,
  Wrapper,
  Subtitle,
  InputWrapper,
  Input,
  SignInButton,
  LabelBold,
  FlexInlineContainer,
  StrongSubtitle,
} from "./styles";

const styles = () => {
  //////////////////////////////// VARIABLES //////////////////////////////////
  //does the user want to sign up or to login? keep the decision in a state
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  //////////////////////////////// FUNCTION //////////////////////////////////
  const handleLogin = () => {
    dispatch(loginAction());
  };

  return (
    <Wrapper>
      <Title>{isSignUp ? "Registra't" : "Logina't"}</Title>
      <Subtitle>
        {isSignUp
          ? "Registra't a l'aplicació per poder compartir i crear arxius amb els teus companys"
          : "Benvingut! Introdüeix el teu orcid i clau a sota per registrar-te"}
      </Subtitle>
      {isSignUp && (
        <>
          <InputWrapper>
            <Input placeholder="Introdüeix el teu nom d'usuari" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Introdüeix el teu cognom" />
          </InputWrapper>
        </>
      )}
      <InputWrapper>
        <Input placeholder="Introdüeix el teu ORCID id" />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="Introdüeix la clau del teu usuari ORCID" />
      </InputWrapper>
      {!isSignUp && <StrongSubtitle>He oblidat la meva clau</StrongSubtitle>}
      <SignInButton
        backgroundColor="#4558ff"
        color="#fff"
        style={{ margin: isSignUp && "1rem 0 2rem 0" }}
        onClick={handleLogin}
      >
        {isSignUp ? "Registra't" : "Logina't"}
      </SignInButton>
      {/* <FlexInlineContainer>
        <Subtitle>
          {isSignUp ? "Ja tens un compe?" : "No tens cap compte?"}
        </Subtitle>
        <LabelBold onClick={switchAuthMode}>
          {isSignUp ? "Logina't" : "Registra't"}
        </LabelBold>
      </FlexInlineContainer> */}
    </Wrapper>
  );
};

export default styles;

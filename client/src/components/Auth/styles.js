import styled from "styled-components";
export const Wrapper = styled.div`
  min-width: 29rem;
  max-width: 35rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius:1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom:3rem;
`;
export const Subtitle = styled(Title)`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom:0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 0;
`;
export const InputLabel = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  width: 100%;
  font-size: 1.4rem;
  box-sizing: border-box;
  outline: none;
  ${(props) => `placeholder:"${props.placeholder}"`};
  padding: 1rem 1rem;
`;
export const SignInButton = styled.button`
  border: none;
  outline: none;
  ${(props) => `background-color:${props.backgroundColor};`}
  width:100%;
  padding: 1rem;
  margin: 0 0 2rem 0;
  font-size: 1.9rem;
  ${(props) => `color:${props.color};`}
  cursor:pointer;
  &:hover {
    transform: scale(1.03);
  }
  transition: transform 0.2s;
`;

export const LabelBold = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
`;
export const FlexInlineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const StrongSubtitle = styled(Subtitle)`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: right;
  margin: 2rem 0;
  cursor: pointer;
`;
export const SingleLabelBoldRight = styled(LabelBold)`
  text-align: center;
  margin: 0.8rem 0;
  cursor: pointer;
  width: 100%;
  display: block;
`;

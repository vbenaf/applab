import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: #fff;
  box-shadow:0.5rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);
`;
export const LogoImage = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  max-width: 30rem;
`;
export const LabelUsername = styled.h4`
  font-size: 1.4rem;
  color: #a31c1c;
  font-weight: 300;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 0.6rem;
  background-color: #a31c1c;
  color: #fff;
  margin: 0 0 0 2rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.4rem;
  &:hover {
    transform: scale(1.03);
    background-color:#a31c1c;
    color:#fff;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 3.5rem;
  background: #fff;
  width:15rem;
`;
export const UlList = styled.ul`
border:1px solid rgba(0,0,0,0.4);
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:1.3rem;
  width:100%;
  padding:1rem 0;
  &:hover {
    background-color:#a31c1c;
    color:#fff;
  }
`;

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before{
    margin:0;
    padding:0;
    boz-sizing:border-box;
    font-family: sans-serif;
}
html,body{
    font-size:10px;
    background-color:#f1f1f1;
}
a{
  text-decoration:none;
  color:#000;
}
ul{
  list-style:none;
}
li{
  display:inline;
}
`;

export const Section = styled.section`
  padding: 2rem 0;
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 2.5rem;
`;

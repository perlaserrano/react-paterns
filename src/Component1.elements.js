import styled from "styled-components";


export const Container = styled.div`
width:100%;
height:100vh;
diplay:flex;
flex-direction: column;
align-items:center;
justify-content: center;
`


export const Header = styled.div`
h1{
   font-size :3rem ;
   color:${({color}) => color};
   font-family: sans-serif;
}
p{
    font-size :0.8rem ;
    color:${({color}) => color ? color : '#ff00ff'};
    font-family: monospace;
  
}
`
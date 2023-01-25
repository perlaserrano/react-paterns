
import styled from "styled-components";



export const Button = styled.button`
background:#bd9f9f;
cursor:pointer;
font-zize:1rem;
border: 1px solid, #ccc;
border-radius:5px;
width:25%;
height:50%;
margin:1rem;
padding:1rem;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    background-color: red;
    color: aliceblue;
    transition: all 5s;
}
`;
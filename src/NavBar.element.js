import styled from "styled-components";

export const NavbarContainer = styled.div`
width:100%;
height: 88px;
position: sticky;
top: 0;
z-index: 99;
background-color: #9d1043a3;

`

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1100px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family:sans-serif;
font-size: 1.2rem;
color: #ebc08b;
`

export const menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const MenuItems = styled.li`
display: flex;
height: 100%;
padding: 0.5rem;
font-weight: 700;
justify-content: center;
align-items: center;
font-family:sans-serif;
font-size: 1.2rem;
color: #ebc08b;

&:hover{
    background-color: aliceblue;
    border-bottom: 0.3rem solid #ebc08b;
    transition: 0.4s ease-in;
}

`

export const MenuItemsLink = styled.a`
text-decoration:none;
color: #aaa;
`

export const IconLogoMobile = styled.div`
display:none;

@media screen and (max-width: 960px) {
    display: flex;
    color: #ebc08b;
    font-size: 2rem;
    
}
`
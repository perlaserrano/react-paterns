import React from "react";
import { Header, Container } from "./Component1.elements";
import {Title} from "./Component2.elements"
import { Form } from "./Component3.elements";
import { Button } from "./component4.elements";
import { Wrapper } from "./component5.elements";
import { IconLogo, IconLogoMobile, MenuItems, MenuItemsLink, NavbarContainer, NavbarWrapper } from "./NavBar.element";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";






function App() {
  return(
    <Container>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <AiFillAliwangwang size={"2em"}/>
           Ghost-P(x)
          </IconLogo>
          <IconLogoMobile>
            <FaAlignJustify/>
          </IconLogoMobile>
          <MenuItems>
          <MenuItemsLink>
          Home
          
          </MenuItemsLink>
          </MenuItems>
          <MenuItems>
          <MenuItemsLink>
          About Us
          
          </MenuItemsLink>
          </MenuItems>
          <MenuItems>
          <MenuItemsLink>
          Services
          
          </MenuItemsLink>
          </MenuItems>
          <MenuItems>
          <MenuItemsLink>
          Comunity
          
          </MenuItemsLink>
          </MenuItems>
          <MenuItems>
          <MenuItemsLink>
          Contact
          
          </MenuItemsLink>
          </MenuItems>
        </NavbarWrapper>      
      </NavbarContainer>
        <Wrapper>
      {/* <Header color={"green"} >
        <h1>Formulario</h1>
        <p>Escribe tus datos:</p>
      </Header>
      <Title>Form</Title>
      <Form/>
      <Form/>
      <Form/>
      <Button>Enter</Button> */}
    </Wrapper>
   
     

    </Container>
    
  )  
}

export default App


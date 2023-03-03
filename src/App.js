// import React, { useState, useEffect } from "react";
import { Header, Container } from "./Component1.elements";
import {Title} from "./Component2.elements"
import { Form } from "./Component3.elements";
import { Button } from "./component4.elements";
import { Wrapper } from "./component5.elements";
import { IconLogo, IconLogoMobile, MenuItems, MenuItemsLink, NavbarContainer, NavbarWrapper } from "./NavBar.element";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";
import { UserInfo } from "./UserInfo";
import { ControlledModal } from "./ControlledModal";
import { UnControlledForm } from "./UnControlledForm";
import { ControlledForm } from "./ControlledForm";
// import axios from "axios";
import {RecursiveComponent} from './RecursiveComponent';
import {nestedObject} from './RecursiveComponent'

// const StepOne = ({goToNext}) =>
// <>
// <h1>Step 1</h1>
// <button onClick={() => goToNext({ name:'John Doe'})}>Next</button>
// </>
// const StepTwo = ({goToNext}) =>
// <>
// <h1>Step 2</h1>
// <button onClick={() => goToNext({ age:100})}> Next</button>
// </>
// const StepThree = ({goToNext}) =>
// <>
// <h1>Step 3</h1>
// <p>Congratulations! You quality for our senior discount</p>
// <button onClick={() => goToNext({})}>Next</button>
// </>
// const StepFour = ({goToNext}) =>
// <>
// <h1>Step 4</h1>
// <button onClick={() => goToNext({ hairColor:'brown'})}>Next</button>
// </>



function App() {
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;

  // console.log(post);

  // const [onBoardingData,setOnBoardingData] = useState({})
  // const [currentIndex,setCurrentIndex] = useState(0)

  // const onNext = stepData =>{
  //  setOnBoardingData({...onBoardingData, ...stepData })
  //  setCurrentIndex(currentIndex + 1);
  //   }
 
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

    <RecursiveComponent nestedObject={nestedObject}/>

    {/* <UserInfo/> */}
 {/* <ControlledOnboardingFlow 
 currentIndex={currentIndex}
 onNext={onNext}>
   <StepOne/>
   <StepTwo/>
   {onBoardingData.age >= 62 && <StepThree/>}
   <StepFour/>
 </ControlledOnboardingFlow> */}


{/*    
    <ControlledModal
    shouldShow={shouldShowModal}
    onRequestClose={() => setShouldShowModal(false)}>
      <h1>
        Hello!
      </h1>
    </ControlledModal>
    
    <button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Modal' : 'show Modal'}</button> */}
  {/* <UnControlledForm/>
  <ControlledForm/> */}
  
    </Container>
    
  )  
}



export default App


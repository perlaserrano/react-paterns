import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.5);
width: 100%;

`;

const ModalBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
margin: 10% auto;
padding: 50px;
width: 50%;

`;

const ModalText = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: black;
text-align: center;
`

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false)

    return (
        <> 
        <button onClick={() => setShouldShow(true)}>Show Modal</button>
        {shouldShow && (
            <ModalBackground onClick={() => setShouldShow(false)}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                {children}
                <ModalText>
                    <p>Hello que tengas bonito dia</p>
                </ModalText>
            </ModalBody>
         </ModalBackground>
        )}
     </>
    )

}
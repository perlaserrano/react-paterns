import styled from "styled-components";

export const nestedObject = {
    a:1,
    b: {
      b1:4,
      b2:{
        b23:'Hello',
      },
      b3: {
        b31: {
          message:'Hi',
        },
        b32: {
          message:'Hi',
        }
      }
    },
    c:{
      c1:2,
      c2:3,
    }
  }

  
const RecursiveBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
margin: 10% auto;
padding: 50px;
width: 50%;

`;


 
const isObject = x => typeof x === 'object' && x !== null;
export const RecursiveComponent = ({nestedObject,children}) => {

    if(!isObject(nestedObject)){
        return (
            <li>{nestedObject}</li>
        )
    }

    const pairs = Object.entries(nestedObject)

    return(
        <>
        {pairs.map(([key,value]) =>{
            <li>
                {key}:
                <ul>
                    <RecursiveBody>
                        {children}
                <RecursiveComponent nestedObject={value}/>
                    </RecursiveBody>
                   
                    
                </ul>
            </li>
        })}
        
    </>
    )
} 
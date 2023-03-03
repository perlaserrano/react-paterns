import React,  { useState } from "react"; 


export const UnControlledOnboardingFlow = ({children, onFinish}) =>{
    const [onBoardingData,setOnBoardingData] = useState({})
    const [currentIndex,setCurrentIndex] = useState(0)

   const goToNext = stepData =>{
   const nextIndex = currentIndex + 1;
   const updateData = {
    ...onBoardingData,
    ...stepData,
   }

   console.log(updateData);
   if(nextIndex < children.length) {
    setCurrentIndex(nextIndex);

   }else{
    onFinish(updateData)
   }

   setOnBoardingData(updateData)
   }

    const currentChild = React.Children.toArray(children)[currentIndex]

   if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {goToNext}); 
   }

   return currentChild

}
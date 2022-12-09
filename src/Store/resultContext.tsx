import { resultType } from "../types/quiz.types"
import React from "react";

const resultContext = React.createContext<{
    result : resultType[],
    resetResultData : ()=> void,
    resultHandler : (resultData:resultType)=> void }>
    ({ result : [{question:'', response:'', score: 0}],
       resultHandler : (data)=>{},
       resetResultData:()=>{},
     }); 

export default resultContext;
import resultContext from "./resultContext";
import { resultType } from "../types/quiz.types";
import { useState } from "react";


const ResultContextProvider:React.FC <{ children: React.ReactNode }>=(props) => {

    const [result,setResult] = useState<resultType[]>([]);


    const resultHandler = (resultData:resultType)=>{
       let index = result.findIndex((item)=>(item.question === resultData.question));
       let tempResult:resultType[]=[];
       if(index>=0){
         result[index]=resultData;
         tempResult=result;
       }
       else{
        tempResult = [...result,resultData];
       }
       console.log(tempResult);
        setResult(tempResult);
    }

  const currentValue : {
    result : resultType[],
    resultHandler : (resultData:resultType) => void }
    = {
      result,
      resultHandler }

  return (<resultContext.Provider value={currentValue}>
             {props.children}
      </resultContext.Provider>);

}

export default ResultContextProvider;
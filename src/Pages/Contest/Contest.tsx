import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizModel } from "../../DataModel/quiz";
import { useHistory } from "react-router-dom";
import  './Contest.css';
import { resultType } from "../../types/quiz.types";
import resultContext from "../../Store/resultContext";

function Contest(){

    const {resultHandler} = useContext(resultContext);

    const [activeOption,setActiveOption]= useState("");
    
    let params = useParams<{contestId:string}>();
    let contestId = params.contestId;
    let [quesData] = QuizModel.filter((item)=>(item.quizId === contestId))
                   .map((item)=>(item.questions));


    const [quesNo, setQuesNo] = useState(0);
    let {question,options} = quesData[quesNo];
    const history = useHistory();

    const nextQuesHandler = (e : React.MouseEvent<HTMLButtonElement>) =>{
        console.log(quesNo+1);
        if(quesNo === quesData.length-1){
            history.push(`/result/${contestId}`);
        }
       setQuesNo(quesNo +1);
    }


   const selectAnswerHandler = (e:React.MouseEvent) =>{
      let ansValue= (e.target as HTMLButtonElement).value;
      let options= quesData[quesNo].options;
      let [ans] = options.filter((option)=>(option.value === ansValue));
    //   console.log(ans);      
      setActiveOption(ansValue);
      console.log(activeOption);
      let resultData : resultType  = {
        question,
        response:ans.value,
        score:ans.isRight && quesData[quesNo]?.point || 0
      }
      resultHandler(resultData);
   } 

    
 
    return(
       <div className='contest-page'>
        <div className="question-sec">
            <h2>{question}</h2>
            <ul>
                {options.map((item)=>(
                      <button onClick={selectAnswerHandler}  
                      value={item.value} key={item.value} 
                      id={(activeOption === item.value) ? 'active-ans': ''}>
                     {item.value}</button>
                ))}
            </ul>
        
        <div className="question-navigation">
            <button>Quit </button>
            <button onClick={nextQuesHandler}>Next </button>
        </div>
        </div>
       </div>
    )
}

export default Contest;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { QuizModel } from "../../DataModel/quiz";
import './Contest.css'

function Contest(){
    
    let params = useParams<{contestId:string}>();
    let contestId = params.contestId;
    let [quesData] = QuizModel.filter((item)=>(item.quizId === contestId))
                   .map((item)=>(item.questions));
    console.log(quesData);

    const [quesNo, setQuesNo] = useState(0);
    let {question,options} = quesData[quesNo];

    const nextQuesHandler = (e : React.MouseEvent<HTMLButtonElement>) =>{
        let currQuesNo = (e.target as HTMLButtonElement).value;
        if(currQuesNo === String(question.length)){
            return;
        }
       setQuesNo(quesNo +1);
    }
 
    return(
       <div className='contest-page'>
        <div className="question-sec">
            <h2>{question}</h2>
            <ul>
                {options.map((item)=>(
                      <li>{item.value}</li>
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
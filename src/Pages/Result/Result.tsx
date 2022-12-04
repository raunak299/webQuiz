import styles from './Result.module.css'
import  React, { useContext, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { QuizModel } from '../../DataModel/quiz.model';
import resultContext from '../../Store/resultContext';
import { Link } from 'react-router-dom';
import { resultType } from '../../types/quiz.types';


function Result(){

    const {result} = useContext(resultContext);
    let length=result.length;
    let history=useHistory();
    // console.log(result);

      if(length===0){
        console.log('&');
        history.replace('/home');
     }
   
    
    
    let params = useParams<{contestId:string}>();
    let contestId = params.contestId;
    let [quesData] = QuizModel.filter((item)=>(item.quizId === contestId))
                   .map((item)=>(item.questions));

    let totalScore=0;
    result.forEach((item)=>{
      totalScore+=item.score;
      console.log(totalScore);
    });



    return(
         <div className={styles['result-page']}>
         
             <h2>Result</h2>
             <h3>{`Total Score: ${totalScore}`}</h3>

             <div className={styles["question-sec"]}>
             
           {length && quesData.map((item)=>{
                let [{response,score}] =  result.filter((resultItem)=>(item.question === resultItem.question )) || [{response:'',score:''}];   
                let quesAnswered = response.length > 0;
                let quesAnsweredWrong= score === 0 && quesAnswered;
                let quesAnsweredCorrect= score> 0 && quesAnswered;

       return (<div className={styles["question"]} key={item.question}>
                 <h2 >  
                    {!quesAnswered && <span className={styles['not-answer-icon']}>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                     </span>}
                     {quesAnsweredCorrect && <span className={styles['right-icon']}>
                      <i className="fa-solid fa-circle-check"></i>
                     </span>}
                   {quesAnsweredWrong &&  <span className={styles['wrong-icon']}>
                     <i className="fa-solid fa-circle-xmark"></i>
                    </span>}
                 {item.question}</h2>
                   <ul>{
                      item.options.map((option)=>{
                        let ansState=option.isRight ? 'right-ans' : 'options' ; 
                
                        if(quesAnsweredWrong){
                          ansState = option.value === response ? 'wrong-ans' : ansState;   
                        }  
                    return <button value={option.value} key={option.value} className={styles[`${ansState}`]}>{option.value}</button>
                    })}
                   </ul>
            </div>)
            })}
            
             </div>
       
            <Link to='/home'>
             <button className={styles['navigate']}>Home </button>
            </Link>
           
        </div>
    );
}

export default Result;
import styles from './Result.module.css'
import  React, { useContext } from 'react';
import { useParams} from 'react-router-dom';
import { QuizModel } from '../../DataModel/quiz.model';
import resultContext from '../../Store/resultContext';
import { Link } from 'react-router-dom';
import { resultType } from '../../types/quiz.types';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

function Result(){

    const {result} = useContext(resultContext);
    
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
             
           { quesData.map((item)=>(
            <div className={styles["question"]}>
                   <h2>{item.question}</h2>
                   <ul>{
                      item.options.map((option)=>{
                        let rightAns = option.isRight ? 'right-ans' : 'options' ;
                    return <button value={option.value} key={option.value} className={styles[`${rightAns}`]}>{option.value}</button>
                    })}
                   </ul>
            </div>
            ))}
            
             </div>
       
            <Link to='/home'>
             <button className={styles['navigate']}>Home </button>
            </Link>
           
        </div>
    );
}

export default Result;
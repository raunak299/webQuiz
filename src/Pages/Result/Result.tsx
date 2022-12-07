import styles from './Result.module.css'
import  React, { useContext, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { QuizModel } from '../../DataModel/quiz.model';
import resultContext from '../../Store/resultContext';
import { Link } from 'react-router-dom';
import { userCollectionRef } from '../../firebase';
import { db } from '../../firebase';
import {addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'
import { AuthContext } from '../../Store/AuthContext';
import userEvent from '@testing-library/user-event';


function Result(){

    const {result} = useContext(resultContext);
    const {userId}= useContext(AuthContext);
    let length=result.length;
    let history=useHistory();

     const userCollectionRef =collection(db,'score');
    // console.log(result);

      if(length===0){
        console.log('&');
        history.replace('/home');
     }
   
    
    
    let params = useParams<{contestId:string}>();
    let contestId = params.contestId;
    let contestName='';
    let [quesData] = QuizModel.filter((item)=>(item.quizId === contestId))
                   .map((item)=>{
                    contestName=item.quizName;
                    return (item.questions)});
    let totalScore:number=0;
     result.forEach((item)=>{
             totalScore+=item.score;
            // console.log(totalScore);
       });

  

      useEffect(()=>{ 

         try{ 
          const addResult=async()=>{
            const document= await getDoc(doc(userCollectionRef, userId));
           let currData =document.data()?.data;
           console.log(currData);
           let newData= currData ? [...currData,{totalScore,contestName}] : [{totalScore,contestName}];
            let ref =await updateDoc(doc(userCollectionRef, userId),  {data: newData}); }
            addResult();
          }
          
          catch(error){
              console.log(error);
            }
       
      },[totalScore,userId,userCollectionRef])
  



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
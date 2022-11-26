import './Form.css'
import { QuizModel } from '../../DataModel/quiz';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Form(){

      let [level,setLevel] = useState('easy');
      let [categoryList,setCategoryList] = useState<string[]> ([]);
      let [category,setCategory] = useState(categoryList[0]);
      let [contestId,setContestId] = useState('');


        useEffect(()=>{
            let currCategoryList= QuizModel.filter((item)=>(
                item.quizCategory === level))
                .map((item)=>(item.quizName));
        setCategoryList(currCategoryList);
        setCategory(currCategoryList[0]);
        },[level])

        useEffect(()=>{
            let [tempId]=  QuizModel.filter((item)=>(item.quizName===category && item.quizCategory===level))
            .map((item)=>(item.quizId));
            setContestId(tempId);
        },[category,level])

    

     const selectLevelHandler = (e: React.MouseEvent<HTMLSelectElement> ) =>{
         let currLevel = (e.target as HTMLSelectElement).value
         setLevel(currLevel);  
     }

     const categorySelectorHandler = (e: React.MouseEvent<HTMLSelectElement>) =>{
        let currCategory = (e.target as HTMLSelectElement).value;
        setCategory(currCategory);   
     }


    return(
        <div className='form-sec'>
            <div className='form-content'>

            <h1>Setup Quiz</h1>

           <div>
            <label >Select Difficulty</label>
             <select className="level" defaultValue="" onClick={selectLevelHandler}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
             </select>
            </div>

            <div>
             <label >Select Category</label>
             <select className="category" onClick={categorySelectorHandler}>
                {categoryList.map((item) => (
                    <option value={item} key={item} >{item}</option>
                ))}
             </select>
             </div>
             <Link to={`contest/${contestId}`}>
                <button>Start</button>
             </Link>
          
             </div>
        </div>
    );
}

export default Form;
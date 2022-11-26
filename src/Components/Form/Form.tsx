import './Form.css'
import { QuizModel } from '../../DataModel/quiz';
import React, { useEffect, useState } from 'react';

function Form(){

      let [level,setLevel] = useState('easy');
      let [categoryList,setCategoryList] = useState<string[]> ([]);


        useEffect(()=>{
            let currCategoryList= QuizModel.filter((item)=>(
                item.quizCategory === level))
                .map((item)=>(item.quizName));
        setCategoryList(currCategoryList);
        },[level])

    

     const selectLevelHandler = (e: React.MouseEvent<HTMLSelectElement> ) =>{
         let currLevel = (e.target as HTMLSelectElement).value
         setLevel(currLevel);  
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
             <select className="category" >
                {categoryList.map((item) => (
                    <option value={item} key={item} >{item}</option>
                ))}
             </select>
             </div>

             <button>Start</button>
             </div>
        </div>
    );
}

export default Form;
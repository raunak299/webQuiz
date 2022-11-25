import './Form.css'

function Form(){
    return(
        <div className='form-sec'>
            <div className='form-content'>

            <h1>Setup Quiz</h1>

           <div>
            <label >Select Difficulty</label>
             <select className="level">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                 <option value="difficult">Difficult</option>
             </select>
            </div>

            <div>
             <label >Select Category</label>
             <select className="category">
                <option value="easy">html</option>
                <option value="medium">css</option>
                 <option value="difficult">react</option>
             </select>
             </div>

             <button>Start</button>
             </div>
        </div>
    );
}

export default Form;

import Form from '../../Components/Form/Form';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css'

function Home(){
    return(
      <div className='home-page'>
         <Navbar/>
         <div className='form'>
         <Form />
         </div>
      </div>
    )
}

export default Home;
import { collection, doc, getDoc } from 'firebase/firestore';
import Navbar from '../../Components/Navbar/Navbar';
import { db } from '../../firebase';
import styles from './Dashboard.module.css'
import {useEffect,useContext,useState} from 'react';
import React from "react";
import { AuthContext } from '../../Store/AuthContext';




function Dashboard(){


    const {userId}= useContext(AuthContext);
    const [loading,setLoading]= useState(false);

    let [dashboardData,setDashboardData] = useState<{totalScore:number, contestName:string}[]>([]);
    //  : {totalScore:number, contestName:string}[] = [];
      useEffect(()=>{ 
       
        const getResult=async()=>{
            const document= await getDoc(doc( collection(db,'score'), userId));
            // console.log(document.data()?.data);
         setDashboardData(document.data()?.data);}
        // console.log(dashboardData)}

        try{ 
            setLoading(true);
            getResult();  }
        catch(error){
                console.log(error); }
        setLoading(false);
      },[userId])

    return(
        <div className={styles['dashboard-page']}>
            <Navbar />
           {loading && <h1>Loading !!</h1> }
          {!loading && <div className={styles['dashboard-sec']}>
             {!dashboardData && <h2>Attempt a test to get scores !!</h2>}
             {dashboardData && <h1>Top 10 Scores</h1>}
             {dashboardData && dashboardData.map((item,index)=>(
                       <div className={styles['scores-sec']} key={index}>
                       <React.Fragment>
                       <div>{item.contestName}</div>
                       <div>{item.totalScore}</div>
                       </React.Fragment>
                       </div>
             ))}    
           </div>}
        </div>
    );
}

export default Dashboard;
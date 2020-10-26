import React, { useEffect, useState } from 'react';
import EachUser from '../EachUser/EachUser';
import './User.css'

import company from '.././data/data.json'
import Cart from '../Cart/Cart';


const User = () => {

    

    const [employ,setEmploy]=useState([]);
    const[add,setAdd]=useState([]);


    useEffect(()=>setEmploy(company),[])

    var totalSalary=0;

  const eventHandler=(user)=>{
    const newAdd=[...add,user];
    setAdd(newAdd);
    console.log(add)
    for (let i = 0; i < add.length; i++) {
        const salary = add[i].salary;
        totalSalary=totalSalary+salary;

       
    }
    
  }

    return (
        <div className="user-list">
            <div className="user">

            {
                     
                     employ.map(cm=><EachUser com={cm} key={cm.index} eventHandler={eventHandler}></EachUser>)
                 }
            </div>
            <div className="cart">
                
    <Cart cart={add}></Cart>
           
            </div>
        </div>
    );
};

export default User;
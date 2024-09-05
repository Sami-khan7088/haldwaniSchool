import React from 'react'
import { NavLink } from 'react-router-dom'
const Message = () => {
  return (
    <div className='MAincontainer4'>
    <div className='UserDives'>
        <div className='user'>
            <div className='userDetails'>
             <img src='http://sgtbpsbarapura.com/img/photo-1.jpg ' className='userImage'></img>
             <h1>Mr. Jaswinder Singh Grewal</h1>  
             <p>Manager</p> 
             </div>  
             <div className='userMessage'>
                <h1>Manager Message</h1>
                <p>With immense pride and great pleasure,
                 I welcome you to the school’s Website.
                  You could be a parent, a student, a staff member or anyone. 
                  Our institution has marched forward to spread the light of education and pave the path of academic excellence for every student
                .‘Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations’.
                 The parents are the most strengthening power in moulding the future of Children. 
                 I pay my sincere gratitude to the parents for their faith in us. My heartfelt thanks to the school’s Principal.
                 </p>
                </div>     
        </div>
        <div className='user'>
        <div className='userDetails'>
             <img src='http://sgtbpsbarapura.com/img/photo-2.jpg' className='userImage'></img>
             <h1>Mr.Navneet Kumar</h1>  
             <p>Principal</p>  
        </div>
        <div className='userMessage'>
                <h1>Principal Message</h1>
                <p>With immense pride and great pleasure,
                 I welcome you to the school’s Website.
                  You could be a parent, a student, a staff member or anyone. 
                  Our institution has marched forward to spread the light of education and pave the path of academic excellence for every student
                .‘Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations’.
                 The parents are the most strengthening power in moulding the future of Children. 
                 I pay my sincere gratitude to the parents for their faith in us. My heartfelt thanks to the school’s Principal.
                 </p>
                 </div>  
        </div>
    </div>      
</div>
  )
}

export default Message
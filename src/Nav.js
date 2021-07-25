import React, {useEffect,useState} from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleshow] = useState(false);

     useEffect(() => {
         window.addEventListener("scroll",()=>{
         if(window.scrollY>100){
             handleshow(true);
         }else handleshow(false);
         });
         return () => {
            window.removeEventListener("scroll"); 
         }
     }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" className="nav_logo" />
            <img src="" alt="Netflix Avatar" className="nav_avatar"/>
        </div>
    )
}

export default Nav;

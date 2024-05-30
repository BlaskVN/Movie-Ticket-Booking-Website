import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
    const loginForm=()=>{
    return (
        <div className="wrapper">
            <h1>Sign In</h1>
            <form action=""> 
                <div className="input-field">  
                    <input type="text" placeholder="Username" required/>
                <FaUser />
                <div/>
                <div className="input-field">  // Add a closing tag here

                    <input type="password" name="password" />
            
                <FaLock />
                <br />
                <button type="submit">Sign In</button>
                
            </form>
        </div>
        
    );
}
export default SignIn;
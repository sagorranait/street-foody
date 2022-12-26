import { Link } from "react-router-dom"
import Forms from "../Components/Forms"

function Register() {
   const registerHandler = () => {

   }

  return (
   <div id="main">
      <div className="main-content">
         <Forms 
            title="Create an Account" 
            description="Even though registration just takes a few seconds, it provides you complete control over your purchase."
            toastMessage="Sign-Up Successfully."
         >
            <form className='user-form' onSubmit={registerHandler}>
            <input type="text" name="name" id="nameInput" placeholder='Username' required />
            <input type="email" name="email" id="emailInput" placeholder='Email' required />
            <input type="password" name="password" id="passwordInput" placeholder='Password' required />
            <input type="password" name="confrimPassword" id="passwordInput" placeholder='Confrim Passowrd' required />
            <button type="submit" className='streetFood-btn'>Register</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
         </Forms>
      </div>
   </div>
  )
}

export default Register
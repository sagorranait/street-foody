import { Link } from "react-router-dom"
import Forms from "../Components/Forms"

function Login() {
   const loginHandler = (event) => {
      event.preventDefault();
   }

  return (
   <div id="main">
      <div className="main-content">
            <Forms 
               title="Hey, Welcome Back !!!" 
               description="Use the email and password you chose when registering to your account."
               toastMessage="Sign-In Successfully."
            >
               <form className='user-form' onSubmit={loginHandler}>
               <input type="email" name="email" id="emailInput" placeholder='Email' required />
               <input type="password" name="password" id="passwordInput" placeholder='Password' required />
               <button type="submit" className='streetFood-btn'>Login</button>
               <p>Don’t have an account? <Link to='/register'>Create an account</Link></p>
               </form>
            </Forms>
      </div>
   </div>
  )
}

export default Login
import "../../Styles/Signin.css";
import React from 'react';


const SignIn = () => {
  return (
<div className="container-auth">
<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					{/* <input type="text" name="txt" placeholder="User name" required=""/> */}
					<input type="text" name="email" placeholder="Email" />
					<input type="password" name="password" placeholder="Password" />
					<input type="password" name="confirmpassword" placeholder="Confirm Password" />
          <p className="text-danger">Password reset</p>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="text" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>


</div>
    
  );
};

export default SignIn;
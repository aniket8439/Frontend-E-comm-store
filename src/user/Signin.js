import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
    const signInForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        
                        <div className="mb-3" margin-top="10px">
                            <label  className="text-light">Email</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="mb-3">
                            <label  className="text-light">password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div class="d-grid gap-2">
                           <button class="btn btn-primary" type="button">Sign In</button>
  
                        </div>
  
                    </form>
                </div>
            </div>
        )
}
    return ( 
        <Base title="Sign in page" description="A page for user to sign in!">
            {signInForm()}
        </Base>
    );
};

export default Signin;
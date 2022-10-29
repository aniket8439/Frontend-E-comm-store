import React, {useState} from 'react';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import {  updateCategory } from './helper/adminapicall';

const UpdateCategory = () => {


    const [name, setName] = useState({name: ""})
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user, token} = isAuthenticated();

    const goBack = () => (
        <div className="mt-5">
            <Link className='btn btn-sm btn-danger mb-3' to="/admin/dashboard">Admin Home</Link>
        </div>
    );

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        
        setSuccess(false)

        //backend request fired
        updateCategory(user._id, token, {name})
        .then(data => {
            if(data.error){
                setError(true)
            }else{
                setError("")
                setName("")
                setSuccess(true)
                
            }
        });
    };

    const successMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                     <div className="alert alert-success"
                        style={{display: success ? "" : "none"}} >
                          Category Updated successfully...
                    </div>
                </div>
            </div>
            );
    }

    const warningMessage = () => {
        return(
            <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <div className="alert alert-danger"
                          style={{display: error ? "" :"none"}} >
                            Failed to Create this Category or category name not available...
                          {error}
                        </div>
                    </div>
            </div>
        );
        
    }

    const myCategoryForm = () => (
        <form>
            <div className="form-group p-3">
                <p className="lead">Enter the Category</p>
                <input type="text" 
                className='form-control my-3'
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder='For Ex. Summer' />
                <button onClick={onSubmit} className="btn btn-outline-success">Update Category</button>
            </div>
        </form>
    );

  return (
    <Base title='Create a Category here' description='Add a new category for new t-shirts'
    className='container bg-info p-4'>

        <div className="row bg-white rounded">
            <div className="col md-8 offset-md-2">
                {successMessage()}
                {warningMessage()}
                {myCategoryForm()} 
                {goBack()}
            </div>
        </div>
    </Base>
  );
};

export default UpdateCategory;
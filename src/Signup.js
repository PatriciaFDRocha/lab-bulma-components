import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';


const Signup = () => {
    return (
        <div>
            <Navbar />
            <form>
                <FormField  label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField  label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField  label="Password" type="password" placeholder="e.g. password1234"  />
        
                <CoolButton isSmall isDanger isRounded customClass="my-class" type="submit" >Submit</CoolButton>
            </form>
        </div>
    )
  };


export default Signup;
'use client';

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";


export default function Form() {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(Number);
    const [licenseplate, setLicenseplate] = useState(Number);
    const [email, setEmail] = useState('');


    return(
        <form>
            <fieldset>
                <legend>
                    Personal Information
                </legend>
                <Input 
                type ="text"
                name= "username"
                label="username"
                inputLabel="Full Name"
                value={fullname}
                onChange={setFullname}/>
                <Input 
                type ="text"
                name= "username"
                label="username"
                inputLabel="Password"
                value={password}
                onChange={setPassword}/>


            </fieldset>
            <button>Submit</button>
        </form>
    )
}
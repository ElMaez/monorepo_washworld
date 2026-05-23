'use client';

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";
import axios from "axios";
// custom hook
import { useSignup } from "../hooks/useSignup";

export default function Form() {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [licenseplate, setLicenseplate] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false)
    const [adress, setAdress] = useState('')

    const signupMutation = useSignup();

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        //smid custom hook ind i submit funktionen
        signupMutation.mutate({
        user_fullname:fullname,
        user_phonenumber:phoneNumber,
        user_email:email,
        user_address: adress,
        user_password:password,
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    Personal Information
                </legend>
                <Input 
                type ="text"
                name= "user_fullname"
                label="user_fullname"
                inputLabel="Full Name"
                value={fullname}
                onChange={setFullname}/>
                <Input 
                type ="text"
                name= "user_adress"
                label="user_adress"
                inputLabel="Adress"
                value={adress}
                onChange={setAdress}/>
                
                <Input 
                type ="tel"
                name= "user_phonenumber"
                label="user_phonenumber"
                inputLabel="Phonenumber"
                value={phoneNumber}
                onChange={setPhoneNumber}/>


                <Input 
                type ="text"
                name= "email"
                label="email"
                inputLabel="Email"
                value={email}
                onChange={setEmail}/>
                <Input 
                type ="password"
                name= "user_password"
                label="user_password"
                inputLabel="Password"
                value={password}
                onChange={setPassword}/>
            </fieldset>
                <Input 
                type="checkbox"
                name="acceptPolicy"
                label="acceptPolicy"
                inputLabel="Accept Policy"
                checked={consent}
                onChange={setConsent}
                />

            {signupMutation. isError && (
                <p style={{color: "red"}}>nopes</p>
            )}
            {signupMutation. isSuccess && (
                <p style={{color: "green"}}>yeps</p>
            )}
            <Button 
            buttonName={signupMutation.isPending ? "Sender data..." : "Opret Bruger"}
            size="lg"
            />
        </form>
    )
}
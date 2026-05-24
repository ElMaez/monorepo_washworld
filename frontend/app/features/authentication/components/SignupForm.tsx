'use client';

import Button from "@/app/global/components/Button";
import Input from "@/app/global/components/Input";
import { useState } from "react";
// custom hook
import { useSignup } from "../hooks/useSignup";

type Props = { onToggleLogin: () => void };

export default function SignupForm({ onToggleLogin}: Props) {
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
                {/* Fulde Navn */}
                <Input 
                type ="text"
                name= "user_fullname"
                label="user_fullname"
                inputLabel="Full Name"
                value={fullname}
                onChange={setFullname}/>
                {/* Adresse */}
                <Input 
                type ="text"
                name= "user_adress"
                label="user_adress"
                inputLabel="Adress"
                value={adress}
                onChange={setAdress}/>
                {/* Mobilnummer */}
                <Input 
                type ="tel"
                name= "user_phonenumber"
                label="user_phonenumber"
                inputLabel="Phonenumber"
                value={phoneNumber}
                onChange={setPhoneNumber}/>

                {/* Email */}
                <Input 
                type ="text"
                name= "email"
                label="email"
                inputLabel="Email"
                value={email}
                onChange={setEmail}/>

                {/* Adgangskode */}
                <Input 
                type ="password"
                name= "user_password"
                label="user_password"
                inputLabel="Password"
                value={password}
                onChange={setPassword}/>
            </fieldset>
            {/* Acceptere Vilkår */}
                <Input 
                type="checkbox"
                name="acceptPolicy"
                label="acceptPolicy"
                inputLabel="Accept Policy"
                checked={consent}
                onChange={setConsent}
                />
            {/* Response fra submit*/}
            {signupMutation. isError && (
                <p style={{color: "red"}}>nopes</p>
            )}
            {signupMutation. isSuccess && (
                <p style={{color: "green"}}>yeps</p>
            )}
            <Button 
            typeAction="submit"
            elementType="button"
            buttonName={signupMutation.isPending ? "Sender data..." : "Opret Bruger"}
            size="lg"
            type="primary"
            status="normal"
            />
            {/* Knap til at toggle mellem login og signup*/}
            <Button 
            typeAction="button"
            type={"tertiary"}
            buttonName="Login"
            size="lg"
            onClick={onToggleLogin}
            />
        </form>
    )
}
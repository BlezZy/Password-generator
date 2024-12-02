"use client";

import {Button} from "@/app/components/Button";
import {useState} from "react";

export function Password({password}) {
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert("Skopiowano do schowka")
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <>
            <h1 className="font-bold text-xl mt-4">Twoje hasło:</h1>
            {showPassword ? <p>{password}</p> : <p>{'*'.repeat(password.length)}</p>}


            <div>
                <Button onClick={handleShowPassword} name={showPassword ? "Ukryj" : "Pokaż"} className="mr-2 bg-blue w-[25%] hover:bg-blueHover"/>
                <Button onClick={copyToClipboard} name="Kopiuj" className="ml-2 bg-blue w-[25%] hover:bg-blueHover"/>
            </div>
        </>
    )
}
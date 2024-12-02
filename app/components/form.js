"use client";

import {Button} from "@/app/components/Button";
import {Password} from "@/app/components/Password";
import {useState} from "react";

export function Form() {
    const [isPasswordSectionShown, setIsPasswordSectionShown] = useState(false);
    const [inputPassword, setInputPassword] = useState(12);
    const [checkboxSpecialCharacters, setCheckboxSpecialCharacters] = useState(false);
    const [checkboxNumbers, setCheckboxNumbers] = useState(false);
    const [checkboxCapitalLetters, setCheckboxCapitalLetters] = useState(false);
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setIsPasswordSectionShown(true);
        const newPassword = getRandomPassword()
        setPassword(newPassword)
    }

    function getRandomPassword() {
        const smallLetters = "abcdefghijklmnopqrstuvwxyz";
        const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialCharacters = "!@#$%^&*()_+{}[]|:;<>,.?/";

        let characterPool = smallLetters;
        if (checkboxCapitalLetters) characterPool += capitalLetters;
        if (checkboxNumbers) characterPool += numbers;
        if (checkboxSpecialCharacters) characterPool += specialCharacters;

        let result = "";
        for (let i = 0; i < inputPassword; i++) {
            result += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
        }

        return result;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="mr-2" htmlFor="number">Długość hasła:</label>
                    <input
                        className="border-[1px] border-gray-200 aspect-video w-16 rounded"
                        type="number" id="number"
                        required
                        value={inputPassword}
                        onChange={(e) => setInputPassword(Number(e.target.value))}
                        min="3"
                    />
                </div>
                <div>
                    <div className="my-2">
                        <input
                            className="mr-2"
                            type="checkbox"
                            id="special-characters"
                            checked={checkboxSpecialCharacters}
                            onChange={() => setCheckboxSpecialCharacters(!checkboxSpecialCharacters)}
                        />
                        <label htmlFor="special-characters">Znaki specjalne</label>
                    </div>
                    <div className="my-2">
                        <input
                            className="mr-2"
                            type="checkbox"
                            id="numbers"
                            checked={checkboxNumbers}
                            onChange={() => setCheckboxNumbers(!checkboxNumbers)}
                        />
                        <label htmlFor="numbers">Numery</label>
                    </div>
                    <div className="my-2">
                        <input
                            className="mr-2"
                            type="checkbox"
                            id="capital-letters"
                            checked={checkboxCapitalLetters}
                            onChange={() => setCheckboxCapitalLetters(!checkboxCapitalLetters)}
                        />
                        <label htmlFor="capital-letters">Wielkie litery</label>
                    </div>
                </div>
                <Button name="Generuj hasło" className="bg-green w-[43%] hover:bg-greenHover"/>
            </form>
            {isPasswordSectionShown && <Password password={password}/>}
        </>
    );
}

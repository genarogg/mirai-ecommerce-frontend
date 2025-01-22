import React, { useRef, useState } from 'react'
import { Input, CheckBoxBasic } from "@nano";

import BtnSubmitBasic from './btnSubmitBasic';
import BtnText from '@components/btns/basic/btnText';
import { $ } from "@fn/index";

import { BsFillEnvelopeHeartFill } from 'react-icons/bs';
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";
import RedesLogin from './global/RedesLogin';


interface LoginProps {
    cardState: (css: string) => void;
    register: boolean;
    reset: boolean;
    social?: boolean;
}

const Login: React.FC<LoginProps> = ({ cardState, register, reset, social = false }) => {

    const inputRef = useRef({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const [isChecked, setIsChecked] = useState(false);

    const toogleChecked = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(inputRef.current);
    };

    const active = () => {
        $("btnBack")?.classList.add("active");

        const register = $("register");

        if (register) {
            register.style.display = "none";
        }

        const reset = $("reset");

        if (reset) {
            reset.style.display = "flex";
        }
    };



    return (
        <>
            <div className={`login front ${social ? "social" : ""}`} id="login">
                <HeadBtn cardState={cardState} register={register} />
                <form onSubmit={handleSubmit} >
                    <Input
                        type="email"
                        name="email"
                        id="emailLogin"
                        placeholder="Email"
                        icon={<BsFillEnvelopeHeartFill />}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        name="passwordLogin"
                        placeholder={"Contraseña"}
                        icon={<MdLock />}
                        onChange={handleChange}
                    />

                    <CheckBoxBasic
                        text="Mantener sesión"
                        onClick={toogleChecked}
                    />

                    {social && <RedesLogin />}

                    <BtnSubmitBasic
                        formData={{
                            data: inputRef,
                            check: isChecked
                        }}
                        endpoint="/login"
                        push="/"
                    >
                        Iniciar sesión
                    </BtnSubmitBasic>

                    {reset && (
                        <BtnText onClick={() => {
                            active();
                            cardState("left-active");
                        }} >
                            ¿Olvidaste tu contraseña?
                        </BtnText>
                    )}

                </form>
            </div >
        </>
    );
}

export default Login;
import React, { useRef } from 'react'
import { Input } from "@nano";
import BtnSubmitBasic from './btnSubmitBasic';
import { BsFillEnvelopeHeartFill, BsPersonFill } from 'react-icons/bs';
import { MdLock } from 'react-icons/md';
import { IoMdUnlock } from "react-icons/io";

import HeadBtn from "./global/HeadBtn";
import RedesLogin from './global/RedesLogin';

interface RegisterProps {
    cardState: (css: string) => void;
    social?: boolean;
}

const Register: React.FC<RegisterProps> = ({ cardState, social = false }) => {
    const inputRef = useRef({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    return (

        <div className={`register right ${social ? "social" : ""}`} id="register">
            <HeadBtn cardState={cardState} register={true} />
            <form onSubmit={(e) => { e.preventDefault() }}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    icon={<BsPersonFill />}
                    onChange={handleChange}
                />

                <Input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    icon={<BsPersonFill />}
                    onChange={handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    id='emailRegister'
                    placeholder="Email"
                    icon={<BsFillEnvelopeHeartFill />}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    icon={<IoMdUnlock />}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    icon={<MdLock />}
                    onChange={handleChange}
                />

                {social && <RedesLogin />}

                <BtnSubmitBasic
                    formData={inputRef}
                    endpoint="register"
                    push="/usuario/datos/img-perfil"
                >
                    Registrarse
                </BtnSubmitBasic>

                <div className="text-recovery">
                    <span>
                        Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.
                    </span>
                </div>
            </form>
        </div >
    );
}

export default Register;
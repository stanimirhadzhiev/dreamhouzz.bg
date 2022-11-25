import { useNavigate } from 'react-router-dom';

import style from './Register.module.css'

import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";


const Register = ({auth}) => {
    const navigate = useNavigate();
    

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        
        // const tac = formData.get('tac');
        // console.log(tac);

        

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                // console.log(authData);
                navigate('/edit-profile');
            });
    }

    return (
        <div id="id02" className={style.modal}>
            <form
                className={`${style.modalContent} ${style.animate}`}
                onSubmit={onSubmit}
            >
                <div className={style.container} style={{ backgroundColor: "#f1f1f1", borderRadius: "10px 10px 0px 0px" }}>
                    <h1>Регистрация за фирми</h1>
                </div>
                <div className={style.container}>
                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        name="email" 
                        id="email"  
                    />

                    <label htmlFor="password">
                        <b>Парола</b>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Парола" 
                        name="password" 
                        id="password" 
                    />

                    <label htmlFor="confirmPassword">
                        <b>Повторете Паролата</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Повторете Паролата"
                        name="confirmPassword"
                        id="confirmPassword"
                    />

                    <label>
                        <input 
                            type="checkbox" 
                            name="tac" 
                        />
                        <span>
                        Декларирам, че съм запознат и приемам Правилата за поверителност,
                        Общите условия и Защитата на личните данни на DreamHouZz.bg
                        </span>
                    </label>
                    <button type="submit">Регистрация</button>
                </div>
                <div className={style.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className={`${style.cancelbtn} ${style.button}`}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
};
const RegisterWithAuth = withAuth(Register);
export default RegisterWithAuth;
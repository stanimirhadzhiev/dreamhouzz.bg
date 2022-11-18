import { useContext } from "react";
import {useNavigate, Link} from "react-router-dom";


import styles from './Login.module.css';

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const {userLogin} = useContext(AuthContext);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const{
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            })
        
    };
    return (

        <div id="id01" className={styles.modal} >
            <form
                className={`${styles.modalContent} ${styles.animate}`}
                onSubmit={onSubmit}
            >
                <div className={styles.imgcontainer}>
                    <span
                        onClick={() => navigate('/')}
                        className={styles.close}
                        title="Close Modal"
                    >
                        ×
                    </span>
                    <img
                        src="images/icons/110-1100707_person-avatar-placeholder.png"
                        alt="Avatar"
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.container}>
                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input type="text" placeholder="E-mail" name="email" r />
                    <label htmlFor="password">
                        <b>Парола</b>
                    </label>
                    <input type="password" placeholder="Парола" name="password"  />
                    <button type="submit">Влез</button>
                    {/* <label htmlFor="remember">
                        <input type="checkbox" defaultChecked="checked" name="remember" />
                        Запомни ме
                    </label> */}
                    </div>
                    <div className={styles.container} style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="cancelbtn"
                    >
                        Cancel
                    </button>
                    <span className={styles.psw}>
                        Забравена<Link to="#">парола?</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
import { useContext } from "react"
import {useNavigate} from "react-router-dom"

import * as authService from "../../services/authService"
import { AuthContext } from "../../contexts/AuthContext"

const Login = () => {
    const navigate = useNavigate();
    const {userLogin} = useContext(AuthContext);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const{
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        console.log(email);
        console.log(password);
        // authService.login(email, password)
        //     .then(authData =>{
        //         userLogin(authData);
        //         navigate('/');
        //     })
        //     .catch(() => {
        //         navigate('/404');
        //     })
        
    };
    
    return (

        <div id="id01" className="modal" >
            <form
                className="modal-content animate"
                onSubmit={onSubmit}
            >
                <div className="imgcontainer">
                    <span
                        onClick={() => navigate('/')}
                        className="close"
                        title="Close Modal"
                    >
                        ×
                    </span>
                    <img
                        src="images/icons/110-1100707_person-avatar-placeholder.png"
                        alt="Avatar"
                        className="avatar"
                    />
                </div>
                <div className="container">
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
                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="cancelbtn"
                    >
                        Cancel
                    </button>
                    <span className="psw">
                        Забравена<a href="#">парола?</a>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
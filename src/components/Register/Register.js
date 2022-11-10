import { useState } from 'react';


const Register = ({closeRegisterModal}) => {


    return (
        <div id="id02" className="modal">
            <form
                className="modal-content animate"
            >
                <div className="container" style={{ backgroundColor: "#f1f1f1", borderRadius: "10px 10px 0px 0px" }}>
                    <h1>Регистрация за фирми</h1>
                </div>
                <div className="container">
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

                    <label htmlFor="companyName">
                        <b>Име на фирмата</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Име на фирмата"
                        name="companyName"
                        id="companyName"
                    />

                    <label htmlFor="category">
                        <b>Избери категория</b>
                    </label>
                    <select name="category" id="category" placeholder="Избери категория">
                        <option value="architectureAndDesign">Архитектура &amp; проектиране на сгради</option>
                        <option value="interiorDesign">Интериорен дизайн</option>
                        <option value="landscapeArchitecture">Ландшафтна архитектура</option>
                        <option value="constructionAndRepair">Строителство и ремонтни дейности</option>
                    </select>

                    <label htmlFor="phoneNumber">
                        <b>Телефонен номер</b>
                    </label>
                    <input 
                        type="number" 
                        placeholder="Телефонен номер" 
                        name="phoneNumber" 
                        id="phoneNumber"
                    />

                    <label htmlFor="firstName">
                        <b>Лице за контакт</b>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Име" 
                        name="firstName"
                    />
                    <input 
                        type="text" 
                        placeholder="Фамилия" 
                        name="lastName" 
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
                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button
                        type="button"
                        onClick={() => closeRegisterModal(false)}
                        className="cancelbtn"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
}

export default Register;
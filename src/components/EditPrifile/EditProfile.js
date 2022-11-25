import style from './EditProfile.module.css'
const EditProfile = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Информация за фирмата</h1>
            <form className={style.formContainer}>
                <div className={style.row}>
                    <label htmlFor="companyName">
                        <b>Име на фирмата</b>
                    </label>
                    <input
                        className={style.inputStyle}
                        type="text"
                        placeholder="Име на фирмата"
                        name="companyName"
                        id="companyName"
                    />
                </div>

                <div className={style.row}>
                    <label htmlFor="category">
                        <b>Избери категория</b>
                    </label>
                    <select className={style.inputStyle} name="category" id="category" placeholder="Избери категория">
                        <option value="architectureAndDesign">Архитектура &amp; проектиране на сгради</option>
                        <option value="interiorDesign">Интериорен дизайн</option>
                        <option value="landscapeArchitecture">Ландшафтна архитектура</option>
                        <option value="constructionAndRepair">Строителство и ремонтни дейности</option>
                    </select>
                </div>

                <div className={style.row}>
                    <label htmlFor="companyInformation">
                        <b>Информация за фирмата</b>
                    </label>
                    <textarea className={style.inputStyle} name="companyInformation" id="companyInformation" placeholder="Информация за фирмата"></textarea>
                </div>

                <div>
                    <h2>Данни за контакт:</h2>
                    <div className={style.row}>
                        <label htmlFor="firstName">
                            <b>Лице за контакт</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Име" 
                            name="firstName"
                        />
                        <input 
                            className={style.inputStyle}
                            type="text" 
                            placeholder="Фамилия" 
                            name="lastName" 
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="phoneNumber">
                            <b>Телефонен номер</b>
                        </label>
                        <input 
                            className={style.inputStyle}
                            type="number" 
                            placeholder="Телефонен номер" 
                            name="phoneNumber" 
                            id="phoneNumber"
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="email">
                            <b>E-mail</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            id="email"
                        />
                    </div>

                    <div className={style.row}>
                        <label htmlFor="url">
                            <b>Website</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="url"
                            placeholder="https://example.com"
                            name="url"
                            id="url"
                        />
                    </div>

                    <div className={style.row}>
                        
                        <label htmlFor="city">
                            <b>Избери град</b>
                        </label>
                        <select id="city" name="city" className={style.selectCity}>
                            <option>Всички градове</option>
                            <option>София</option>
                            <option>Пловдив</option>
                            <option>Варна</option>
                            <option>Бургас</option>
                            <option>Русе</option>
                            <option>Стара Загора</option> 
                            <option>Плевен</option>
                            <option>Добрич</option>
                            <option>Сливен</option>
                            <option>Шумен</option>
                            <option>Перник</option>
                            <option>Хасково</option>
                            <option>Ямбол</option>
                            <option>Пазарджик</option>
                            <option>Благоевград</option>
                            <option>Велико Търново</option>
                            <option>Враца</option>
                            <option>Габрово</option>
                            <option>Асеновград</option>
                            <option>Видин</option>
                            <option>Кърджали</option>
                            <option>Кюстендил</option>
                            <option>Монтана</option>
                            <option>Търговище</option>
                            <option>Силистра</option>
                            <option>Ловеч</option>
                            <option>Разград</option>
                            <option>Смолян</option>
                        </select>
                        <label htmlFor="adress">
                            <b>Адрес</b>
                        </label>
                        <input
                            className={style.inputStyle}
                            type="text"
                            placeholder="Адрес"
                            name="adress"
                            id="adress"
                        />
                    </div>
                </div>

                
                <button>Редактирай</button>
            </form>
        </div>
    );
};


export default EditProfile;
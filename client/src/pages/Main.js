import React from 'react';
import {Container} from "react-bootstrap";

const Main = () => {
    return (
        <Container>
            <div className="display-5 mt-5 m-5" >
                Добро пожаловать в самый приятный и уютный медицинский центр "Leramed"
            </div>
            <div className="display-6 mt-5 m-5" >
                Наша клиника работает с самыми новыми технологиями, наши специалисты професионалы в своём деле
            </div>
            <div className="display-6 mt-5 m-5" >
                На данный момент в вашей стране открыты только детские филиалы "LeramedKids", но мы планируем в течении следующего года открыть так же и филиалы поликлиник для взрослых)))
            </div>
            <div className="display-6 mt-5 m-5" >
                Все вопросы можете присылать нам (troshko_lera@mail.ru)
            </div>
        </Container>
    );
};

export default Main;
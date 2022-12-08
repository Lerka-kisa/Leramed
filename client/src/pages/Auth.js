import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation,useNavigate} from "react-router-dom";
import {CLINIK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration, login} from "../http/authAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [llogin, setLogin] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const click = async () => {
        try{
            if (isLogin) {
                await login(llogin,password)
                user.check()
                //console.log(data.role)
            }
            else {
                if(password === password2){
                    await registration(llogin, mail, phone, password)
                    user.check()
                }
                else {
                    alert("Debil, passwords raznie")
                }
            }
            navigate(CLINIK_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }


    }

    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin?"Авторизация":"Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin?
                        <>
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Введите ваш логин, email или телефон..."
                                value={llogin}
                                onChange={e => setLogin(e.target.value)}
                            />
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Введите ваш пароль..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                // type="password"
                            />
                        </>
                        : <>
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Придумайте ваш логин..."
                                value={llogin}
                                onChange={e => setLogin(e.target.value)}
                            />
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Введите ваш email..."
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                            />
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Введите ваш телефон..."
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Введите ваш пароль..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                // type="password"
                            />
                            <Form.Control
                                className = "mt-3"
                                placeholder = "Повторите пароль..."
                                value={password2}
                                onChange={e => setPassword2(e.target.value)}
                                // type="password"
                            />
                        </>
                    }

                    <Row className="d-flex justify-content-between mt-3 ps-5 pe-5">
                        <Button
                            variant={"success"}
                            onClick={click}
                        >
                            {isLogin?"Войти":"Зарегистрироваться"}

                        </Button>
                        {isLogin?
                            <div>Нет аккаунта?
                                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>Есть аккаунт?
                                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
import '../../scss/contacts/styles.scss';

import Header from '../../components/Header.js'
import Container from "react-bootstrap/Container";

export default function Contacts() {
    return(
        <>
            <Header/>
            <Container className='contacts-container'>

                <div className='contacts-content'>
                    <h1>Контакты</h1>
                    <h2>Сайт Каменской школы: <a href="https://shkolakamenskaya-r18.gosweb.gosuslugi.ru/">
                            https://shkolakamenskaya-r18.gosweb.gosuslugi.ru/
                        </a>
                    </h2>
                    <h2>Телефоны</h2>
                    <p>8 (3416)525108 - школа</p>

                    <p>8 (3416)525091 - бухгалтерия</p>

                    <h2>Электронная почта</h2>
                    <p>schoolkam@mail.ru</p>

                    <h2>Адрес</h2>
                    <p>427005, Удмуртская Республика, Завьяловский район, д. Каменное, ул.Школьная, 1</p>
                </div>
            </Container>
        </>
    )
}
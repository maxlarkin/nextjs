import '../../scss/home/styles.scss';

import Header from '../../components/Header.js'
import Container from "react-bootstrap/Container";

export default function Home() {
    return(
        <>
            <Header/>
            <Container className='home-container'>

                <div className='home-content'>
                    <h1>Галерея музея МБОУ Каменской СОШ</h1>
                </div>
            </Container>
        </>
    )
}
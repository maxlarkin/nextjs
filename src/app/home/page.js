import Container from "react-bootstrap/Container";
import Header from "../../components/Header";

export default function Home() {
    return (
        <main>
            <Container fluid>
                <Header/>
                <h1>Home</h1>
            </Container>
        </main>
    )
}
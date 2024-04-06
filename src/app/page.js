import Content from '../components/Content.js'
import Header from '../components/Header.js'
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
    <main>
        <Container fluid>
            <Header/>
            <Content/>
        </Container>
    </main>
  )
}

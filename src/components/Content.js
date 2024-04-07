import '../scss/photos/content.scss';

import Photos from './Photos.jsx'
import Container from "react-bootstrap/Container";

export default function Content() {
    return(
        <Container className='test'>
            <Photos/>
        </Container>
    )
}
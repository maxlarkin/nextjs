"use client";

import '../../scss/photoPages/styles.scss'

import {useRouter} from 'next/navigation'
import Container from 'react-bootstrap/Container'

export default function Page({ params }) {
    const router = useRouter();

    return (
        <Container fluid className='photo-page'>
            <img src={params.name.replaceAll('-', '/')} />
            <p onClick={() => router.back()}>back</p>
        </Container>


    )
}
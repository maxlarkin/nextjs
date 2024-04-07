"use client";

import '../scss/photos/header.scss'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {useRouter} from "next/navigation";
import {usePathname} from "next/navigation";

export default function Header() {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <header className='header'>
            <div className='logo '>Галерея Каменской школы (v1.3.1)</div>
            <ButtonGroup className='nav nav-tabs nav-fill header-nav'>
                <Button
                    onClick={() => router.push('/home')}
                    className={'nav-item btn-header' + (pathname === '/home' ? 'active' : '')}
                >Home</Button>
                <Button
                    onClick={() => router.push('/')}
                    className={'nav-item btn-header' + (pathname === '/' ? 'active' : '')}
                >Photos</Button>
                <Button
                    onClick={() => router.push('/about')}
                    className={'nav-item btn-header' + (pathname === '/contacts' ? 'active' : '')}
                >Contacts</Button>
            </ButtonGroup>

        </header>
    )
}
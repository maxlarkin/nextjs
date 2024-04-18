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
            <div className='logo '>Галерея музея Каменской школы</div>
            <ButtonGroup className='nav nav-tabs nav-fill header-nav'>
                <Button
                    onClick={() => router.push('/home')}
                    className={'nav-item btn-header' + (pathname === '/home' ? 'active' : '')}
                >Главная</Button>
                <Button
                    onClick={() => router.push('/')}
                    className={'nav-item btn-header' + (pathname === '/' ? 'active' : '')}
                >Фотографии</Button>
                <Button
                    onClick={() => router.push('/contacts')}
                    className={'nav-item btn-header' + (pathname === '/contacts' ? 'active' : '')}
                >Контакты</Button>
            </ButtonGroup>

        </header>
    )
}
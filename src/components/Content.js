import '../scss/home/content.scss';

import Header from "./Header.js";
import Photos from './Photos.jsx'

export default function () {
    return(
        <div className='content container'>
            <Header/>
            <Photos/>
        </div>
    )
}
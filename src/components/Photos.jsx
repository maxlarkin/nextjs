import Photo from './Photo.jsx'
import photosList from '../filesList.js'
import '../scss/photos/content.scss'



export default function Photos() {

    let elements = photosList.map((el, i) => <Photo obj={el} key={i} dataKey={i}/>);


    console.log('render');

    return (
        <div className='photosContainer'>
            <span style={{width: '100%', fontSize: '2rem', display: 'inline-block', paddingLeft: '1rem'}}>Фотографии: </span>
            {elements}
        </div>
    )
}


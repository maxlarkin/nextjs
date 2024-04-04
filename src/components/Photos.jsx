import Photo from './Photo.jsx'
import photosList from '../filesList.js'
import '../scss/home/content.scss'



export default function () {

    let elements = photosList.map((el, i) => <Photo obj={el} key={i}/>);


    console.log('render');

    return (
        <div className='photosContainer'>
            <div className='filter'>
                <div className='filters'>
                    <span style={{fontSize: '2rem'}}>filters: temporarily unavailable</span>

                    {/*{<Years years={years}/>}*/}

                </div>

            </div>
            {/*{getElem(valueJson)}*/}
            <span style={{width: '100%', fontSize: '2rem', display: 'inline-block', paddingLeft: '1rem'}}>photos: </span>
            {elements}
        </div>
    )
}


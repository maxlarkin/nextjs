import '../scss/home/content.scss'
import photosList from '../filesList.js'

export default function Photo({obj, dataKey}) {

    // console.log(photosList)

    let text = obj.name.replace('.jpg', '').replace('.png', '').replaceAll('_', ' ')

    return (
        <div className='photo ' key={dataKey}>
            <img src={obj.dataPath} alt="" draggable={false}/>
            <p style={{fontStyle: 'italic'}}>{text.includes('Scan') || text.includes('photo') ? 'nameless photo' : text}</p>
        </div>
    )
}

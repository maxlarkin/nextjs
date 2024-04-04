import '../scss/home/content.scss'
import photosList from '../filesList.js'

export default function ({obj, key}) {

    // console.log(photosList)
    console.log(obj.path + '/' + obj.name);

    return (
        <div className='photo col-sm-6 col-lg-4 col-xl-3' key={key}>
            <img src={obj.path + '/' + obj.name} alt="" draggable={false}/>
            <span style={{fontStyle: 'italic'}}>{obj.title}</span>
        </div>
    )
}

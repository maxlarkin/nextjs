"use client";
import '../scss/photos/content.scss'
import {useRouter} from "next/navigation";


export default function Photo({obj, dataKey}) {

    const router = useRouter();

    let text = obj.name.replace('.jpg', '').replace('.png', '').replaceAll('_', ' ')

    return (
        <div className='photo ' key={dataKey} onClick={() => router.push('photos/' + obj.name)}>
            <img src={obj.dataPath} alt="" draggable={false}/>
            <p style={{fontStyle: 'italic'}}>{text.includes('Scan') || text.includes('photo') ? 'nameless photo' : text}</p>
        </div>
    )
}

"use client";
import '../scss/photos/content.scss'
import {useRouter} from "next/navigation";
import {useEffect} from "react";



export default function Photo({obj, dataKey}) {

    useEffect(() => {
        const photos = document.getElementsByClassName('photo');

        const options = {threshold: 1};

        const vdHandler = (els, detector) => {
            els.forEach((data) => {
                if(data.intersectionRatio == 1) {
                    let img = data.target.firstChild;
                    img.src = img.getAttribute('datasrc')
                }
            })
        };

        const vd = new IntersectionObserver(vdHandler, options);

        for (let el of photos) {
            vd.observe(el)
        }



    }, []);

    const router = useRouter();

    let text = obj.name.replace('.jpg', '').replace('.png', '').replaceAll('_', ' ');

    return (
        <div className='photo ' key={dataKey} onClick={() => router.push(obj.dataPath)}>
            <img className='photo-img' src='' datasrc={obj.dataPath} alt="" draggable={false}/>
            <p style={{fontStyle: 'italic'}}>{text.includes('Scan') || text.includes('photo') ? 'Фото без названия' : text}</p>
        </div>
    )
}

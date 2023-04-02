import Introduction from '../About/Introduction';
import Quotation from '../About/Quotation';
import ProjectCard from '../Projects/ProjectCard';
import './slider.scss';
import { useEffect, useState } from 'react';

function Slider({ latestProject }) {
    const elements = ['', 'quote', 'project']
    const [element, setElement] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            const index = elements.indexOf(element)

            if (index === elements.length - 1) {
                setElement(elements[0])
            } else {
                setElement(elements[index + 1])
            }
        }, 8000)

        return () => clearTimeout(timer)
    }, [element])

    return (
        <section className='slider'>
            <div className='slider-wrapper'>
                <div className='active-slide-element'>
                    <Introduction isVisible={element === ''} />
                    <Quotation isVisible={element === 'quote'} />
                    <ProjectCard props={{ proj: latestProject, isVisible: element === 'project' }} />
                </div>
                <div className='slideNav-wrapper'>
                    {elements.map((el) => {
                        return <div key={el} className={`slideNav ${element === el ? 'active' : ''}`} onClick={() => setElement(el)}></div>
                    })}
                </div>
            </div>
        </section >
    )
}

export default Slider;
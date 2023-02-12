import './slider.scss'
import { useState } from 'react'
import ProjectCard from "../../components/Projects/ProjectCard";
import projects from "../../data/projects.json"

function ProjectSlider() {
    const [slides, setSlides] = useState({
        prev: projects.length-1,
        currentBack: 0,
        next: 1
    })
    const [btnClicked, setBtnClicked] = useState('')

    function back() {
        setBtnClicked('back')
        if (slides.currentForth === 1 || slides.currentBack === 1) {
            setSlides({
                prev: projects.length - 1,
                currentBack: 0,
                next: slides.currentForth || slides.currentBack
            })
        } else {
            setSlides({
                prev: slides.prev - 1,
                currentBack: slides.prev,
                next: slides.currentForth || slides.currentBack
            })
        }
    }

    function next() {
        let current
        if (slides.currentForth) {
            current = slides.currentForth
        } else if (slides.currentBack) {
            current = slides.currentBack
        }

        if (slides.next === projects.length - 1) {
            setSlides({
                prev: current,
                currentForth: slides.next,
                next: 0
            })
        } else if (slides.currentForth === 0 || slides.currentBack === 0) {
            // !! "else if" needed, otherwise wont accept new value for prev (dont know why)
            setSlides({
                prev: 0,
                currentForth: slides.next,
                next: slides.next + 1
            })
        } else {
            setSlides({
                prev: current,
                currentForth: slides.next,
                next: slides.next + 1
            })
        }
        setBtnClicked('forth')
    }

    function getPosition(slide) {
        return Object.keys(slides).find(key => slides[key] === slide)
    }
    return (
        <section className='projectSlider'>
            <div className="proj-wrapper">
                {projects.map(proj => {
                    const position = getPosition(projects.indexOf(proj))
                    return <ProjectCard props={{ proj, position, btnClicked }} key={proj.no} />
                }
                )}
            </div>
            <div className="btn-wrapper">
                <button onClick={back} className={'btn-slider'}>❰</button>
                <button onClick={next} className={'btn-slider'}>❱</button>
            </div>
        </section>
    )
}

export default ProjectSlider;
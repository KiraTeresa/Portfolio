import './slider.scss'
import { useState, useEffect } from 'react'
import Loading from "../../components/Loading/Loading";
import ProjectCard from "../../components/Projects/ProjectCard";
import apiClient from "../../services/apiClient";

function ProjectSlider() {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])
    // const [currentSlide, setCurrentSlide] = useState(0)
    const [slides, setSlides] = useState({
        prev: 2,
        currentBack: 0,
        next: 1
    })
    const [btnClicked, setBtnClicked] = useState('')


    useEffect(() => {
        apiClient.get('/projects').then(result => {
            setProjects(result.data)
        }).catch(err => console.log('Error: ', err)).finally(() => setIsLoading(false))
    }, [])

    // console.log(slides)

    function back() {
        setBtnClicked('back')
        if (slides.currentForth === 1 || slides.currentBack === 1) {
            setSlides({
                prev: projects.length - 1,
                currentBack: 0,
                next: slides.currentForth || slides.currentBack
            })
        } else {
            // console.log("C-Forth: ", slides.currentForth, " C-Back: ", slides.currentBack)
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
        // console.log(">>>>> C-Forth: ", slides.currentForth, " C-Back: ", slides.currentBack)
        // const current = slides.currentBack || slides.currentForth
        // console.log("CURRENT ---- ", current)

        if (slides.next === projects.length - 1) {
            // console.log("NEXT>>> ", slides.next)
            setSlides({
                prev: current,
                currentForth: slides.next,
                next: 0
            })
        } else if (slides.currentForth === 0 || slides.currentBack === 0) {
            // !! "else if" needed, otherwise wont accept new value for prev (dont know why)
            // console.log("Hello??????")
            setSlides({
                prev: 0,
                currentForth: slides.next,
                next: slides.next + 1
            })
        } else {
            // console.log("C-Forth: ", slides.currentForth, " C-Back: ", slides.currentBack)
            setSlides({
                prev: current,
                currentForth: slides.next,
                next: slides.next + 1
            })
        }
        setBtnClicked('forth')
    }

    // function next() {
    //     if (currentSlide === projects.length - 1) {
    //         setCurrentSlide(0)
    //     } else {
    //         setCurrentSlide(currentSlide + 1)
    //     }
    // }

    function getPosition(slide) {
        return Object.keys(slides).find(key => slides[key] === slide)
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='projectSlider'>
            {/* <ProjectCard props={{ proj: projects[currentSlide], isVisible: true }} key={currentSlide} /> */}
            <div className="proj-wrapper">
                {projects.map(proj => {
                    // const isCurrent = (projects.indexOf(proj) === slides.current)
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
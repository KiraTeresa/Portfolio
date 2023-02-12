import { Link } from 'react-router-dom';
import './projects.scss'
const slugify = require('slugify')


function ProjectCard({ props }) {
    const { name, introduction, image, deployment, contributor } = props.proj;
    const { isVisible, position, btnClicked } = props
    const onHomepage = (window.location.pathname === "/")
    const slug = slugify(name)

    return (
        <section className={`project-card ${isVisible ? 'visible' : ''} ${position ? position : ''} ${btnClicked ? btnClicked : ''}
         `}>
            {onHomepage ?
                <p className='latesProj'>{"My latest project"}</p>
                : ""}
            <div className='project-text'>
                <div className='info'>
                    <h2>{name}</h2>
                    <div className='short-description'>
                        {introduction}
                        {contributor ?
                            <div className='collab'>
                                <h4>Contributor:</h4>
                                <a href={contributor.github} target="_blank" rel="noreferrer">{contributor.name}</a>
                            </div>
                            : ""}
                    </div>
                    {window.location.pathname === `/projects/${slug}` ?
                        <a href={deployment} target="_blank" rel="noreferrer"><button className='btn-1'>See deployment</button></a> :
                        <Link to={`/projects/${slug}`}><button className='btn-1'>Read more</button></Link>}
                </div>
                <div className='screenshot-wrapper'>
                    <img src={image} alt={`${name} screenshot`} />
                    {/* {window.location.pathname === `/projects/${slug}` ?
                        <a href={deployment} target="_blank" rel="noreferrer"><button className='btn-1'>See deployment</button></a> : ''} */}
                </div>
            </div>
        </section>
    )
}

export default ProjectCard;
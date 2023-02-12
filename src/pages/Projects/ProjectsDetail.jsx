import { useParams } from "react-router-dom";
import ProjectCard from "../../components/Projects/ProjectCard"
import Features from "../../components/Projects/Features";
import Technologies from "../../components/Projects/Technologies";
import projects from "../../data/projects.json"
import slugify from "slugify";

function ProjectsDetail() {
    const { slug } = useParams()
    const project = projects.find(proj => slugify(proj.name) === slug)

    const { description, tech } = project

    return (
        <div className='container proj-detail-wrapper'>
            <ProjectCard props={{ proj: project, isOdd: true }} />
            <Features props={{ description }} />
            <Technologies props={{ tech }} />
        </div>
    )
}

export default ProjectsDetail;
import before from '../projects/before1.jpeg'
import after from '../projects/after1.jpeg'
import pic2 from '../projects/pic2.jpeg'
import pic3 from '../projects/pic3.jpeg'
import picc2 from '../projects/picc2.jpeg'
import picc3 from '../projects/picc3.jpeg'
import Project from "../components/Project.jsx";
export default function Projects() {

    function project(title, image1, image2, vid, before) {
        this.title = title;
        this.image1 = image1;
        this.image2 = image2;
        this.vid = vid;
        this.before = before;
    }

    const projects = [new project("Center Opening Bi-Fold Door with Bug Screen", picc3, pic3, "hg9VkyiE3Zg", false),
    new project("8x8 Bi-Fold Door Renovation", before, after, "veBLo2PF1FU", true),
    new project("Patio Bi-Fold Door Installation", picc2, pic2, `HlN1co1Qs54`, false)]

    return (
        <div className="section">
            <h2 style={{alignSelf: 'flex-start'}}>Installations</h2>
            {projects.map(project => (
                <Project title={project.title} img1={project.image1} img2={project.image2} video={project.vid} before={project.before} after={after} />
            ))}
        </div>
    )
}
import projectsData from './projectsData.json';
export default function Projects()
{

    return(
        <div>
            <h2 className="text-warning">Project(s)</h2>
            <hr/>
            <ul>
                {projectsData.map((data) => {
                    return(
                        <li><b>{data.projectName}</b><br/>{data.description}</li>
                    )
                })
                }
            </ul>
        </div>
    );
}
import PageDescription from "@/Components/PageDescription";
import ProjectItem from "@/Components/ProjectItem";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddNewProjectModal from "@/Components/modals/AddNewProjectModal";

//client side rendering
export default function AdminPage() {
    const [isNewProjectModal, setIsNewProjectModal] = useState(false) //useState is a hook
    const [projects, setProjects] = useState([]) //useState is a hook


    useEffect(() => {
        fetchProjects()
    }, [])

    const handleOnSubmint = (values) => {
        setProjects(prev => [
            ...prev, 
            {values, _id: projects.length + 1}])
    }

    async function fetchProjects() {
        try {   
            const response = await fetch('http://localhost:3000/api/projects')
            const responseJson = await response.json()
            console.log(responseJson);

            setProjects(responseJson)



        }catch(error) {
            console.log(error)
        }

    }

    return (
        <section> 
            <PageDescription title="Admin" description="Here you will be able to add update your project" />

            <div
                style={{ textAlign: "center", marginBottom: "40px" }}
            >
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => setIsNewProjectModal(true)}
                >
                    Add New Project
                </Button>
            </div>

            {projects.map(project => <ProjectItem key={project._id} project={project} />)}
            <AddNewProjectModal 
                open={isNewProjectModal}
                onClose={() => setIsNewProjectModal(false)}
                onSubmit={handleOnSubmint}
            />
        
        </section>
    )
}
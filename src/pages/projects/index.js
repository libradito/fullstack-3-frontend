import PageDescription from "@/Components/PageDescription";
import ProjectItem from "@/Components/ProjectItem";

export default function Projects({ projects}) {
    return (
        <section> 
            <PageDescription title="Projects" description="Here you will find some of the personal and clients projects that I created with each project containing its own case study" />

            {projects.map(project => <ProjectItem key={project._id} project={project} />)}

        
        </section>
    )
}

//server side rendering
// get data from api route and pass it to the component

export async function getServerSideProps() {
    let projects = [
        {
            _id: 1,
            name: "Dopefolio",
            description:
              "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
            imageUrl:
              "https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg",
          },
          {
            _id: 2,
            name: "Wilsonport",
            description:
              "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
            imageUrl:
              "https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg",
          },
    ];

    // try {
    //     const response = await fetch("http://localhost:3000/api/projects");
    //     projects = await response.json();
    // } catch (error) {
    //     console.log(error);
    // }
    
    return {
        props: {
            projects,
        },
    };
}
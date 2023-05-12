import PageDescription from "@/Components/PageDescription";
import { Grid, Button, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function About({skills}) {
  const router = useRouter();

  return (
    <section>
      <PageDescription
        title="About"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me!</h2>
          <p>
            I&apos;m a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contacts
          </Button>
        </Grid>

        <Grid item md={6}>
            <h2>My Skills</h2>
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" >
            {skills.map((skill) => (
                <Chip key={skill} label={skill} />
            ))}
            </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {

    let skills = [];

    try{
        const response = await fetch("https://my-skills-api-default-rtdb.firebaseio.com/skills.json");
        const data = await response.json();
        skills = data.split(",");
    } catch(error) {
        console.log(error);
    }


    return {
        props: {
            skills: skills,
        },
        revalidate: 10,
    }
}
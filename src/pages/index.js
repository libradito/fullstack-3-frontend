import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import styles from '../styles/Home.module.css'

export default function Home({name, summary}) {
  const router = useRouter();
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button 
          variant="contained" 
          size='large' 
          onClick={() => router.push("/projects")}  
          >
          Projects
        </Button>
      </div>
    </section>
  )
}

//this data will be collected at build time
export async function getStaticProps() {
  //Get your data from an API, CMS, etc.
  return {
    props: {
      name: 'Librado',
      "summary": "I'm a software developer."
    }
  }
}

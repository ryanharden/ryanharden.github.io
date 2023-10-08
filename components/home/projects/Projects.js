import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { useRef } from 'react';

export const Projects = () => {
  const titleRef = useRef(null);
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader ref={titleRef} title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Rainforest Retail",
    imgSrc: "project-imgs/rainforest-home.png",
    videoSrc: "https://portfolio-vids.s3.us-west-2.amazonaws.com/rainforest-demo.mp4",
    code: "https://github.com/ryanharden/Amazon-Clone",
    projectLink: "https://rainforest-retail.onrender.com/",
    tech: ["Python", "JavaScript", "React", "Redux", "Flask", "SQLAlchemy", "AWS S3"],
    description:
      "A pixel perfect Amazon clone that leverages AWS S3 buckets to implement efficient user image uploads for products and reviews in order to reduce overall server load.",
    modalContent: (
      <>
        <p>
          A pixel perfect Amazon clone that leverages AWS S3 buckets to implement efficient user image uploads for products and reviews in order to reduce overall server load.
        </p>
        <p className={styles.linksText}>
          Key Takeaways<span>.</span>
        </p>
        <p>
          I designed a search feature that pulls results from a PostgreSQL database allowing users to filter by product name and category.
        </p>
        <p>
          I familiarized myself with the boilerplate code of hooking up AWS S3 with Flask.
        </p>
        <p>
          Harnessed the power of object relational mapping, using SQLAlchemy, to abstract and manage the database operations, providing a high-level, Pythonic, and more intuitive interface to interact with the underlying SQL database.
        </p>
        <p>
          Successfully implemented dynamic cart features using Redux, allowing seamless addition, removal, and quantity adjustments of products, ensuring accurate price calculations.
        </p>
      </>
    ),
  },
  {
    title: "Nomad Nest",
    imgSrc: "project-imgs/nomad-home.png",
    videoSrc: "https://portfolio-vids.s3.us-west-2.amazonaws.com/nomadnest-demo.mp4",
    code: "https://github.com/ryanharden/airbnb-clone",
    projectLink: "https://mybnb-4byf.onrender.com/",
    tech: ["JavaScript", "React", "Redux", "Express", "Sequelize", "AWS S3", "Google Maps API", "Google Autocomplete API"],
    description:
      "A high fidelity Airbnb clone that integrates some of Google's API's in order to create a friendly - more intuitive user experience while booking a 'nest'.",
    modalContent: (
      <>
        <p>
          A high fidelity Airbnb clone that integrates some of Google's API's in order to create a friendly - more intuitive user experience while booking a 'nest'.
        </p>
        <p className={styles.linksText}>
          Key Takeaways<span>.</span>
        </p>
        <p>
          I built a predictive search feature that incorporates Google’s Places Autocomplete API for geocoding user input to efficiently retrieve spots within a certain location and display them on a map.
        </p>
        <p>
          Utilized the Google Maps JavaScript API to showcase spots as interactive markers, improving the user experience for those seeking 'nests'."
        </p>
        <p>
          Although I had prior experience with AWS S3, adapting the backend infrastructure to integrate S3 with Express was an fun challenge {":)"}.
        </p>
      </>
    ),
  },
  {
    title: "TuneSpace",
    imgSrc: "project-imgs/tunespace-home.png",
    videoSrc: "https://portfolio-vids.s3.us-west-2.amazonaws.com/tunespace-demo.mp4",
    code: "https://github.com/JAllen2022/SoundCloud-Group-Clone",
    projectLink: "https://tunespace.onrender.com/",
    tech: ["Python", "JavaScript", "React", "Redux", "Flask", "SQLAlchemy", "AWS S3"],
    description:
      "A SoundCloud clone that replicates an action-oriented audio streaming service built by myself and a group of developers.",
    modalContent: (
      <>
        <p>
          A SoundCloud clone that replicates an action-oriented audio streaming service built by myself and a group of developers.
        </p>
        <p className={styles.linksText}>
          Key Takeaways<span>.</span>
        </p>
        <p>
          Leveraged React's song player library alongside Redux's capabilities to create an audio controller component that will play, pause or skip the current song.
        </p>
        <p>
          Implemented React’s wavesurfer library to visualize a song’s waveform while also displaying the song’s progress in sync with the song player component. This was a tricky but satisfying one!
        </p>
        <p>
          Employed GitHub's version control system to manage our codebase effectively. We divided the project into discrete features, each assigned to a pair of developers. Each pair created a separate branch off the main branch, ensuring an isolated environment for the development of their specific feature. This approach facilitated a clean, organized workflow and reduced the risk of destabilizing the main codebase.
        </p>
      </>
    ),
  },
  // {
  //   title: "Paint Reference 4",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Python", "FastAPI", "SQLAlchemy"],
  //   description:
  //     "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
  //   modalContent: (
  //     <>
  //       <p>Alright, you got me. I&apos;m all out of paint references.</p>
  //       <p>
  //         Point is, use this space to explain a bit further WHAT this project
  //         is, as well as what YOU contributed to it.
  //       </p>
  //       <p>You get the idea. Now more lorem {":)"}</p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
];

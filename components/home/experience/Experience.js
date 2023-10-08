import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import styles from './experience.module.scss';


export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Skills" dir="l" />
      <div className={styles.experienceItemWrapper}>
        {experience.map((item) => (
          <ExperienceItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

const experience = [
  // {
  //   title: "Google",
  //   position: "Software Engineer",
  //   time: "2022 - Present",
  //   location: "Atlanta",
  //   description:
  //     "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
  //   tech: [
  //     "Angular",
  //     "Python",
  //     "GCP",
  //     "Git",
  //     "GitHub",
  //     "Java",
  //     "Golang",
  //     "K8s",
  //   ],
  // },
  // {
  //   title: "Facebook",
  //   position: "Software Engineer",
  //   time: "2020 - 2022",
  //   location: "San Francisco",
  //   description:
  //     "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
  //   tech: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
  // },
  // {
  //   title: "Amazon",
  //   position: "Software Engineer",
  //   time: "2016 - 2020",
  //   location: "Seattle",
  //   description:
  //     "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
  //   tech: [
  //     "Java",
  //     "Python",
  //     "S3",
  //     "RDS",
  //     "Redshift",
  //     "PySpark",
  //     "HDFS",
  //     "Apache Airflow",
  //   ],
  // },
  {
    techLogo: "tech-logos/javascript-circle.png",
    title: "JavaScript",
    className: "javascript-icon"
  },
  {
    techLogo: "tech-logos/python-logo.png",
    title: "Python",
    className: "python-icon"
  },
  {
    techLogo: "tech-logos/react-icon.png",
    title: "React",
    className: "react-icon"
  },
  {
    techLogo: "tech-logos/redux-logo.png",
    title: "Redux",
    className: "redux-icon"
  },
  {
    techLogo: "tech-logos/html-logo.png",
    title: "HTML5",
    className: "html-icon"
  },
  {
    techLogo: "tech-logos/css-logo.png",
    title: "CSS3",
    className: "css-icon"
  },
  {
    techLogo: "tech-logos/flask-logo.png",
    title: "Flask",
    className: "flask-icon"
  },
  {
    // techLogo: "tech-logos/express-icon.png",
    title: "Express",
    className: "express-icon"
  },
  {
    techLogo: "tech-logos/aws-logo.png",
    title: "AWS",
    className: "aws-icon"
  },
  {
    techLogo: "tech-logos/sqlalchemy-logo.png",
    title: "SQLAlchemy",
    className: "sqlalchemy-icon"
  },
  {
    techLogo: "tech-logos/sequelize-logo.png",
    title: "Sequelize",
    className: "sequelize-icon"
  },
  {
    techLogo: "tech-logos/postgresql-logo.png",
    title: "PostgreSQL",
    className: "postgresql-icon"
  },
  {
    techLogo: "tech-logos/github-logo.png",
    title: "Github",
    className: "github-icon"
  },
  {
    techLogo: "tech-logos/postman-logo.png",
    title: "Postman",
    className: "postman-icon"
  },
];

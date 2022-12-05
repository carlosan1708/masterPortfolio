/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Carlos Rodriguez T",
  description:
    "Experience full stack developer with more than 5+ years of experience delivering software web projects with excellence, while developing myself everyday",
  og: {
    title: "Carlos Rodriguez T Portfolio",
    type: "website",
    url: "https://carlosan1708.github.io",
  },
};

//Home Page
const greeting = {
  title: "Carlos Rodriguez T",
  logo_name: "Carlos Rodriguez T",
  subTitle:
    "Experience full stack developer with more than 5+ years of experience delivering software web projects with excellence, while developing myself everyday.",
  resumeLink:
    "https://drive.google.com/file/d/1f0HI9J49agBXS_9Mx8sWsWZQ7HYjrPfT/view?usp=share_link",
  portfolio_repository: "https://github.com/carlosan1708",
  githubProfile: "https://github.com/carlosan1708",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/carlosan1708",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlosan1708/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:carlosan1708@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const competitiveSites = { competitiveSites: [] }
const skills = {
  data: [
    {
      title: "Technical Leader / Senior Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Java SpringBoot, NestJs (NodeJs) or Express , Python - Flask",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java Springboot",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#3399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Material Ui",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#0413",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms as a developer",
        "⚡ Hosting and maintaining simple websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud using Google GKE,CloudRun and AWS Lambdas",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master Degree in Computer Engineering",
      subtitle: "MSC CS",
      logo_path: "uoc_logo.jpg",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied advanced software engineering subjects like Algorithms, AI, HPC, Distributed System Architecture, etc.",
        "⚡ Apart from this, I have decided to complete my master's degree by building a full stack software application to hold a machine learning segmentation model for satellite images.",
      ],
      website_link: "https://www.uoc.edu/portal/es/index.html",
    },
    {
      title: "Postgraduate Degree in Data analytics",
      subtitle: "Data Analytics",
      logo_path: "cenfotec.png",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ 1 year program where I learn data analytics concepts, including statistical knowledge, machine learning and concepts of data engineering, including Spark",
      ],
      website_link: "https://ucenfotec.ac.cr/",
    },
    {
      title: "Bachelor Degree in Computer Engineering",
      subtitle: "Bachelor CS",
      logo_path: "tec.jpg",
      duration: "2012 - 2017",
      descriptions: [
        "⚡5 year program and one of the top and hardest public universities in Costa Rica for software engineering",
      ],
      website_link: "https://www.tec.ac.cr/en",
    },
  ],
};
const certifications = {
  certifications: [

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked for the last few years in a rapidly evolving technology stack cycle while achieving constant promotions or rewards due to the excellence of my work.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Leader/Sr FullStack developer",
          company: "Cargill",
          company_url: "https://www.cargill.com/",
          logo_path: "cargill_logo.jpg",
          duration: "May 2020 - PRESENT",
          location: "International, Costa Rica",
          description:
            "Lead, architect, designed, and develop web products for R&D departments, mainly focused on biotechnology processes and plants related capabilities. Main Technologies: Java, React/Typescript, Node",
          color: "#0879bf",
        },
        {
          title: "FullStack developer",
          company: "Manhattan Associates - Gorilla Logic",
          company_url: "https://www.manh.com/",
          logo_path: "manh.jpg",
          duration: "Aug 2018 - May 2020",
          location: "USA, Costa Rica",
          description:
            "One of the main contributors of a complex business logic routing microservice for a Transportation Management module, was part of the first batch of developers (2) who helped form a group of 10 developers for our client",
          color: "#9b1578",
        },
        {
          title: "Software engineer",
          company: "Neustar",
          company_url: "https://www.home.neustar/",
          logo_path: "neustar.png",
          duration: "Jul 2017 - Aug 2018",
          location: "USA, Costa Rica",
          description:
            "Designed and developed software solutions to improve one of the main processes of the company which focus on cost reduction, this solutions where based on distributed web systems",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Data Science",
      experiences: [
        {
          title: "University Co-professor",
          company: "Cenfotec.",
          company_url: "https://ucenfotec.ac.cr/",
          logo_path: "cenfotec.png",
          duration: "Jan 2019 - Jan 2020",
          location: "Costa Rica",
          description:
            "Support and assist the main professor by imparting complementary topics to machine learning to improve the overall learning of 40 students across different groups.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Data Scientist",
          company: "Method Data Science",
          company_url: "https://www.methoddatascience.com/",
          logo_path: "method.jpg",
          duration: "Jun 2018 - Sep 2018",
          location: "USA",
          description:
            "I had the chance to work with a Brazilian machine learning engineer and learn some tricks from him while creating a solution for a small company on hospital patient forecasting.",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "carlos.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {

  },
  addressSection: {
    title: "Address",
    subtitle:
      "Central America, Costa Rica, Heredia, Flores",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Heredia+Province,+Heredia/@19.8229306,-104.0853943,4.25z/data=!4m5!3m4!1s0x8fa0faddaded66bd:0x2527e99d1a1e0bdf!8m2!3d9.9981406!4d-84.1197824?hl=en",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+506 88828147",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

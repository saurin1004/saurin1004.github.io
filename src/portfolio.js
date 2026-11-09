/*
 * Content for saurin1004.github.io
 * Everything you see on the site is driven from this file (plus src/data/projects.json).
 */
import projectsData from "./data/projects.json";

export const siteUrl = "https://saurin1004.github.io";

export const seo = {
  title: "Saurin Prajapati — Software Engineer",
  description:
    "Saurin Prajapati is a software engineer building backend services, event-driven systems and ML-powered pipelines. M.S. Computer Science at Arizona State University.",
  keywords:
    "Saurin Prajapati, saurin1004, software engineer, backend engineer, machine learning, Arizona State University, Wikimedia",
};

export const profile = {
  name: "Saurin Prajapati",
  shortName: "Saurin",
  handle: "saurin1004",
  role: "Software Engineer",
  currently: "Software Engineer at Wikimedia Foundation",
  education: "M.S. Computer Science, Arizona State University",
  location: "Boston, MA, USA",
  email: "prajapatisaurin8@gmail.com",
  // Set openToWork to false to hide the green "open to" badge and hiring wording.
  openToWork: true,
  openTo: "Open to full-time software engineering roles",
  tagline:
    "I build dependable backend services and ML-powered data pipelines, from Kafka event streams and Spring Boot APIs to model-serving workflows that real people rely on.",
  resumeLink:
    "https://drive.google.com/file/d/1ugEpYTjMbdkCfCk1bdDl4KCmOfJe0QUk/view",
  asuProfile: "https://search.asu.edu/profile/5094956",
  githubProfile: "https://github.com/saurin1004",
  sourceRepo: "https://github.com/saurin1004/masterPortfolio",
};

// Short "about me" paragraphs shown on the home page. Edit freely.
export const about = [
  "I'm a software engineer who likes the unglamorous parts of systems: the queues, retries, indexes and test suites that decide whether a product actually works on a bad day.",
  "Right now I'm at the Wikimedia Foundation, building Python services that turn machine-learning predictions into signals editors can act on. Before that I spent a year and a half at Sutra Management modernising enterprise order-management systems with Spring Boot, Kafka and MySQL.",
  "I'm finishing my M.S. in Computer Science at Arizona State University with a 4.00 GPA, focused on distributed systems, cloud computing, security and machine learning.",
];

export const socialLinks = [
  {
    name: "GitHub",
    handle: "saurin1004",
    link: "https://github.com/saurin1004",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "saurin-prajapati",
    link: "https://www.linkedin.com/in/saurin-prajapati/",
    icon: "linkedin",
  },
  {
    name: "Email",
    handle: "prajapatisaurin8@gmail.com",
    link: "mailto:prajapatisaurin8@gmail.com",
    icon: "mail",
  },
  {
    name: "LeetCode",
    handle: "saurin1004",
    link: "https://leetcode.com/u/saurin1004/",
    icon: "leetcode",
  },
  {
    name: "HackerRank",
    handle: "saurinprajapati",
    link: "https://www.hackerrank.com/profile/saurinprajapati",
    icon: "hackerrank",
  },
];

export const skills = [
  {
    title: "Backend & Full Stack",
    summary:
      "REST services, event-driven integrations and the UIs on top of them.",
    points: [
      "Java & Spring Boot services backed by Postgres and MySQL, exposed as clean REST APIs.",
      "Kafka-based integrations with idempotent consumers and retry handling.",
      "React front ends written in modern JavaScript, HTML and CSS.",
      "Docker, Jenkins, Git, Postman, SonarQube and Jira in Agile teams.",
    ],
    tools: [
      { name: "Java", icon: "logos:java" },
      {
        name: "Spring Boot",
        icon: "simple-icons:springboot",
        color: "#6DB33F",
      },
      { name: "Kafka", icon: "simple-icons:apachekafka" },
      { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
      { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
      { name: "Django", icon: "simple-icons:django", color: "#2BA977" },
      { name: "Flask", icon: "simple-icons:flask" },
      { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
      { name: "Git", icon: "simple-icons:git", color: "#F05032" },
      { name: "JUnit 5", icon: "simple-icons:junit5", color: "#25A162" },
      { name: "Postman", icon: "simple-icons:postman", color: "#FF6C37" },
      { name: "Jira", icon: "simple-icons:jira", color: "#2684FF" },
    ],
  },
  {
    title: "Data Science & ML",
    summary: "From raw tables to validated, explainable models.",
    points: [
      "Data pipelines in Python with Pandas, NumPy, scikit-learn and XGBoost.",
      "Credit-risk modelling with logistic regression and careful feature engineering.",
      "ETL and modelling marts in SQL, SAS and Python over banking-scale datasets.",
      "Exploratory analysis, data-quality checks and model evaluation for stakeholders.",
    ],
    tools: [
      { name: "Python", icon: "logos:python" },
      { name: "PyTorch", icon: "simple-icons:pytorch", color: "#EE4C2C" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Keras", icon: "simple-icons:keras", color: "#D00000" },
      {
        name: "scikit-learn",
        icon: "simple-icons:scikitlearn",
        color: "#F7931E",
      },
      { name: "Pandas", icon: "simple-icons:pandas", color: "#8A7CF0" },
      { name: "NumPy", icon: "simple-icons:numpy", color: "#4DABCF" },
      { name: "Base SAS", icon: "material-icon-theme:sas" },
    ],
  },
  {
    title: "Languages & Data Stores",
    summary: "Years of production use, not just tutorials.",
    points: [
      "Java for 5+ years, Python for 4+ years, JavaScript for 2+ years.",
      "SQL across OracleDB, Postgres, MySQL and Microsoft SQL Server.",
      "Comfortable dropping down to C and C++ when performance matters.",
    ],
    tools: [
      { name: "Java", icon: "logos:java" },
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "C", icon: "devicon:c" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "Oracle", icon: "logos:oracle" },
      {
        name: "SQL Server",
        icon: "devicon-plain:microsoftsqlserver-wordmark",
        color: "#CC2927",
      },
      { name: "GraphQL", icon: "logos:graphql" },
    ],
  },
];

export const experience = [
  {
    group: "Work",
    items: [
      {
        title: "Software Engineer",
        company: "Wikimedia Foundation",
        url: "https://wikimediafoundation.org/",
        logo: "wikimedia_logo.png",
        start: "Jan 2026",
        end: "Present",
        location: "Remote, USA",
        stack: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Lift Wing"],
        highlights: [
          "Built Python services for an AI-assisted content-quality pipeline, exposing FastAPI endpoints that process multilingual revision metadata and deliver structured prediction signals to editor review workflows.",
          "Integrated Kafka event streams with PostgreSQL processing jobs, reducing duplicate revision handling by 18% while keeping prediction statuses traceable across asynchronous stages.",
          "Connected revision workflows to Lift Wing machine-learning APIs, turning model scores into configurable quality indicators that help prioritise potentially damaging edits for human review.",
          "Optimised batch inference requests and cache-aware metadata lookups, cutting median prediction response time by 14% and limiting unnecessary model-service and database traffic at peak.",
          "Validated model integrations, monitored processing logs and resolved recurring inference failures, improving successful event completion by 9% across staged deployments.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Sutra Management",
        url: "https://sutra-management.com/",
        logo: "sutra_logo.png",
        start: "Jan 2023",
        end: "Jul 2024",
        location: "Ahmedabad, India · Hanoi, Vietnam · Dubai, UAE",
        stack: [
          "Java",
          "Spring Boot",
          "Hibernate",
          "MySQL",
          "Kafka",
          "Jenkins",
        ],
        highlights: [
          "Configured Java Spring Boot services for an enterprise order-management modernisation, translating functional requirements into REST endpoints, validation rules and reusable service-layer components.",
          "Modelled Hibernate/JPA entities for MySQL transaction data, cutting repeated query execution by 13% and improving record retrieval time by 10% through targeted indexing.",
          "Integrated Kafka status events with downstream fulfilment services using idempotent consumers and retry handling for delayed, duplicated or unavailable messages.",
          "Automated unit and API regression tests with JUnit, Mockito and Postman, increasing covered service scenarios by 16% before client release cycles.",
          "Deployed Docker-packaged services through Jenkins pipelines, reducing manual release preparation by 15% and documenting rollback and verification steps for support teams.",
        ],
      },
    ],
  },
  {
    group: "Internships",
    items: [
      {
        title: "Software Engineer Intern, AI/ML",
        company: "Tecblic",
        url: "https://tecblic.com/",
        logo: "tecblic_logo.png",
        start: "Jun 2022",
        end: "Jul 2022",
        location: "Ahmedabad, India",
        stack: ["Python", "XGBoost", "scikit-learn"],
        highlights: [
          "Worked on machine-learning pipelines in Python and XGBoost: preparing and preprocessing datasets and tuning models.",
          "Improved the reliability of model-training workflows and helped debug backend processing issues alongside the engineering team.",
          "Contributed to production-oriented ML code with a focus on maintainability.",
        ],
      },
    ],
  },
];

export const degrees = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Computer Science",
    logo: "asu_logo.png",
    duration: "2024 – 2026",
    gpa: "4.00 / 4.00",
    url: "https://www.asu.edu/",
    coursework: [
      "Distributed Database Systems",
      "Applied Cryptography",
      "Engineering Blockchain Applications",
      "Software Security",
      "Cloud Computing",
      "Algorithms in Computational Biology",
      "Software Verification, Validation & Testing",
      "Data Mining",
      "Statistical Machine Learning",
      "Data Visualization",
    ],
  },
  {
    school: "Institute of Technology, Nirma University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    logo: "nirma_logo.png",
    duration: "2021 – 2023",
    gpa: "8.14 / 10.00",
    url: "https://technology.nirmauni.ac.in/",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Computer Architecture",
      "Database Management Systems",
      "Operating Systems",
      "Web Technologies",
      "Machine Learning",
      "Computer Networks",
      "Design & Analysis of Algorithms",
      "Software Engineering",
      "Theory of Computation",
      "Compiler Construction",
      "Big Data Analytics",
      "Agile Software Development",
      "Cloud Computing",
      "Data Mining",
      "Software Testing & QA",
      "Blockchain Technology",
    ],
  },
];

export const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online · Andrew Ng",
    logo: "stanford_logo.png",
    link: "https://coursera.org/share/b3068e0c50250f04b4e85cd52b15b77a",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI · Andrew Ng",
    logo: "deeplearning_ai_logo.png",
    link: "https://coursera.org/share/bd97c97263dcca16aad0a19c22529411",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Stanford Online · Andrew Ng",
    logo: "stanford_logo.png",
    link: "https://coursera.org/share/8291006724d0b3d78247bb9148501849",
  },
  {
    title: "Data Ecosystem",
    issuer: "Tableau Learning Partner",
    logo: "tableau_logo.png",
    link:
      "https://www.coursera.org/account/accomplishments/verify/JL1W8DKRIH2G",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM · Rav Ahuja",
    logo: "ibm_logo.png",
    link: "https://coursera.org/share/267208b99cec22489b757a7574e13356",
  },
  {
    title: "Introduction to Tableau",
    issuer: "Tableau Learning Partner",
    logo: "tableau_logo.png",
    link: "https://coursera.org/share/eb340105fb6eb6864e75e9c64efc4ce4",
  },
  {
    title: "Python",
    issuer: "HackerRank",
    logo: "hackerrank_logo.png",
    link: "https://www.hackerrank.com/certificates/acca8c793e98",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "UC San Diego · Alexander S. Kulikov",
    logo: "uc_san_diego_logo.png",
    link: "https://coursera.org/share/39b81674792ba917aba9d22fa335cd0a",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    logo: "hackerrank_logo.png",
    // TODO: this currently points at the same certificate as "Python" above.
    link: "https://www.hackerrank.com/certificates/acca8c793e98",
  },
  {
    title: "Python Training",
    issuer: "IIT Bombay · Spoken Tutorial",
    logo: "iit_bombay_logo.png",
    link:
      "https://drive.google.com/file/d/1mXBaCrZEoUtJVuyyFUzzLYyiwYFnzI-s/view?usp=sharing",
  },
  {
    title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
    issuer: "Udemy · Andrei Neagoie",
    logo: "udemy_logo.png",
    link:
      "https://www.udemy.com/certificate/UC-fa8206f4-4fc8-445d-90a7-fb3f6a870153/",
  },
  {
    title: "C Training",
    issuer: "IIT Bombay · Spoken Tutorial",
    logo: "iit_bombay_logo.png",
    link:
      "https://drive.google.com/file/d/1XlR7xz21LJKaCmF9S7br3zwERrcjmFcm/view?usp=sharing",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    logo: "udemy_logo.png",
    link:
      "https://www.udemy.com/certificate/UC-80006468-bcce-4a75-a698-d815a4a8355a/",
  },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    icon: "simple-icons:leetcode",
    color: "#FFA116",
    link: "https://leetcode.com/u/saurin1004/",
  },
  {
    name: "HackerRank",
    icon: "simple-icons:hackerrank",
    color: "#2EC866",
    link: "https://www.hackerrank.com/profile/saurinprajapati",
  },
];

// Projects come from src/data/projects.json, newest first.
export const projects = [...projectsData.data].sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

// Public repo count is fetched live from the GitHub API (see useGithubRepoCount);
// this number is only shown if GitHub can't be reached.
export const githubFallbackRepoCount = 10;

export const stats = [
  { value: "4.00", label: "GPA, M.S. CS at ASU" },
  { value: "2.5+", label: "Years shipping software" },
  {
    id: "repos",
    value: String(githubFallbackRepoCount),
    label: "Public repos on GitHub",
  },
  { value: String(certifications.length), label: "Certifications" },
];

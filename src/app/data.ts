export const portfolioData = {
  name: "Wei Chen",
  title: "Engineering Leader & DevInfra Specialist",
  tagline: "Elevating Development Velocity, Effectiveness, Craftsmanship, and Happiness",
  email: "joyuan@gmail.com",
  phone: "650-390-7608",
  linkedin: "https://www.linkedin.com/in/wchen-tech",
  summary: [
    "Accomplished technology leader with 13+ years of software development and 10+ years of technical leadership experience.",
    "Specialize in leading Technical Infrastructure organizations that strive to elevate Development Velocity, Effectiveness, Craftsmanship, and Happiness.",
    "Customer obsessed, always align interests and collaborate, earn and keep (engineering) customers' trust.",
    "Seasoned leader in recruiting, managing and growing multi-cultural distributed teams; poised to identify and groom new technical leaders and enable senior ICs and managers.",
    "Champion of data-driven approaches to improve development speed, effectiveness, quality, and experience."
  ],
  pillars: [
    { title: "Velocity", description: "Reducing friction and latency in the development lifecycle." },
    { title: "Effectiveness", description: "Ensuring tools and processes drive meaningful outcomes." },
    { title: "Craftsmanship", description: "Promoting excellence in engineering standards and quality." },
    { title: "Happiness", description: "Improving the developer experience and overall satisfaction." }
  ],
  experience: [
    {
      role: "Senior Engineering Manager",
      company: "Argo AI",
      period: "09/2018 - Present",
      location: "Palo Alto, CA",
      description: "Built Argo's DevInfra organization from 4 to 20+ engineers, covering Build, CI/CD, DevExp, Vehicle Deployment, and Cloud Infra.",
      highlights: [
        "Replaced C++ build system with distributed Bazel builds, significantly improving reliability and performance.",
        "Built next-gen cloud-native CI/CD on JenkinsX, Prow, Tekton, Spinnaker, and Kubernetes.",
        "Developed a developer portal with activity stats and project quality metrics.",
        "Managed OS, firmware, and map deployment to 100+ autonomous vehicles across 6 US cities.",
        "Migrated public cloud services to private multi-cloud (GCP and AWS)."
      ]
    },
    {
      role: "Director of Engineering",
      company: "Didi Labs / Didi Chuxing",
      period: "08/2016 - 08/2018",
      location: "Mountain View, CA",
      description: "Led International Payments and 99 (Brazilian subsidiary) engineering teams, as well as the Effectiveness Platform (Head of Tools and Infra).",
      highlights: [
        "Built the International Payments team from scratch, recruiting 8 engineers in Mountain View.",
        "Transformed Didi's CI/CD loop for thousands of engineers, covering requirement tracking to production deployment.",
        "Consolidated data infra (Kafka, Hadoop, Spark) and migrated data centers from AWS to Didi US.",
        "Integrated 99's engineering process post-merger, including mobile, web, and QA."
      ]
    },
    {
      role: "Technical Lead / Staff Software Engineer",
      company: "LinkedIn",
      period: "10/2013 - 08/2016",
      location: "Mountain View, CA",
      description: "Tech Lead for Development Tools and representative to the Horizontal Initiative Committee.",
      highlights: [
        "Revolutionized Play (sbt/Scala) tooling, replacing Ivy resolution and improving build times.",
        "Initiated the 'Play on Gradle' project, presenting at the 2015 Gradle Summit.",
        "Improved Play IDE support and standardized code quality validation across the company.",
        "Worked on CD pipelines, library tracking services, and dependency management frameworks."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "SuccessFactors (An SAP Company)",
      period: "06/2011 - 10/2013",
      location: "Reston, VA",
      description: "Tech Lead of Platform Foundation and Architecture Design Review Committee member.",
      highlights: [
        "Converted single-tenant JavaEE web apps into multi-tenant enterprise applications.",
        "Built application SDK and exposed RESTful web services.",
        "Streamlined build and delivery by integrating Maven, TeamCity, Jenkins, and Git."
      ]
    }
  ],
  skills: {
    leadership: ["Org Building", "Strategic Planning", "Recruiting", "Multi-cultural Leadership", "Technical Architecture"],
    infrastructure: ["Bazel", "Kubernetes", "CI/CD", "AWS/GCP", "Terraform", "Docker"],
    development: ["Java/JavaEE", "Scala", "sbt/Gradle", "React", "Python", "CLI Tooling"]
  },
  education: [
    { school: "University of Central Florida", degree: "Master of Science, Computer Science", period: "2004 - 2007" },
    { school: "University of Science and Technology of China", degree: "Bachelor of Science, Computer Science", period: "1999 - 2004" }
  ],
  awards: [
    "SAP HiPo (High Potential employee), 2013",
    "All Star Award, Plateau Systems Product Engineering, 2010",
    "Most Valuable Rookie, Plateau Systems Product Engineering, 2007",
    "Outstanding Prize, 15th National Olympiad of Informatics (Programming Contest), 1998"
  ]
};

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
      role: "Engineering Leader",
      company: "YouTube / Google",
      period: "08/2022 - Present",
      location: "San Bruno, CA",
      description: "Leading engineering teams at YouTube focused on large-scale infrastructure and developer experience (DevEx) for the world's largest video platform.",
      highlights: [
        "Strategizing and executing initiatives to elevate engineering craftsmanship, productivity, and happiness across a global engineering organization.",
        "Applying advanced DevEx principles to solve complex infrastructure challenges and streamline developer workflows at Google scale."
      ]
    },
    {
      role: "Engineering Manager",
      company: "Databricks",
      period: "2020 - 08/2022",
      location: "San Francisco, CA",
      description: "Led engineering teams building the core Databricks Lakehouse platform, specifically focused on high-performance data processing and SQL engine components.",
      highlights: [
        "Managed software engineers responsible for building and scaling high-performance data processing systems like the Photon vectorized query engine.",
        "Contributed to enhancing the reliability and performance of Delta Lake, ensuring ACID transactions and scalable metadata handling for massive datasets.",
        "Led initiatives to improve the efficiency and cost-effectiveness of Databricks' cloud-native infrastructure across AWS, Azure, and GCP."
      ]
    },
    {
      role: "Senior Engineering Manager",
      company: "Argo AI",
      period: "09/2018 - 2020",
      location: "Palo Alto, CA",
      description: "Architected and scaled Argo AI's Developer Infrastructure organization from 4 to 20+ engineers across 3 locations, supporting hundreds of hardware and software engineers.",
      highlights: [
        "Spearheaded the transformation of the C++ build system by implementing distributed Bazel builds, achieving radical improvements in build reliability and developer velocity.",
        "Built a next-generation, cloud-native CI/CD ecosystem leveraging JenkinsX, Prow, Tekton, Spinnaker, and Kubernetes.",
        "Launched a centralized Developer Portal providing critical insights into development activity stats and project quality metrics.",
        "Engineered a mission-critical Vehicle Deployment and Launcher system to orchestrate software, firmware, and HD map updates for a fleet of 100+ autonomous vehicles across 6 cities."
      ]
    },
    {
      role: "Director of Engineering",
      company: "Didi Labs / Didi Chuxing",
      period: "08/2016 - 08/2018",
      location: "Mountain View, CA",
      description: "Held dual leadership roles as Head of Tools & Infrastructure (Effectiveness Platform) and Director of International Business Technology.",
      highlights: [
        "Transformed Didi's global software development lifecycle by leading 30+ engineers in building a unified idea-to-production (CI/CD) feedback loop for thousands of developers.",
        "Recruited and built the International Payments team from scratch, delivering a scalable platform for global pay-in/pay-out partners.",
        "Led the technical post-merger integration of 99 (Brazil), incorporating their product development process and data infrastructure into Didi's global ecosystem.",
        "Executed a massive data center migration from AWS to Didi's private US Data Center, consolidating Kafka, Hadoop, Spark, and Redshift pipelines."
      ]
    },
    {
      role: "Technical Lead / Staff Software Engineer",
      company: "LinkedIn",
      period: "10/2013 - 08/2016",
      location: "Mountain View, CA",
      description: "Technical Lead for Development Tools and key representative on the Horizontal Initiative Committee.",
      highlights: [
        "Revolutionized the Play (sbt/Scala) ecosystem at LinkedIn, replacing legacy dependency resolution and significantly reducing build times for mission-critical applications.",
        "Founded the 'Play on Gradle' project, bridging complex build ecosystems and presenting the architecture at the 2015 Gradle Summit.",
        "Standardized code quality validation and improved IDE support for distributed development across the engineering organization.",
        "Contributed to core pieces of the LinkedIn library tracking and cross-project development infrastructure."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "SuccessFactors (An SAP Company)",
      period: "06/2011 - 10/2013",
      location: "Reston, VA",
      description: "Technical Lead of the Platform Foundation team and member of the Architecture Design Review Committee.",
      highlights: [
        "Led the architectural transformation of a single-tenant JavaEE Web Application into a modern, multi-tenant enterprise platform.",
        "Designed and implemented the application's SDK and core RESTful web services to enable ecosystem growth.",
        "Modernized the build and delivery pipeline by integrating Maven, Jenkins, and TeamCity into a streamlined CI process."
      ]
    }
  ],
  skills: {
    leadership: ["Org Building & Scaling", "Strategic Planning", "Recruiting & Talent Development", "Multi-cultural Distributed Leadership", "Technical Architecture"],
    infrastructure: ["Bazel (Distributed Builds)", "Kubernetes & Cloud-Native CI/CD", "AWS & GCP (Multi-cloud)", "Infrastructure as Code (Terraform)", "Docker & Container Orchestration"],
    development: ["Java/JavaEE & Spring", "Scala & sbt/Gradle", "System Design & SDK Development", "Python & CLI Tooling", "Developer Experience (DevEx) Metrics"]
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
  ],
  articles: [
    {
      slug: "management-philosophy",
      title: "My Management Philosophy",
      date: "Oct 2022",
      excerpt: "A comprehensive guide on how I approach leadership, expectations, and unlocking the full potential of engineers.",
      content: `# My Management Philosophy\n\n*Last updated: Oct 2022*\n\nWhen I start to manage a new team member, I often get asked about my management philosophy, how they would meet “my expectations”. Although I believe I have been given pretty consistent messages across different team members, my thoughts may be given by pieces, and may be in different order under different circumstances. I figure it is best if I can write them down so I can just share this article. Team members could just comprehend them in a more logical order.\n\n### Why did I become a manager?\n\n> **“With great power comes great responsibility.”** — Uncle Ben\n\nI am super grateful my first couple of bosses at Plateau Systems were both great leaders. They taught me so much, both professionally (how to be a great engineer) and personally (how to treat others, to inspire, and equally importantly how to have fun 😁). \n\nThey are my inspiration and role models as a leader: \n\n- They created a trustful and psychological safe environment.\n- They were super technical and were always available to teach me.\n- They empowered me with delegation and gave me room to grow (instead of micromanaging).\n- They cared about my career development, grooming me with bigger and bigger challenges.\n- They showed me we could have fun in our professional life as well.\n\n### My objective as a leader\n\n> “**Every French soldier carries a marshal’s baton in his knapsack.”** — Napoleon Bonaparte\n\nI aspire to be a transformational leader. To ensure people in my organization have the opportunity to transform themselves, the company, and the world. \n\n### Principles\n\n- **Trust** is the foundation for a high performing team, nurtured by **Empathy** and **Transparency**.\n- I practice a **Growth Mindset**. I will always have your best interests at heart and try to align business priority with your growth.\n- I believe **delegation** is the ultimate empowerment. Yet, “Trust, but verify”.\n- I believe in **Continuous Improvement** and strive to establish feedback loops.\n- I believe our professional lives can and should be **fun**.\n\n### On our work as a team\n\n- **Focus:** We do our best work when we are deeply focused. Let’s all be focused based on our OKRs and annual strategy!\n- **User Obsessed:** Your “impact” is ultimately measured by what that means to your customers or users. Build something that will wow them.\n- **Working Backwards:** Dream big, have a goal, and solve it backwards and iteratively.\n- **First Principles Thinking:** Breakdown the problem into fundamental pieces and challenge assumptions.\n- **Bias for Action:** As long as a decision is “reversible”, bias for action.\n- **KISS (Keep It Simple, Stupid):** It takes more effort to simplify. Don't be lazy—simplify user interfaces and architecture.`
    },
    {
      slug: "view-on-1-1s",
      title: "Management Playbook: 1:1s",
      date: "Oct 2022",
      excerpt: "How I view the purpose, frequency, and agenda of recurring 1:1 meetings.",
      content: `# Wei’s view on 1:1s\n\n### Principles\n\n- The **recurring** 1:1s are a reserved time slot (of my time) **FOR YOU** (not for me).\n- Ultimately, you own the agenda for anything that you want to discuss.\n- A living doc will be used to capture our discussions and action items.\n- Even though I have strong preferences for what we discuss, you are in the driver’s seat.\n- A living doc (e.g. Google doc) will be used to capture our discussions and action items.\n\n### Preferred Topics\n\n1. **Personal growth:** Career development, goals, feedback, and coaching.\n2. **Your personal feeling:** Feedback on work-life balance, projects, processes, and people.\n3. **Expectations and progress:** Moving towards goals and identifying where help is needed.\n4. **New project ideas:** What could we be doing that we aren't?\n5. **Getting to know each other:** Hobbies, what bothers you, and life outside work.\n\n### Day to Day Work Items\n\nWhile technical progress is important, 1:1s aren't the best place for that. Those should happen in standups or sprint planning. However, if you prefer to discuss them privately, it's always an option.`
    },
    {
      slug: "software-engineering-research",
      title: "Software Engineering Research Papers",
      date: "2023",
      excerpt: "A collection of research notes on DevEx, Flow, and Engineering Productivity.",
      content: `# Software Engineering Research Papers\n\n### DevEx: What Actually Drives Productivity\nFocusing on the developer experience (DevEx) as a primary driver of organizational performance.\n\n### Flow and Friction\nUsing Logs Data to Identify When Software Engineers Experience Flow or Focused Work. Flow occurs during periods of focus; isolating focused work via logs can help measure productivity non-intrusively.\n\n### Developer Experience Measurement\n- **GSM Framework:** Goals (Quality, Attention, Complexity, Velocity, Satisfaction), Signals, and Metrics.\n- **Quantitative vs. Qualitative:** Quantitative metrics give scale, but only qualitative studies provide the narrative and context on *why* engineers make certain choices.\n- **Actionable Metrics:** If no action will be taken based on a metric, there is no point in capturing it.`
    }
  ]
};

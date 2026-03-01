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
      content: `# Wei’s view on 1:1s\n\n### Principles\n\n- The **recurring** 1:1s are a reserved time slot (of my time) **FOR YOU** (not for me).\n- Ultimately, you own the agenda for anything that you want to discuss.\n- A living doc will be used to capture our discussions and action items.\n- Even though I have strong preferences for what we discuss, you are in the driver’s seat.\n\n### Preferred Topics\n\n1. **Personal growth:** Career development, goals, feedback, and coaching.\n2. **Your personal feeling:** Feedback on work-life balance, projects, processes, and people.\n3. **Expectations and progress:** Moving towards goals and identifying where help is needed.\n4. **New project ideas:** What could we be doing that we aren't?\n5. **Getting to know each other:** Hobbies, what bothers you, and life outside work.\n\n### Day to Day Work Items\n\nWhile technical progress is important, 1:1s aren't the best place for that. Those should happen in standups or sprint planning. However, if you prefer to discuss them privately, it's always an option.`
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

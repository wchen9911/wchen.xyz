export const portfolioData = {
  name: "Wei Chen",
  title: "Engineering Leader & DevInfra Specialist",
  tagline: "Elevating Development Velocity, Effectiveness, Craftsmanship, and Happiness",
  email: "joyuan@gmail.com",
  phone: "650-390-7608",
  linkedin: "https://www.linkedin.com/in/wchen-tech",
  summary: [
    "My mission is to elevate the productivity, craftsmanship, and happiness of software developers.",
    "During my career, I spent most of my time in serving software developers other than serving end customers. I build common libraries, frameworks, and services for other developers to leverage. I build standard SDLC infrastructure and tooling to increase their productivity and craftsmanship. I am also a technology evangelist on best practices in software development.",
    "I enjoy dealing with developers a lot. It is challenging, as they are often opinionated and unsatisfied. But that is perfect for me to hone both my technical and people leaderships! I also enjoy mentoring and coaching other developers. We succeed as a team, and it is our responsibility and culture to transform all of us to be more successful."
  ],
  pillars: [
    { title: "Velocity", description: "Reducing friction and latency in the development lifecycle." },
    { title: "Effectiveness", description: "Ensuring tools and processes drive meaningful outcomes." },
    { title: "Craftsmanship", description: "Promoting excellence in engineering standards and quality." },
    { title: "Happiness", description: "Improving the developer experience and overall satisfaction." }
  ],
  experience: [
    {
      role: "Software Engineering Manager",
      company: "YouTube",
      logo: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
      period: "August 2022 - Present",
      location: "San Francisco Bay Area",
      description: "Leading engineering teams at YouTube focused on large-scale infrastructure and developer experience (DevEx) for the world's largest video platform.",
      highlights: [
        "Strategizing and executing initiatives to elevate engineering craftsmanship, productivity, and happiness across a global engineering organization.",
        "Applying advanced DevEx principles to solve complex infrastructure challenges and streamline developer workflows at Google scale."
      ]
    },
    {
      role: "Senior Engineering Manager, Developer Platform",
      company: "Databricks",
      logo: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
      period: "January 2020 - April 2022",
      location: "San Francisco, CA",
      description: "Built up the Developer Platform org during the pandemic. Started with 5 engineers in SF, grew it to ~30 engineers distributed across both the US and Europe.",
      highlights: [
        "Scaled Databricks' dev platform and infra to support 4x engineers (~800) and 20x automated testing (20k+ CPU hours every day).",
        "Built a per-service deployment platform and dismantled the biweekly monolithic release train, enabling daily deployments with confidence.",
        "Unified fractured SDLC processes across Control Plane (web services) and Data Plane (runtime) teams.",
        "Sped up dev inner-loop: replaced Scala compiler, built native IDE integration, and built a full cloud-based dev environment."
      ]
    },
    {
      role: "Head of Developer Infrastructure",
      company: "Argo AI",
      logo: "https://www.vectorlogo.zone/logos/argoai/argoai-icon.svg",
      period: "2018 - 2020",
      location: "Palo Alto, CA",
      description: "Grew Argo AI's DevInfra org from 4 to 10+ engineers in 3 US locations, scaling the org into two teams: Vehicle Deployment and Build.",
      highlights: [
        "Reduced vehicle update time by 90% (from 1.5 hours to <10 mins), covering OS, binaries, firmware, and HD maps.",
        "Scaled up cloud and on-prem vehicle deployment infra to support 6 US cities, 100+ AVs, and 200+ Fleet laptops.",
        "Migrated build system to Bazel, enabling polyglot (C++, Rust, Java, Golang) monorepo support and cross-arch compilation.",
        "Built next-gen cloud-native CI/CD on top of JenkinsX, Prow, Tekton, and Spinnaker."
      ]
    },
    {
      role: "Director of Engineering",
      company: "Didi",
      logo: "https://www.vectorlogo.zone/logos/didiglobal/didiglobal-icon.svg",
      period: "2016 - 2018",
      location: "Mountain View, CA",
      description: "Dual leadership roles: Director of Engineering, International Business Technology and Head of Tools and Infrastructure (Effectiveness Platform).",
      highlights: [
        "Built the overseas International Payments team from ground up: recruited 8 engineers to build Didi's next-gen payments platform.",
        "Led the technical post-merger integration of 99 (Brazil), incorporating their product development processes and data infra into HQ.",
        "Led 30+ engineers in Beijing to transform developer experience with opinionated but frictionless platforms, from repository management to result analytics (A/B testing)."
      ]
    },
    {
      role: "Staff Software Engineer",
      company: "LinkedIn",
      logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
      period: "2013 - 2016",
      location: "Mountain View, CA",
      description: "TL of the Developer Tools team, focusing on build and inner dev-loop; member of the Horizontal Initiative Committee.",
      highlights: [
        "Led the 'Play-on-Gradle' initiative to unify the fractured build tooling landscape at LinkedIn (sbt vs Gradle).",
        "Streamlined the inner dev-loop: achieved faster Scala build times and native Play/Scala IDE support.",
        "Built enterprise-level automated dependency management services for all LinkedIn projects."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "SuccessFactors (SAP)",
      logo: "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
      period: "2007 - 2013",
      location: "Reston, VA",
      description: "Grew into the TL of the Platform Foundation team and a core member of the Architecture Design Review Committee.",
      highlights: [
        "Responsible for experimenting and launching new technologies, frameworks, and tools across the organization."
      ]
    }
  ],
  skills: {
    leadership: ["Org Building & Scaling", "Strategic Planning", "Recruiting & Talent Development", "Multi-cultural Distributed Leadership", "Technical Architecture"],
    infrastructure: ["Bazel (Distributed Builds)", "Kubernetes & Cloud-Native CI/CD", "AWS & GCP (Multi-cloud)", "Infrastructure as Code (Terraform)", "Docker & Container Orchestration"],
    development: ["Java/JavaEE & Spring", "Scala & sbt/Gradle", "System Design & SDK Development", "Python & CLI Tooling", "Developer Experience (DevEx) Metrics"]
  },
  education: [
    { school: "Stanford University Graduate School of Business", degree: "LEAD Business Program, Executive Education", period: "September 2023", logo: "https://www.vectorlogo.zone/logos/stanford/stanford-icon.svg" },
    { school: "University of Central Florida", degree: "MS, Computer Science", period: "2004 - 2007", logo: "https://www.vectorlogo.zone/logos/ucf/ucf-icon.svg" },
    { school: "University of Science and Technology of China", degree: "BS, Computer Science", period: "1999 - 2004", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/USTC_logo.svg/1200px-USTC_logo.svg.png" }
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

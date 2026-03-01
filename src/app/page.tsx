import Link from "next/link";
import { portfolioData } from "./data";
import { Zap, BarChart3, Layers, Smile, ArrowUpRight, Github, Mail, Linkedin, Award, GraduationCap } from "lucide-react";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  const pillarIcons = [<Zap key="zap" />, <BarChart3 key="bar" />, <Layers key="layer" />, <Smile key="smile" />];

  return (
    <main className="min-h-screen bg-[#fdfdfc] text-[#2d2d2d] font-sans selection:bg-[#a82a2a] selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-[43px] sm:top-[37px] left-0 right-0 z-50 bg-[#fdfdfc]/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-6 bg-[#a82a2a] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm shadow-[#a82a2a]/20">
               <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
            </div>
            <span className="font-bold tracking-tight text-xl text-[#2d2d2d]">{name}</span>
          </Link>
          <div className="flex gap-8 text-sm font-medium text-zinc-500">
            <Link href="/articles" className="hover:text-[#a82a2a] transition-colors">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#a82a2a] transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="text-[#a82a2a] font-bold hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Readable & Softer */}
      <section className="relative pt-32 pb-12 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_70%_30%,rgba(168,42,42,0.02)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a82a2a]/5 border border-[#a82a2a]/10 rounded-full text-[#a82a2a] font-bold text-xs animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-1.5 h-1.5 bg-[#a82a2a] rounded-full" /> Engineering Leadership
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#2d2d2d] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 uppercase">
                Velocity <span className="text-zinc-300">&</span> <br /> Intelligent Intent.
              </h1>
            </div>
            <div className="space-y-6 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-xl md:text-2xl font-medium text-zinc-600 leading-snug">
                {title} at <span className="text-[#a82a2a] font-bold underline decoration-[#a82a2a]/20 underline-offset-4 decoration-2">YouTube</span>. 
              </p>
              <p className="text-zinc-500 text-base leading-relaxed italic border-l-4 border-[#a82a2a]/20 pl-6 py-1">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="relative w-64 h-[20rem] rounded-[2.5rem] bg-white border border-zinc-200/50 p-8 flex flex-col justify-between overflow-hidden shadow-sm">
                 <div className="w-10 h-1 bg-[#a82a2a]/10 rounded-full" />
                 <div className="space-y-4">
                   <div className="w-full h-24 bg-[#a82a2a]/5 rounded-2xl flex items-center justify-center">
                      <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" className="w-12 h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="YouTube" />
                   </div>
                   <div className="space-y-2.5">
                     <div className="w-3/4 h-2 bg-zinc-100 rounded-full" />
                     <div className="w-1/2 h-2 bg-zinc-50 rounded-full" />
                   </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Current Focus</p>
                    <p className="text-base font-bold text-zinc-700">Engineering @ YouTube</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars: Soft & Readable */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto bg-[#f7f7f5] rounded-[3rem] p-10 space-y-10 border border-zinc-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[#a82a2a] font-bold text-xs uppercase tracking-widest">Principles</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#2d2d2d]">Management Philosophy</h2>
            </div>
            <p className="max-w-xs text-zinc-500 font-medium text-sm leading-relaxed border-l-2 border-zinc-200 pl-6">Building high-performance organizations through engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white border border-zinc-200/50 hover:border-[#a82a2a]/30 transition-all hover:shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#a82a2a]/5 rounded-xl flex items-center justify-center text-[#a82a2a] group-hover:bg-[#a82a2a] group-hover:text-white transition-all">
                     {pillarIcons[i]}
                  </div>
                  <span className="text-xs font-bold text-[#a82a2a] opacity-30">0{i+1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2d2d2d]">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">
        
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16">
          
          {/* Career Timeline: Highly Readable */}
          <section className="space-y-10">
            <div className="flex items-center gap-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#2d2d2d]">Career Journey</h2>
              <div className="h-px flex-grow bg-zinc-100" />
            </div>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="group grid grid-cols-[auto_1fr] gap-8 relative">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center z-10 shadow-sm overflow-hidden p-2 group-hover:border-[#a82a2a]/30 transition-all">
                       <img src={(job as any).logo} className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={job.company} />
                    </div>
                    {i !== experience.length - 1 && <div className="w-px flex-grow bg-zinc-100 my-3" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-xs font-bold text-[#a82a2a] uppercase tracking-widest">{job.period}</p>
                      <span className="text-zinc-300">&bull;</span>
                      <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-tighter italic">{job.location}</p>
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-[#2d2d2d] group-hover:text-[#a82a2a] transition-colors">{job.company}</h3>
                    <p className="text-zinc-500 font-semibold text-sm mb-4 leading-relaxed">{job.role}</p>
                    <div className="grid gap-3">
                      {job.highlights.slice(0, 3).map((item, j) => (
                        <div key={j} className="flex gap-3 text-[15px] text-zinc-600 leading-relaxed font-medium">
                          <span className="text-[#a82a2a]/40 font-bold mt-0.5">&bull;</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar: Insights & Details */}
          <div className="space-y-12">
            
            {/* Insights: Card style */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold tracking-tight">Recent Articles</h2>
                <Link href="/articles" className="text-xs font-bold text-[#a82a2a] hover:underline underline-offset-4">View All</Link>
              </div>
              <div className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.slug} href={`/articles/${article.slug}`} className="group block bg-white border border-zinc-200/50 p-6 rounded-[1.5rem] hover:border-[#a82a2a]/30 transition-all hover:shadow-sm">
                    <time className="text-[10px] font-bold text-[#a82a2a]/60 uppercase tracking-widest mb-2 block">{article.date}</time>
                    <h3 className="text-base font-bold text-[#2d2d2d] group-hover:text-[#a82a2a] transition-colors leading-snug">{article.title}</h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Foundation: Education */}
            <section className="space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight text-zinc-400">Foundation</h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1.5 group-hover:border-[#a82a2a]/20 transition-all">
                      <img src={(edu as any).logo} className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={edu.school} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-zinc-700 leading-tight">{edu.school}</h4>
                      <p className="text-zinc-500 text-xs italic">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards: Clean list */}
            <section className="space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight text-zinc-400">Recognitions</h2>
              <div className="space-y-3">
                {awards.slice(0, 4).map((award, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-medium text-zinc-500">
                    <Award className="w-3.5 h-3.5 text-[#a82a2a]/40" /> {award}
                  </div>
                ))}
              </div>
            </section>

            {/* Collaborate Section */}
            <section className="space-y-6 pt-10 border-t border-zinc-100">
              <div className="grid gap-4">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-[#a82a2a] text-white rounded-2xl font-bold hover:opacity-90 transition-all">
                  <Linkedin className="w-5 h-5" /> Connect on LinkedIn
                </a>
                <a href={`mailto:${email}`} className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-100 text-zinc-700 rounded-2xl font-bold hover:bg-zinc-200 transition-all">
                  <Mail className="w-5 h-5 text-[#a82a2a]" /> Email Me
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer: Simple & Clean */}
        <footer className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-zinc-400">
           <p>&copy; {new Date().getFullYear()} {name} &middot; Engineering Leader &middot; YouTube</p>
           <div className="flex gap-6">
              {awards.slice(0, 3).map((award, i) => (
                <div key={i} className="flex items-center gap-2">
                   <Award className="w-3 h-3 text-[#a82a2a]/40" /> {award}
                </div>
              ))}
           </div>
        </footer>

      </div>
    </main>
  );
}

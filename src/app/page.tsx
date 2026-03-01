import Link from "next/link";
import { portfolioData } from "./data";
import { Zap, BarChart3, Layers, Smile, ArrowUpRight, Github, Mail, Linkedin, Play, Award, GraduationCap } from "lucide-react";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  const pillarIcons = [<Zap key="zap" />, <BarChart3 key="bar" />, <Layers key="layer" />, <Smile key="smile" />];

  return (
    <main className="min-h-screen bg-[#fdfdfc] dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#fdfdfc] font-sans selection:bg-[#bc1a22] selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-[43px] sm:top-[37px] left-0 right-0 z-50 bg-[#fdfdfc]/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-6 bg-[#bc1a22] rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-md shadow-[#bc1a22]/20">
              <Play className="w-2.5 h-2.5 text-white fill-white" />
            </div>
            <span className="font-black tracking-tighter text-lg uppercase italic">{name}</span>
          </Link>
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/articles" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1">
              Articles <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1">
              LinkedIn <Linkedin className="w-2.5 h-2.5" />
            </a>
            <a href={`mailto:${email}`} className="text-[#bc1a22] hover:opacity-70 transition-opacity flex items-center gap-1 font-black">
              Contact <Mail className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Dense & High Impact */}
      <section className="relative pt-24 pb-8 px-8 overflow-hidden">
        {/* soft background accents */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_70%_30%,rgba(188,26,34,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#bc1a22 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }} />

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.8fr_1fr] gap-8 items-center relative z-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#bc1a22]/5 border border-[#bc1a22]/10 rounded-full text-[#bc1a22] font-black uppercase tracking-[0.3em] text-[8px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-1 h-1 bg-[#bc1a22] rounded-full animate-pulse" /> Engineering Leadership
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Velocity <br /> <span className="text-zinc-200 dark:text-zinc-800">&</span> Craft.
              </h1>
            </div>
            <div className="space-y-4 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-lg md:text-xl font-bold tracking-tight leading-tight text-zinc-500 dark:text-zinc-400">
                {title} @ <span className="text-[#bc1a22] font-black underline decoration-[#bc1a22]/20 underline-offset-4 decoration-2">YouTube</span>. 
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed italic border-l-2 border-[#bc1a22]/30 dark:border-[#bc1a22]/50 pl-4 py-0.5">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="relative w-56 h-[18rem] rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-hidden shadow-sm">
                 <div className="w-8 h-1 bg-[#bc1a22]/20 rounded-full" />
                 <div className="space-y-3">
                   <div className="w-full h-20 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-xl flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-[#bc1a22] fill-[#bc1a22]" />
                   </div>
                   <div className="space-y-1.5">
                     <div className="w-3/4 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                     <div className="w-1/2 h-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-full" />
                   </div>
                 </div>
                 <p className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-300">Scaling DevEx @ YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Consolidated */}
      <div className="max-w-6xl mx-auto px-8 pb-12 space-y-12">
        
        {/* Philosophy & Pillars */}
        <section className="bg-[#f4f4f0]/40 dark:bg-[#1a1a1a]/20 rounded-[2.5rem] p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">The <span className="text-[#bc1a22]">Philosophy</span></h2>
            <p className="max-w-xs text-zinc-500 font-medium text-xs border-l border-zinc-200 dark:border-zinc-800 pl-4">Four pillars that define how I build organizations and engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-6 rounded-[1.5rem] bg-white dark:bg-[#0f0f0f] border border-zinc-200/50 dark:border-zinc-800 hover:border-[#bc1a22]/40 transition-all hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-lg flex items-center justify-center text-[#bc1a22] group-hover:bg-[#bc1a22] group-hover:text-white transition-all">
                     {pillarIcons[i]}
                  </div>
                  <span className="text-[8px] font-black text-[#bc1a22] opacity-40 uppercase">0{i+1}</span>
                </div>
                <h3 className="text-lg font-black mb-1 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Arc & Articles Side-by-Side on Desktop */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
          
          {/* Career Arc */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Career <span className="text-zinc-200 dark:text-zinc-800">Arc</span></h2>
              <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
            </div>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <div key={i} className="group grid grid-cols-[auto_1fr] gap-6 relative">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-8 h-8 bg-white dark:bg-[#0f0f0f] border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center z-10">
                       <Play className={`w-2.5 h-2.5 text-[#bc1a22] ${i === 0 ? 'fill-[#bc1a22] animate-pulse' : ''}`} />
                    </div>
                    {i !== experience.length - 1 && <div className="w-px flex-grow bg-zinc-100 dark:bg-zinc-900 my-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-[8px] font-black text-[#bc1a22] uppercase tracking-[0.2em] mb-1">{job.period}</p>
                    <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-[#bc1a22] transition-colors">{job.company}</h3>
                    <p className="text-zinc-400 font-bold uppercase text-[8px] italic mb-3">{job.role} • {job.location}</p>
                    <div className="grid gap-2">
                      {job.highlights.slice(0, 2).map((item, j) => (
                        <p key={j} className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal flex gap-2">
                          <span className="text-[#bc1a22]/40">•</span> {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar: Insights & Foundation */}
          <div className="space-y-12">
            
            {/* Insights */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase tracking-tighter">Insights</h2>
                <Link href="/articles" className="text-[8px] font-black uppercase tracking-[0.2em] text-[#bc1a22]">All →</Link>
              </div>
              <div className="space-y-4">
                {articles.slice(0, 2).map((article) => (
                  <Link key={article.slug} href={`/articles/${article.slug}`} className="group block bg-white dark:bg-[#0f0f0f] border border-zinc-100 dark:border-zinc-800 p-4 rounded-[1.25rem] hover:border-[#bc1a22]/30 transition-all shadow-sm">
                    <time className="text-[8px] font-black text-[#bc1a22] opacity-60 uppercase tracking-[0.2em]">{article.date}</time>
                    <h3 className="text-sm font-black uppercase tracking-tight group-hover:text-[#bc1a22] transition-colors">{article.title}</h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Foundation */}
            <section className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-tighter text-zinc-300 dark:text-zinc-800">Foundation</h2>
              <div className="space-y-4">
                {education.slice(0, 2).map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-800">
                      <GraduationCap className="w-3.5 h-3.5 text-[#bc1a22]" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[10px] font-black uppercase leading-tight tracking-tight">{edu.school}</h4>
                      <p className="text-zinc-500 text-[9px]">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Collaborate */}
            <section className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-900">
              <div className="flex gap-4">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#bc1a22] text-white rounded-xl hover:opacity-90 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={`mailto:${email}`} className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#bc1a22] rounded-xl hover:bg-zinc-200 transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer info: Dense */}
        <footer className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-black uppercase tracking-[0.3em] text-zinc-300 dark:text-zinc-800">
           <div className="flex gap-6">
              {awards.slice(0, 3).map((award, i) => (
                <div key={i} className="flex items-center gap-1.5">
                   <Award className="w-2.5 h-2.5 text-[#bc1a22]/40" /> {award}
                </div>
              ))}
           </div>
           <p>© {new Date().getFullYear()} {name} • Built for Velocity</p>
        </footer>

      </div>
    </main>
  );
}

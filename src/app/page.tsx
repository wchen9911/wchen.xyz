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
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-6 bg-[#bc1a22] rounded-md flex items-center justify-center transition-transform group-hover:scale-110 shadow-md shadow-[#bc1a22]/20">
              <Play className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase italic">{name}</span>
          </Link>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/articles" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1">
              Articles <ArrowUpRight className="w-3 h-3" />
            </Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1">
              LinkedIn <Linkedin className="w-3 h-3" />
            </a>
            <a href={`mailto:${email}`} className="text-[#bc1a22] hover:opacity-70 transition-opacity flex items-center gap-1 font-black">
              Contact <Mail className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Dense & Vibrant */}
      <section className="relative pt-32 pb-16 px-8 overflow-hidden">
        {/* Soft Mesh Gradient */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_70%_30%,rgba(188,26,34,0.04)_0%,transparent_50%),radial-gradient(circle_at_30%_70%,rgba(188,26,34,0.02)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#bc1a22]/5 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#bc1a22 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }} />

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#bc1a22]/5 border border-[#bc1a22]/10 rounded-full text-[#bc1a22] font-black uppercase tracking-[0.3em] text-[9px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-1 h-1 bg-[#bc1a22] rounded-full animate-pulse" /> Engineering Leadership
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Velocity <br /> <span className="text-zinc-200 dark:text-zinc-800">&</span> Craft.
              </h1>
            </div>
            <div className="space-y-4 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-zinc-500 dark:text-zinc-400">
                {title} @ <span className="text-[#bc1a22] font-black underline decoration-[#bc1a22]/20 underline-offset-4 decoration-2">YouTube</span>. 
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed italic border-l-4 border-[#bc1a22]/30 dark:border-[#bc1a22]/50 pl-4 py-1">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="absolute -inset-6 bg-[#bc1a22]/5 blur-2xl rounded-full group-hover:bg-[#bc1a22]/10 transition-colors duration-700" />
              <div className="relative w-64 h-[22rem] rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 p-8 flex flex-col justify-between overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_32px_64px_-16px_rgba(188,26,34,0.12)] transition-all duration-500">
                 <div className="w-10 h-1 bg-[#bc1a22]/20 rounded-full" />
                 <div className="space-y-4">
                   <div className="w-full h-24 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-xl flex items-center justify-center relative overflow-hidden group/card">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#bc1a22]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                      <div className="w-10 h-6 bg-[#bc1a22] rounded-md flex items-center justify-center shadow-md shadow-[#bc1a22]/40 relative z-10">
                         <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                   </div>
                   <div className="space-y-2">
                     <div className="w-3/4 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                     <div className="w-1/2 h-2 bg-zinc-50 dark:bg-zinc-900 rounded-full" />
                   </div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300">Focus Area</p>
                    <p className="text-sm font-black leading-tight tracking-tight">Scaling DevEx for the Next Billion Users.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars: Compact Cards */}
      <section className="py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f4f0]/40 dark:bg-[#1a1a1a]/20 rounded-[3rem] mx-4 pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[#bc1a22] font-black uppercase tracking-[0.3em] text-[10px]">Foundation</p>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">The <span className="text-[#bc1a22]">Philosophy</span></h2>
            </div>
            <p className="max-w-xs text-zinc-500 font-medium text-sm border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">Four pillars that define how I build organizations and elevate engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white dark:bg-[#0f0f0f] border border-zinc-200/50 dark:border-zinc-800 hover:border-[#bc1a22]/40 transition-all hover:shadow-[0_24px_48px_-12px_rgba(188,26,34,0.1)] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-xl flex items-center justify-center text-[#bc1a22] group-hover:scale-110 group-hover:bg-[#bc1a22] group-hover:text-white transition-all duration-500">
                     {pillarIcons[i]}
                  </div>
                  <span className="text-[10px] font-black text-[#bc1a22] opacity-40 uppercase tracking-widest block">0{i+1}</span>
                </div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight leading-tight">{pillar.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Arc: Denser Timeline */}
      <section className="py-20 px-8 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4 text-center max-w-xl mx-auto">
            <p className="text-[#bc1a22] font-black uppercase tracking-[0.3em] text-[10px]">Trajectory</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Career <span className="text-zinc-200 dark:text-zinc-800">Arc</span></h2>
            <div className="w-16 h-1 bg-[#bc1a22] mx-auto rounded-full mt-4" />
          </div>
          <div className="space-y-16">
            {experience.map((job, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_3fr] gap-8 relative">
                {/* Vertical Line for Timeline */}
                {i !== experience.length - 1 && (
                  <div className="absolute top-16 left-5 w-px h-[calc(100%+2rem)] bg-zinc-100 dark:bg-zinc-900 hidden md:block" />
                )}
                
                <div className="space-y-3 relative z-10 pt-2">
                  <div className="w-10 h-10 bg-white dark:bg-[#0f0f0f] border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:border-[#bc1a22]/50 group-hover:shadow-md transition-all duration-500">
                     <Play className={`w-3.5 h-3.5 text-[#bc1a22] ${i === 0 ? 'fill-[#bc1a22] animate-pulse' : ''}`} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#bc1a22]">{job.period}</p>
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-none group-hover:text-[#bc1a22] transition-colors">{job.company}</h3>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[9px] italic">{job.location}</p>
                </div>
                
                <div className="space-y-6 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 rounded-[2.5rem] border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 hover:shadow-xl">
                  <h4 className="text-xl font-black uppercase tracking-tight leading-tight">{job.role}</h4>
                  <div className="grid gap-4">
                    {job.highlights.slice(0, 3).map((item, j) => (
                      <div key={j} className="flex gap-4 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium group/item">
                        <div className="w-5 h-5 rounded-md bg-[#bc1a22]/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#bc1a22] group-hover/item:text-white transition-colors duration-300">
                          <span className="text-[9px] font-black leading-none">{j+1}</span>
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section: Compact Cards */}
      <section className="py-20 px-8 relative overflow-hidden">
        {/* Soft Background Accent */}
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#bc1a22]/5 blur-[100px] rounded-full pointer-events-none opacity-50" />
        
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="flex items-end justify-between border-b-2 border-zinc-100 dark:border-zinc-900 pb-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Insights <span className="text-zinc-200 dark:text-zinc-800">&</span> Ideas</h2>
            <Link href="/articles" className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#bc1a22]">
              Explore Writing <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block space-y-4 bg-white dark:bg-[#0f0f0f] border border-zinc-100 dark:border-zinc-800 rounded-[2rem] overflow-hidden hover:border-[#bc1a22]/30 hover:shadow-[0_24px_48px_-12px_rgba(188,26,34,0.08)] transition-all">
                <div className="aspect-[16/9] bg-[#f4f4f0] dark:bg-zinc-900 relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#bc1a22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                      <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-md border border-zinc-100 dark:border-zinc-800">
                        <ArrowUpRight className="w-5 h-5 text-[#bc1a22]" />
                      </div>
                   </div>
                </div>
                <div className="space-y-2 p-6 pt-2">
                  <time className="text-[9px] font-black text-[#bc1a22] opacity-60 uppercase tracking-[0.2em]">{article.date}</time>
                  <h3 className="text-lg font-black group-hover:text-[#bc1a22] transition-colors leading-tight uppercase tracking-tight">{article.title}</h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 font-medium italic leading-relaxed">&ldquo;{article.excerpt}&rdquo;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Compact & Structured */}
      <footer className="py-20 px-8 border-t border-zinc-100 dark:border-zinc-900 bg-[#fdfdfc] dark:bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#bc1a22]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Collaborate</h2>
            <div className="grid gap-6">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all">
                LinkedIn <ArrowUpRight className="w-8 h-8 text-zinc-200 dark:text-zinc-800 group-hover:text-[#bc1a22] transition-colors" />
              </a>
              <a href={`mailto:${email}`} className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all">
                Email <Mail className="w-8 h-8 text-zinc-200 dark:text-zinc-800 group-hover:text-[#bc1a22] transition-colors" />
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Foundation</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-800 group-hover:border-[#bc1a22]/30 group-hover:shadow-md transition-all duration-500">
                      <GraduationCap className="w-4 h-4 text-[#bc1a22]" />
                   </div>
                   <div className="space-y-1">
                    <p className="text-[9px] font-black text-[#bc1a22] uppercase tracking-[0.1em]">{edu.period}</p>
                    <h4 className="text-lg font-black uppercase leading-tight tracking-tight">{edu.school}</h4>
                    <p className="text-zinc-500 font-bold text-xs italic">{edu.degree}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Awards Bar */}
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden">
           <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] text-zinc-400 shrink-0">
                   <Award className="w-3 h-3 text-[#bc1a22]" /> {award}
                </div>
              ))}
           </div>
        </div>

        <div className="max-w-6xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 dark:text-zinc-800">
           <p>© {new Date().getFullYear()} {name}</p>
           <div className="flex gap-8">
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Velocity</span>
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Effectiveness</span>
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Craftsmanship</span>
           </div>
        </div>
      </footer>
    </main>
  );
}
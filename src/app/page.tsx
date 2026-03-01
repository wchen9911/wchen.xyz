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
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-7 bg-[#bc1a22] rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-[#bc1a22]/20">
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="font-black tracking-tighter text-2xl uppercase italic">{name}</span>
          </Link>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            <Link href="/articles" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1.5">
              Articles <ArrowUpRight className="w-3 h-3" />
            </Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1a22] transition-colors flex items-center gap-1.5">
              LinkedIn <Linkedin className="w-3 h-3" />
            </a>
            <a href={`mailto:${email}`} className="text-[#bc1a22] hover:opacity-70 transition-opacity flex items-center gap-1.5 font-black">
              Contact <Mail className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Vibrant Mesh Background */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 pt-20 overflow-hidden">
        {/* Soft Mesh Gradient */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_70%_30%,rgba(188,26,34,0.04)_0%,transparent_50%),radial-gradient(circle_at_30%_70%,rgba(188,26,34,0.02)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#bc1a22]/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#bc1a22 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#bc1a22]/5 border border-[#bc1a22]/10 rounded-full text-[#bc1a22] font-black uppercase tracking-[0.4em] text-[10px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-1 h-1 bg-[#bc1a22] rounded-full animate-pulse" /> Engineering Leadership
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Velocity <br /> <span className="text-zinc-200 dark:text-zinc-800">&</span> Craft.
              </h1>
            </div>
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-zinc-500 dark:text-zinc-400">
                {title} @ <span className="text-[#bc1a22] font-black underline decoration-[#bc1a22]/20 underline-offset-8 decoration-4">YouTube</span>. 
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 text-lg leading-relaxed italic border-l-4 border-[#bc1a22]/30 dark:border-[#bc1a22]/50 pl-6 py-2">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="absolute -inset-8 bg-[#bc1a22]/5 blur-3xl rounded-full group-hover:bg-[#bc1a22]/10 transition-colors duration-700" />
              <div className="relative w-80 h-[28rem] rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 p-10 flex flex-col justify-between overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_48px_96px_-24px_rgba(188,26,34,0.12)] transition-all duration-500">
                 <div className="w-12 h-1 bg-[#bc1a22]/20 rounded-full" />
                 <div className="space-y-6">
                   <div className="w-full h-32 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-[2rem] flex items-center justify-center relative overflow-hidden group/card">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#bc1a22]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                      <div className="w-12 h-8 bg-[#bc1a22] rounded-lg flex items-center justify-center shadow-lg shadow-[#bc1a22]/40 relative z-10">
                         <Play className="w-3.5 h-3.5 text-white fill-white" />
                      </div>
                   </div>
                   <div className="space-y-3">
                     <div className="w-3/4 h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                     <div className="w-1/2 h-3 bg-zinc-50 dark:bg-zinc-900 rounded-full" />
                   </div>
                 </div>
                 <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Focus Area</p>
                    <p className="text-xl font-black leading-tight tracking-tight">Scaling DevEx for the Next Billion Users.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars: Vibrant Cards */}
      <section className="py-40 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f4f0]/40 dark:bg-[#1a1a1a]/20 rounded-[5rem] mx-4 pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <p className="text-[#bc1a22] font-black uppercase tracking-[0.4em] text-xs">Foundation</p>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">The <span className="text-[#bc1a22]">Philosophy</span></h2>
            </div>
            <p className="max-w-md text-zinc-500 font-medium text-lg border-l-2 border-zinc-200 dark:border-zinc-800 pl-8">Four pillars that define how I build organizations and elevate engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-12 rounded-[3rem] bg-white dark:bg-[#0f0f0f] border border-zinc-200/50 dark:border-zinc-800 hover:border-[#bc1a22]/40 transition-all hover:shadow-[0_48px_96px_-24px_rgba(188,26,34,0.1)] hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-2xl flex items-center justify-center text-[#bc1a22] mb-8 group-hover:scale-110 group-hover:bg-[#bc1a22] group-hover:text-white transition-all duration-500">
                   {pillarIcons[i]}
                </div>
                <span className="text-[10px] font-black text-[#bc1a22] opacity-40 uppercase tracking-widest mb-4 block">Pillar 0{i+1}</span>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Arc: Vibrant Timeline */}
      <section className="py-40 px-8 relative">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="text-[#bc1a22] font-black uppercase tracking-[0.4em] text-xs">Trajectory</p>
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">Career <span className="text-zinc-200 dark:text-zinc-800">Arc</span></h2>
            <div className="w-24 h-1 bg-[#bc1a22] mx-auto rounded-full mt-8" />
          </div>
          <div className="space-y-32">
            {experience.map((job, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_2.5fr] gap-16 relative">
                {/* Vertical Line for Timeline */}
                {i !== experience.length - 1 && (
                  <div className="absolute top-24 left-6 w-px h-[calc(100%+8rem)] bg-zinc-100 dark:bg-zinc-900 hidden md:block" />
                )}
                
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 bg-white dark:bg-[#0f0f0f] border border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#bc1a22]/50 group-hover:shadow-lg group-hover:shadow-[#bc1a22]/10 transition-all duration-500">
                     <Play className={`w-4 h-4 text-[#bc1a22] ${i === 0 ? 'fill-[#bc1a22] animate-pulse' : ''}`} />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#bc1a22]">{job.period}</p>
                  <h3 className="text-4xl font-black uppercase tracking-tight leading-none group-hover:text-[#bc1a22] transition-colors">{job.company}</h3>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] italic">{job.location}</p>
                </div>
                
                <div className="space-y-10 bg-zinc-50/50 dark:bg-zinc-900/30 p-10 md:p-14 rounded-[3.5rem] border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 hover:shadow-2xl">
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">{job.role}</h4>
                  <div className="grid gap-6">
                    {job.highlights.slice(0, 3).map((item, j) => (
                      <div key={j} className="flex gap-6 text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-medium group/item">
                        <div className="w-6 h-6 rounded-lg bg-[#bc1a22]/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#bc1a22] group-hover/item:text-white transition-colors duration-300">
                          <span className="text-[10px] font-black leading-none">{j+1}</span>
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

      {/* Insights Section: Vibrant Cards */}
      <section className="py-40 px-8 relative overflow-hidden">
        {/* Soft Background Accent */}
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[#bc1a22]/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="flex items-end justify-between border-b-4 border-zinc-100 dark:border-zinc-900 pb-12">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Insights <span className="text-zinc-200 dark:text-zinc-800">&</span> Ideas</h2>
            <Link href="/articles" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#bc1a22]">
              Explore Writing <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block space-y-8">
                <div className="aspect-[16/10] bg-[#f4f4f0] dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all group-hover:shadow-[0_48px_96px_-24px_rgba(188,26,34,0.12)] relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#bc1a22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                      <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-800">
                        <ArrowUpRight className="w-6 h-6 text-[#bc1a22]" />
                      </div>
                   </div>
                </div>
                <div className="space-y-4 px-4">
                  <time className="text-[10px] font-black text-[#bc1a22] opacity-60 uppercase tracking-[0.3em]">{article.date}</time>
                  <h3 className="text-2xl font-black group-hover:text-[#bc1a22] transition-colors leading-tight uppercase tracking-tight">{article.title}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 font-medium italic leading-relaxed">&ldquo;{article.excerpt}&rdquo;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Vibrant & Structured */}
      <footer className="py-40 px-8 border-t border-zinc-100 dark:border-zinc-900 bg-[#fdfdfc] dark:bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#bc1a22]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-32 relative z-10">
          <div className="space-y-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Collaborate</h2>
            <div className="grid gap-10">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 text-6xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all">
                LinkedIn <ArrowUpRight className="w-10 h-10 text-zinc-200 dark:text-zinc-800 group-hover:text-[#bc1a22] transition-colors" />
              </a>
              <a href={`mailto:${email}`} className="group flex items-center gap-6 text-6xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all">
                Email <Mail className="w-10 h-10 text-zinc-200 dark:text-zinc-800 group-hover:text-[#bc1a22] transition-colors" />
              </a>
            </div>
          </div>
          <div className="space-y-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Foundation</h2>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-8 group">
                   <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-800 group-hover:border-[#bc1a22]/30 group-hover:shadow-lg transition-all duration-500">
                      <GraduationCap className="w-6 h-6 text-[#bc1a22]" />
                   </div>
                   <div className="space-y-2">
                    <p className="text-[10px] font-black text-[#bc1a22] uppercase tracking-[0.2em]">{edu.period}</p>
                    <h4 className="text-2xl font-black uppercase leading-tight tracking-tight">{edu.school}</h4>
                    <p className="text-zinc-500 font-bold text-sm italic">{edu.degree}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Awards Bar */}
        <div className="max-w-6xl mx-auto mt-40 pt-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden">
           <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 shrink-0">
                   <Award className="w-3.5 h-3.5 text-[#bc1a22]" /> {award}
                </div>
              ))}
           </div>
        </div>

        <div className="max-w-6xl mx-auto pt-40 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 dark:text-zinc-800">
           <p>© {new Date().getFullYear()} {name}</p>
           <div className="flex gap-10">
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Velocity</span>
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Effectiveness</span>
             <span className="hover:text-[#bc1a22] transition-colors cursor-default">Craftsmanship</span>
           </div>
        </div>
      </footer>
    </main>
  );
}

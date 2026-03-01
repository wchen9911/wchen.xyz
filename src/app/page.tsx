import Link from "next/link";
import { portfolioData } from "./data";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  return (
    <main className="min-h-screen bg-[#fdfdfc] dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#fdfdfc] font-sans selection:bg-[#bc1a22] selection:text-white transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfdfc]/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-7 bg-[#bc1a22] rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
            </div>
            <span className="font-black tracking-tighter text-2xl uppercase italic">{name}</span>
          </Link>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            <Link href="/articles" className="hover:text-[#bc1a22] transition-colors">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1a22] transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="text-[#bc1a22] hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Refined & Elegant */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#bc1a22]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
          <div className="space-y-12 relative z-10">
            <div className="space-y-4">
              <p className="text-[#bc1a22] font-black uppercase tracking-[0.4em] text-xs animate-in fade-in slide-in-from-bottom-4 duration-700">Engineering Leadership</p>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Velocity <br /> <span className="text-zinc-200 dark:text-zinc-800">&</span> Craft.
              </h1>
            </div>
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-zinc-500 dark:text-zinc-400">
                {title} @ <span className="text-[#bc1a22]">YouTube</span>. 
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 text-lg leading-relaxed italic border-l-4 border-[#bc1a22]/30 dark:border-[#bc1a22]/50 pl-6 py-2">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end relative z-10 animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="absolute -inset-8 bg-[#bc1a22]/5 blur-3xl rounded-full" />
              <div className="relative w-80 h-[28rem] rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 p-10 flex flex-col justify-between overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-none">
                 <div className="w-12 h-1 bg-[#bc1a22]/20 rounded-full" />
                 <div className="space-y-6">
                   <div className="w-full h-32 bg-[#bc1a22]/5 dark:bg-[#bc1a22]/10 rounded-[2rem] flex items-center justify-center">
                      <div className="w-12 h-8 bg-[#bc1a22] rounded-lg flex items-center justify-center">
                         <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
                      </div>
                   </div>
                   <div className="space-y-3">
                     <div className="w-3/4 h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                     <div className="w-1/2 h-3 bg-zinc-50 dark:bg-zinc-900 rounded-full" />
                   </div>
                 </div>
                 <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Focus Area</p>
                    <p className="text-xl font-black leading-tight">Scaling DevEx for the Next Billion Users.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars: Softer Tone */}
      <section className="py-32 px-8 bg-[#f4f4f0] dark:bg-[#1a1a1a]/40 rounded-[4rem] mx-4">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The <span className="text-[#bc1a22]">Philosophy</span></h2>
            <p className="max-w-md text-zinc-500 font-medium">Four pillars that define how I build organizations and elevate engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-12 rounded-[2.5rem] bg-white dark:bg-[#0f0f0f] border border-zinc-200/50 dark:border-zinc-800 hover:border-[#bc1a22]/30 transition-all hover:shadow-[0_24px_48px_-12px_rgba(188,26,34,0.08)]">
                <span className="text-xs font-black text-[#bc1a22] opacity-40 uppercase tracking-widest">Pillar 0{i+1}</span>
                <h3 className="text-2xl font-black mt-6 mb-4 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Arc: Light Mode Version */}
      <section className="py-40 px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="space-y-6">
            <p className="text-[#bc1a22] font-black uppercase tracking-[0.4em] text-xs">Trajectory</p>
            <h2 className="text-6xl font-black uppercase tracking-tighter">Career <span className="text-zinc-200 dark:text-zinc-800">Arc</span></h2>
            <p className="max-w-xl text-zinc-500 text-lg font-medium italic leading-relaxed border-l-4 border-zinc-100 dark:border-zinc-800 pl-8">Scaling infrastructure and engineering effectiveness across the world's most innovative tech companies.</p>
          </div>
          <div className="space-y-24">
            {experience.map((job, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_2.5fr] gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-16">
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#bc1a22]">{job.period}</p>
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{job.company}</h3>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] italic">{job.location}</p>
                </div>
                <div className="space-y-8">
                  <h4 className="text-2xl font-black uppercase tracking-tight">{job.role}</h4>
                  <div className="grid gap-4">
                    {job.highlights.slice(0, 3).map((item, j) => (
                      <div key={j} className="flex gap-4 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bc1a22]/30 mt-1.5 shrink-0" />
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

      {/* Insights Section */}
      <section className="py-40 px-8 bg-[#fdfdfc] dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-end justify-between border-b-4 border-zinc-50 dark:border-zinc-900 pb-12">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Insights <span className="text-zinc-200 dark:text-zinc-800">&</span> Ideas</h2>
            <Link href="/articles" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bc1a22] hover:opacity-70 transition-opacity">All Articles →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block space-y-6">
                <div className="aspect-[16/10] bg-[#f4f4f0] dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]">
                   <div className="absolute inset-0 bg-[#bc1a22]/0 group-hover:bg-[#bc1a22]/5 transition-colors duration-500" />
                </div>
                <div className="space-y-3 px-2">
                  <time className="text-[10px] font-black text-[#bc1a22] opacity-60 uppercase tracking-widest">{article.date}</time>
                  <h3 className="text-2xl font-black group-hover:text-[#bc1a22] transition-colors leading-tight uppercase tracking-tight">{article.title}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 font-medium italic">&ldquo;{article.excerpt}&rdquo;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-32 px-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-32">
          <div className="space-y-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Collaborate</h2>
            <div className="grid gap-8">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-6xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all hover:translate-x-4 inline-block">LinkedIn</a>
              <a href={`mailto:${email}`} className="text-6xl font-black uppercase tracking-tighter hover:text-[#bc1a22] transition-all hover:translate-x-4 inline-block">Email</a>
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Foundation</h2>
            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-black text-[#bc1a22] uppercase tracking-[0.2em]">{edu.period}</p>
                  <h4 className="text-2xl font-black uppercase leading-tight tracking-tight">{edu.school}</h4>
                  <p className="text-zinc-500 font-bold text-sm italic">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-40 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 dark:text-zinc-800">
           <p>© {new Date().getFullYear()} {name}</p>
           <div className="flex gap-8">
             <span>Velocity</span>
             <span>Effectiveness</span>
             <span>Craftsmanship</span>
           </div>
        </div>
      </footer>
    </main>
  );
}

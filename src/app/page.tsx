import Link from "next/link";
import { portfolioData } from "./data";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] text-[#0f0f0f] dark:text-white font-sans selection:bg-[#ff0000] selection:text-white transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-7 bg-[#ff0000] rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
            </div>
            <span className="font-black tracking-tighter text-2xl uppercase italic">{name}</span>
          </Link>
          <div className="flex gap-12 text-xs font-black uppercase tracking-[0.2em]">
            <Link href="/articles" className="hover:text-[#ff0000] transition-colors">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff0000] transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="text-[#ff0000] hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Artistic & Bold */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff0000]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#ff0000]/10 blur-[100px] rounded-full" />
        
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
          <div className="space-y-12 relative z-10">
            <div className="space-y-4">
              <p className="text-[#ff0000] font-black uppercase tracking-[0.4em] text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">Engineering Leadership</p>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Velocity <br /> <span className="text-zinc-200 dark:text-zinc-800">&</span> Craft.
              </h1>
            </div>
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-zinc-500 dark:text-zinc-400">
                {title} @ <span className="text-[#ff0000]">YouTube</span>. 
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 text-lg leading-relaxed italic border-l-4 border-[#ff0000] pl-6 py-2">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end relative z-10 animate-in fade-in zoom-in duration-1000 delay-600">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff0000] to-transparent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <div className="relative w-80 h-[28rem] rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                 <div className="w-12 h-1 bg-[#ff0000] rounded-full" />
                 <div className="space-y-4">
                   <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-800 rounded-2xl animate-pulse" />
                   <div className="w-3/4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                   <div className="w-1/2 h-4 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Current Focus</p>
                    <p className="text-lg font-bold">Scaling DevEx for billions of users.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars: Artistic Feature Tiles */}
      <section className="py-32 px-8 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The <span className="text-[#ff0000]">Philosophy</span></h2>
            <p className="max-w-md text-zinc-500 font-medium">Four pillars that define how I build organizations and elevate engineering culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-10 rounded-[2rem] bg-white dark:bg-[#0f0f0f] border border-zinc-200 dark:border-zinc-800 hover:border-[#ff0000] transition-all hover:shadow-2xl hover:-translate-y-2">
                <span className="text-5xl font-black text-zinc-100 dark:text-zinc-900 group-hover:text-[#ff0000]/10 transition-colors">0{i+1}</span>
                <h3 className="text-2xl font-black mt-4 mb-3 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Writing: Horizontal Scroll-like grid */}
      <section className="py-40 px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-end justify-between border-b-4 border-zinc-100 dark:border-zinc-900 pb-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Insights <span className="text-zinc-300 dark:text-zinc-800">&</span> Ideas</h2>
            <Link href="/articles" className="text-sm font-black uppercase tracking-widest text-[#ff0000] hover:underline underline-offset-8">Explore All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group space-y-6">
                <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 group-hover:border-[#ff0000] transition-all relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute top-6 left-6 px-3 py-1 bg-white dark:bg-black rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-200 dark:border-zinc-800">{article.date}</div>
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="text-2xl font-black group-hover:text-[#ff0000] transition-colors leading-tight uppercase tracking-tight">{article.title}</h3>
                  <p className="text-zinc-500 text-sm line-clamp-2 font-medium">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Career Arc: Minimalist Timeline */}
      <section className="py-40 px-8 bg-[#ff0000] text-white rounded-[4rem] mx-4 mb-4">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="space-y-4">
            <h2 className="text-6xl font-black uppercase tracking-tighter">Career <br /> Progression</h2>
            <p className="max-w-xl text-white/70 text-lg font-medium italic leading-relaxed">Scaling infrastructure and engineering effectiveness across the world's most innovative tech companies.</p>
          </div>
          <div className="space-y-20">
            {experience.map((job, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/20 pt-12 hover:border-white transition-colors">
                <div className="space-y-2">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">{job.period}</p>
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{job.company}</h3>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-xs italic">{job.location}</p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold uppercase">{job.role}</h4>
                  <div className="grid gap-3">
                    {job.highlights.slice(0, 2).map((item, j) => (
                      <div key={j} className="flex gap-4 text-white/80 text-sm leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
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

      {/* Footer Info */}
      <footer className="py-32 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-32">
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Connect</h2>
            <div className="grid gap-6">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-5xl font-black uppercase tracking-tighter hover:text-[#ff0000] transition-colors leading-none">LinkedIn</a>
              <a href={`mailto:${email}`} className="text-5xl font-black uppercase tracking-tighter hover:text-[#ff0000] transition-colors leading-none">Email</a>
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Roots</h2>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-black text-[#ff0000] uppercase tracking-widest">{edu.period}</p>
                  <h4 className="text-xl font-black uppercase leading-tight">{edu.school}</h4>
                  <p className="text-zinc-500 font-bold text-sm italic">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-40 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 dark:text-zinc-800">
           <p>© {new Date().getFullYear()} {name}</p>
           <p>Built for Velocity & Craft</p>
        </div>
      </footer>
    </main>
  );
}

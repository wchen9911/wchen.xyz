import Link from "next/link";
import { portfolioData } from "./data";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] text-[#0f0f0f] dark:text-white font-sans selection:bg-[#ff0000] selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-6 bg-[#ff0000] rounded-md flex items-center justify-center">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
            </div>
            <span className="font-bold tracking-tight text-xl">{name}</span>
          </Link>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/articles" className="hover:text-[#ff0000] transition-colors">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff0000] transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Crafting <span className="text-[#ff0000]">Velocity</span>.
              </h1>
              <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                {title} at <span className="text-[#ff0000] font-bold">YouTube</span>.
              </p>
            </div>
            <p className="text-lg text-zinc-500 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 leading-relaxed">
              &ldquo;{tagline}&rdquo;
            </p>
            <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
              <Link href="/articles" className="bg-[#ff0000] hover:bg-[#cc0000] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">Read Articles</Link>
              <a href={`mailto:${email}`} className="bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-8 py-3 rounded-full font-bold transition-all">Contact Me</a>
            </div>
          </div>
          <div className="hidden md:block relative animate-in fade-in zoom-in duration-1000 delay-800">
             <div className="aspect-square bg-gradient-to-br from-[#ff0000]/20 to-transparent rounded-3xl border border-[#ff0000]/10 flex items-center justify-center">
                <div className="w-24 h-16 bg-[#ff0000] rounded-xl flex items-center justify-center shadow-2xl shadow-[#ff0000]/40">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-32 pb-32">
        {/* Experience Section */}
        <section className="space-y-12">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Experience</h2>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="group relative grid md:grid-cols-[1fr_3fr] gap-8 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800">
                <div>
                  <p className="text-sm font-bold text-[#ff0000] mb-1">{job.period}</p>
                  <h3 className="text-xl font-bold">{job.company}</h3>
                  <p className="text-zinc-500 text-sm">{job.location}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">{job.role}</h4>
                  <ul className="space-y-2">
                    {job.highlights.map((item, j) => (
                      <li key={j} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        <span className="text-[#ff0000]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Writing */}
        <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900/30 -mx-6 px-6 py-24 rounded-[3rem]">
          <div className="max-w-5xl mx-auto w-full space-y-12">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Latest Writing</h2>
              <Link href="/articles" className="text-sm font-bold text-[#ff0000] hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group space-y-4 bg-white dark:bg-[#0f0f0f] p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
                  <time className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{article.date}</time>
                  <h3 className="text-lg font-bold group-hover:text-[#ff0000] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-sm text-zinc-500 line-clamp-3">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Education */}
        <footer className="grid md:grid-cols-2 gap-24 pt-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Skills</h2>
            <div className="space-y-6">
               <div>
                 <p className="text-xs font-bold text-zinc-400 uppercase mb-3">Leadership</p>
                 <div className="flex flex-wrap gap-2">
                    {skills.leadership.map((s, i) => <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold">{s}</span>)}
                 </div>
               </div>
               <div>
                 <p className="text-xs font-bold text-zinc-400 uppercase mb-3">Infrastructure</p>
                 <div className="flex flex-wrap gap-2">
                    {skills.infrastructure.map((s, i) => <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold">{s}</span>)}
                 </div>
               </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Education</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-bold">{edu.school}</h4>
                  <p className="text-sm text-zinc-500">{edu.degree}</p>
                  <p className="text-xs font-bold text-[#ff0000] mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

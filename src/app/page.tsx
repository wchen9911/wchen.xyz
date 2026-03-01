import Link from "next/link";
import { portfolioData } from "./data";

export default function Home() {
  const { name, title, tagline, summary, pillars, experience, skills, education, awards, linkedin, email, articles } = portfolioData;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-800 selection:text-zinc-100">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,1)_0%,rgba(9,9,11,1)_100%)]" />
        <div className="relative z-10 max-w-4xl text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-100 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            {title}
          </p>
          <div className="h-px w-24 bg-zinc-800 mx-auto animate-in fade-in zoom-in duration-1000 delay-500" />
          <p className="text-zinc-500 italic max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            &ldquo;{tagline}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000">
            <Link href="/articles" className="text-zinc-100 hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm font-semibold border-b border-zinc-700 pb-1">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-widest text-sm font-semibold">LinkedIn</a>
            <a href={`mailto:${email}`} className="text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-widest text-sm font-semibold">Contact</a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-32 pb-32">
        {/* Summary & Pillars */}
        <section className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Executive Summary</h2>
              <div className="space-y-4">
                {summary.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-zinc-400">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group">
                  <h3 className="text-zinc-100 font-bold mb-2 group-hover:text-zinc-100 transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-zinc-900 pb-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Latest Writing</h2>
            <Link href="/articles" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">View All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group space-y-4">
                <time className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{article.date}</time>
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-zinc-400 transition-colors leading-snug">{article.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Professional Experience</h2>
          <div className="space-y-24">
            {experience.map((job, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_2.5fr] gap-8">
                <div className="space-y-1">
                  <p className="text-sm font-mono text-zinc-600 tracking-tighter uppercase">{job.period}</p>
                  <h3 className="text-xl font-bold text-zinc-100">{job.company}</h3>
                  <p className="text-zinc-500 text-sm">{job.location}</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-200 mb-2">{job.role}</h4>
                    <p className="text-zinc-400 leading-relaxed italic">{job.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {job.highlights.map((item, j) => (
                      <li key={j} className="flex gap-4 text-zinc-500">
                        <span className="text-zinc-700 font-mono">—</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="grid md:grid-cols-3 gap-12 pt-16 border-t border-zinc-900">
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Leadership</h3>
            <div className="flex flex-wrap gap-2">
              {skills.leadership.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">{skill}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {skills.infrastructure.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">{skill}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.development.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer info: Education & Awards */}
        <footer className="grid md:grid-cols-2 gap-16 pt-32 text-sm border-t border-zinc-900">
          <div className="space-y-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase">Honors & Awards</h2>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <p key={i} className="text-zinc-500">{award}</p>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase">Education</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-zinc-300 font-bold">{edu.school}</h4>
                  <p className="text-zinc-500">{edu.degree}</p>
                  <p className="text-zinc-600 text-xs font-mono">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

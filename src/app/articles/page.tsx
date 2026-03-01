import Link from "next/link";
import { portfolioData } from "../data";

export default function ArticlesPage() {
  const { name, linkedin } = portfolioData;

  return (
    <main className="min-h-screen bg-[#fdfdfc] dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#fdfdfc] font-sans selection:bg-[#bc1a22] selection:text-white transition-colors duration-300">
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
            <Link href="/articles" className="text-[#bc1a22]">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1a22] transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto pt-32 px-6 pb-24 space-y-16">
        <header className="space-y-4">
          <Link href="/" className="text-zinc-400 hover:text-[#bc1a22] transition-colors text-[10px] font-black uppercase tracking-[0.3em]">← Back to Home</Link>
          <h1 className="text-5xl font-black uppercase tracking-tighter">Articles</h1>
          <p className="text-zinc-500 text-lg italic leading-relaxed border-l-4 border-zinc-100 dark:border-zinc-800 pl-8">Thoughts on leadership, developer experience, and the craft of engineering management.</p>
        </header>

        <div className="space-y-8">
          {portfolioData.articles.map((article) => (
            <article key={article.slug} className="group relative flex flex-col items-start bg-[#f4f4f0]/50 dark:bg-zinc-900/30 p-10 rounded-[2.5rem] border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all hover:shadow-xl">
              <time className="mb-4 text-[10px] font-black text-[#bc1a22] opacity-60 uppercase tracking-[0.2em]">
                {article.date}
              </time>
              <h2 className="text-3xl font-black group-hover:text-[#bc1a22] transition-colors leading-tight uppercase tracking-tight">
                <Link href={`/articles/${article.slug}`}>
                  <span className="absolute inset-0 z-20 rounded-[2.5rem]" />
                  <span className="relative z-10">{article.title}</span>
                </Link>
              </h2>
              <p className="relative z-10 mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm font-medium">
                {article.excerpt}
              </p>
              <div className="relative z-10 mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-[#bc1a22] transition-colors">
                Read full article <span className="ml-2">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

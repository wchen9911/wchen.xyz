import Link from "next/link";
import { portfolioData } from "../data";

export default function ArticlesPage() {
  const { name, linkedin } = portfolioData;

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
            <Link href="/articles" className="text-[#ff0000]">Articles</Link>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff0000] transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto pt-32 px-6 pb-24 space-y-16">
        <header className="space-y-4">
          <Link href="/" className="text-zinc-500 hover:text-[#ff0000] transition-colors text-xs font-bold uppercase tracking-widest">← Back to Home</Link>
          <h1 className="text-5xl font-extrabold tracking-tight">Articles</h1>
          <p className="text-zinc-500 text-lg italic leading-relaxed">Thoughts on leadership, developer experience, and the craft of engineering management.</p>
        </header>

        <div className="space-y-12">
          {portfolioData.articles.map((article) => (
            <article key={article.slug} className="group relative flex flex-col items-start bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-3xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all hover:shadow-xl">
              <time className="mb-3 text-xs font-bold text-[#ff0000] uppercase tracking-widest">
                {article.date}
              </time>
              <h2 className="text-2xl font-bold group-hover:text-[#ff0000] transition-colors leading-tight">
                <Link href={`/articles/${article.slug}`}>
                  <span className="absolute inset-0 z-20 rounded-3xl" />
                  <span className="relative z-10">{article.title}</span>
                </Link>
              </h2>
              <p className="relative z-10 mt-3 text-zinc-500 leading-relaxed text-sm">
                {article.excerpt}
              </p>
              <div className="relative z-10 mt-6 flex items-center text-sm font-bold text-zinc-400 group-hover:text-[#ff0000] transition-colors">
                Read article <span className="ml-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

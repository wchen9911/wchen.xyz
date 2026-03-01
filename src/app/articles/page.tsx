import Link from "next/link";
import { portfolioData } from "../data";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-800 selection:text-zinc-100 p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-16">
        <header className="space-y-4">
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-mono tracking-tighter uppercase">← Back to Home</Link>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-100">Articles</h1>
          <p className="text-zinc-400 text-lg italic">Thoughts on leadership, developer experience, and the craft of engineering management.</p>
        </header>

        <div className="space-y-12">
          {portfolioData.articles.map((article) => (
            <article key={article.slug} className="group relative flex flex-col items-start">
              <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-zinc-300 transition-colors">
                <Link href={`/articles/${article.slug}`}>
                  <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{article.title}</span>
                </Link>
              </h2>
              <time className="relative z-10 order-first mb-3 flex items-center text-sm font-mono text-zinc-600 tracking-tighter uppercase">
                {article.date}
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-500 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="relative z-10 mt-4 flex items-center text-sm font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors">
                Read article <span className="ml-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

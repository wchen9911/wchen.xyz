import Link from "next/link";
import { portfolioData } from "../../data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return portfolioData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = portfolioData.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-800 selection:text-zinc-100 p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-4">
          <Link href="/articles" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-mono tracking-tighter uppercase">← All Articles</Link>
          <time className="block text-sm font-mono text-zinc-600 tracking-tighter uppercase">{article.date}</time>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
            {article.title}
          </h1>
        </header>

        <article className="prose prose-invert prose-zinc max-w-none">
          {/* A simple markdown renderer would be better, but for now we'll map common patterns */}
          <div className="space-y-8 text-lg leading-relaxed text-zinc-400 whitespace-pre-wrap">
            {article.content.split('

').map((block, i) => {
              if (block.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold text-zinc-100 mt-12">{block.replace('# ', '')}</h1>;
              if (block.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-zinc-100 mt-10">{block.replace('## ', '')}</h2>;
              if (block.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-zinc-100 mt-8">{block.replace('### ', '')}</h3>;
              if (block.startsWith('> ')) return <blockquote key={i} className="border-l-2 border-zinc-700 pl-6 italic text-zinc-500 my-8">{block.replace('> ', '')}</blockquote>;
              if (block.startsWith('- ')) return (
                <ul key={i} className="space-y-2 list-disc list-inside">
                  {block.split('
').map((li, j) => <li key={j}>{li.replace('- ', '')}</li>)}
                </ul>
              );
              return <p key={i}>{block}</p>;
            })}
          </div>
        </article>

        <footer className="pt-12 border-t border-zinc-900 mt-24">
          <Link href="/articles" className="text-zinc-400 hover:text-zinc-100 transition-colors font-semibold">
            ← View more articles
          </Link>
        </footer>
      </div>
    </main>
  );
}

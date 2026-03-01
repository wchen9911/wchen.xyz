import Link from "next/link";
import { portfolioData } from "../../data";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({...props}) => <h1 {...props} className="text-3xl font-bold text-zinc-100 mt-12 mb-6" />,
              h2: ({...props}) => <h2 {...props} className="text-2xl font-bold text-zinc-100 mt-10 mb-4" />,
              h3: ({...props}) => <h3 {...props} className="text-xl font-bold text-zinc-100 mt-8 mb-4" />,
              p: ({...props}) => <p {...props} className="text-lg leading-relaxed text-zinc-400 mb-6" />,
              ul: ({...props}) => <ul {...props} className="list-disc list-outside ml-6 mb-6 space-y-2 text-zinc-400" />,
              ol: ({...props}) => <ol {...props} className="list-decimal list-outside ml-6 mb-6 space-y-2 text-zinc-400" />,
              li: ({...props}) => <li {...props} className="leading-relaxed" />,
              blockquote: ({...props}) => <blockquote {...props} className="border-l-2 border-zinc-700 pl-6 italic text-zinc-500 my-8" />,
              a: ({...props}) => <a {...props} className="text-zinc-100 hover:text-zinc-400 underline transition-colors" />,
              code: ({...props}) => <code {...props} className="bg-zinc-900 rounded px-1 text-zinc-200 font-mono text-sm" />,
            }}
          >
            {article.content}
          </ReactMarkdown>
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

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

      <div className="max-w-3xl mx-auto pt-32 px-6 pb-24 space-y-12">
        <header className="space-y-6">
          <Link href="/articles" className="text-zinc-500 hover:text-[#ff0000] transition-colors text-xs font-bold uppercase tracking-widest">← All Articles</Link>
          <div className="space-y-2">
            <time className="text-xs font-bold text-[#ff0000] uppercase tracking-widest">{article.date}</time>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>
        </header>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({...props}) => <h1 {...props} className="text-3xl font-extrabold text-[#ff0000] mt-12 mb-6" />,
              h2: ({...props}) => <h2 {...props} className="text-2xl font-bold mt-10 mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2" />,
              h3: ({...props}) => <h3 {...props} className="text-xl font-bold mt-8 mb-4" />,
              p: ({...props}) => <p {...props} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6" />,
              ul: ({...props}) => <ul {...props} className="list-disc list-outside ml-6 mb-6 space-y-2 text-zinc-600 dark:text-zinc-400" />,
              ol: ({...props}) => <ol {...props} className="list-decimal list-outside ml-6 mb-6 space-y-2 text-zinc-600 dark:text-zinc-400" />,
              li: ({...props}) => <li {...props} className="leading-relaxed" />,
              blockquote: ({...props}) => <blockquote {...props} className="border-l-4 border-[#ff0000] pl-6 italic text-zinc-500 bg-zinc-50 dark:bg-zinc-900/50 py-4 pr-4 rounded-r-xl my-8" />,
              a: ({...props}) => <a {...props} className="text-[#ff0000] hover:underline font-bold transition-colors" />,
              code: ({...props}) => <code {...props} className="bg-zinc-100 dark:bg-zinc-800 rounded px-1.5 py-0.5 text-[#ff0000] font-mono text-sm" />,
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 mt-24">
          <Link href="/articles" className="bg-[#ff0000] hover:bg-[#cc0000] text-white px-8 py-3 rounded-full font-bold transition-all inline-block">
            Explore More Articles
          </Link>
        </footer>
      </div>
    </main>
  );
}

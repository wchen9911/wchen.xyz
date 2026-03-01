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

      <div className="max-w-3xl mx-auto pt-32 px-6 pb-24 space-y-12">
        <header className="space-y-8">
          <Link href="/articles" className="text-zinc-400 hover:text-[#bc1a22] transition-colors text-[10px] font-black uppercase tracking-[0.3em]">← All Articles</Link>
          <div className="space-y-4">
            <time className="text-xs font-black text-[#bc1a22] opacity-60 uppercase tracking-widest">{article.date}</time>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>
        </header>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({...props}) => <h1 {...props} className="text-3xl font-black uppercase tracking-tight text-[#bc1a22] mt-16 mb-8 border-b border-zinc-100 dark:border-zinc-900 pb-4" />,
              h2: ({...props}) => <h2 {...props} className="text-2xl font-black uppercase tracking-tight mt-12 mb-6" />,
              h3: ({...props}) => <h3 {...props} className="text-xl font-bold mt-10 mb-4" />,
              p: ({...props}) => <p {...props} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 font-medium" />,
              ul: ({...props}) => <ul {...props} className="list-disc list-outside ml-6 mb-8 space-y-3 text-zinc-600 dark:text-zinc-400 font-medium" />,
              ol: ({...props}) => <ol {...props} className="list-decimal list-outside ml-6 mb-8 space-y-3 text-zinc-600 dark:text-zinc-400 font-medium" />,
              li: ({...props}) => <li {...props} className="leading-relaxed" />,
              blockquote: ({...props}) => <blockquote {...props} className="border-l-4 border-[#bc1a22]/30 pl-8 italic text-zinc-500 bg-[#f4f4f0]/50 dark:bg-zinc-900/50 py-8 pr-8 rounded-r-[2rem] my-12" />,
              a: ({...props}) => <a {...props} className="text-[#bc1a22] hover:opacity-70 font-bold transition-opacity" />,
              code: ({...props}) => <code {...props} className="bg-[#f4f4f0] dark:bg-zinc-800 rounded-lg px-2 py-1 text-[#bc1a22] font-mono text-sm" />,
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        <footer className="pt-20 border-t border-zinc-100 dark:border-zinc-900 mt-24">
          <Link href="/articles" className="bg-[#bc1a22] hover:opacity-90 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all inline-block shadow-lg shadow-[#bc1a22]/20">
            Keep Exploring Articles
          </Link>
        </footer>
      </div>
    </main>
  );
}

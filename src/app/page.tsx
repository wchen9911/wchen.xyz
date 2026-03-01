export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-zinc-200 to-zinc-600 bg-clip-text text-transparent">
          Hi, I&apos;m Wchen.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400">
          I&apos;m a software engineer building elegant and functional web experiences.
          Welcome to my personal slice of the internet.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="https://github.com/wchen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-100 text-zinc-950 px-6 py-3 font-medium hover:bg-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@wchen.xyz"
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}

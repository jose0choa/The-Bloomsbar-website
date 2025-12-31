export default function Footer() {
    return (
      <footer className="w-full border-t border-neutral-200 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} The Blooms Bar
          </p>

          <p className="text-xs text-neutral-400 tracking-wide">
            Based in Kerman, CA • Serving the Central Valley
          </p>
  
          <a
            href="https://instagram.com/_thebloomsbar_"
            target="_blank"
            className="text-sm text-neutral-500 hover:text-neutral-700 transition"
          >
            Instagram
          </a>
        </div>
      </footer>
    );
  }
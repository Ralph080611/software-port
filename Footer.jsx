export function Footer() {
  return (
    <footer className="ln relative z-[1] border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="mono mute text-xs">&copy; {new Date().getFullYear()} Ralph Andrei D. Galate</p>
        <a href="#home" className="ul mono text-xs">Back to top ↑</a>
      </div>
    </footer>
  );
}

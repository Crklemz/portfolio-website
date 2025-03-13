export default function Navbar() {
    return (
      <nav className="bg-[var(--background)] text-[var(--foreground)] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/projects" className="hover:text-accent">Projects</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
export default function Footer() {
    return (
      <footer className="bg-[var(--background)] text-[var(--foreground)] p-4 mt-10 text-center">
        <p>&copy; {new Date().getFullYear()} Chris Klemz. All rights reserved.</p>
      </footer>
    );
  }
  
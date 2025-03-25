export default function Contact() {
  return (
    <div className="max-w-md mx-auto bg-[var(--background)] text-[var(--foreground)] p-6 rounded-md shadow-lg mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            className="w-full border border-[var(--secondary)] p-2 rounded-md bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
          />
        </div>
        <div>
          <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-[var(--secondary)] p-2 rounded-md bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
          />
        </div>
        <div>
          <label className="block text-[var(--foreground)] text-sm font-bold mb-2">Message</label>
          <textarea
            className="w-full border border-[var(--secondary)] p-2 rounded-md bg-white/10 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
            rows={4}
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}

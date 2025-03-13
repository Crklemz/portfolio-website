import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! Looks like you’re lost.</p>
      <p className="text-md text-gray-500 mt-2">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <a href="/" className="btn-primary">Go Home</a>
      </div>
      <div className="mt-10">
        <Image src="/404-illustration.svg" alt="Lost astronaut" width={300} height={300} />
      </div>
    </div>
  );
}

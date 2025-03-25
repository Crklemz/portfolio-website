import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] px-6">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-base text-[var(--secondary)] mt-2">The page you're looking for doesn't exist.</p>
            <div className="mt-6">
                <Link href="/" className="btn-primary">Go Home</Link>
            </div>
            <div className="mt-10">
                <Image src="/404-illustration.svg" alt="Lost astronaut" width={300} height={300} />
            </div>
        </div>
    );
}

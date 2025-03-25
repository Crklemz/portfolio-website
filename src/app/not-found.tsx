import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Oops! Looks like you're lost.</p>
            <p className={styles.description}>The page you're looking for doesn't exist.</p>
            <div className={styles.buttonContainer}>
                <Link href="/" className="btn-primary">Go Home</Link>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/404-illustration.svg" alt="Lost astronaut" width={300} height={300} />
            </div>
        </div>
    );
}

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--tw-bg-dark)] text-white px-6">
      <h1 className="text-5xl font-bold">Hi, I'm Chris!</h1>
      <p className="text-lg mt-4">
        Full-Stack Developer | AI Enthusiast | Cloud Engineer
      </p>
      <Button text="View My Work" variant="primary" />
    </div>
  );
}

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            {children}
        </div>
    );
}
  
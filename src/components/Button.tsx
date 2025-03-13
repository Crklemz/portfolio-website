interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
  }
  
  export default function Button({ text, variant = "primary" }: ButtonProps) {
    return (
      <button className={`btn-${variant}`}>
        {text}
      </button>
    );
  }
  
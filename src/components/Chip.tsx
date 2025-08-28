interface ChipProps {
  label: string;
  variant?: "default" | "primary";
  className?: string;
}

export default function Chip({ label, variant = "default", className = "" }: ChipProps) {
  const baseClasses = "inline-flex items-center text-sm md:text-base rounded-full px-3 py-1 mr-2 mb-2 transition-colors";
  const variantClasses = {
    default: "border border-gray-300 hover:bg-gray-50",
    primary: "bg-gray-900 text-white hover:bg-gray-800",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </span>
  );
}

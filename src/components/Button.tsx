interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean;
}

export const Button = ({
  variant = "primary",
  rounded = false,
  children,
}: ButtonProps) => {
  let className =
    "bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  // Estilo outline
  if (variant === "outline") {
    className =
      "bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
  } else if (variant === "destructive") {
    className =
      "bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  // Borde redondeado (completamente redondo si rounded está activado)
  if (rounded) {
    className += " rounded-full";
  } else {
    className += " rounded-md";
  }

  // Estilo primario (por defecto)
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

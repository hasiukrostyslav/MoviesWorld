interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'outline' | 'transparent';
  className?: string;
}

const buttonColors = {
  primary:
    'border-blue-600 bg-blue-600 text-slate-100 hover:border-blue-700 hover:bg-blue-700',
  secondary: '',
  outline: 'border-slate-300 hover:border-slate-100 hover:text-slate-100',
  transparent: 'border-0 text-blue-500 font-semibold hover:bg-blue-100',
};

function Button({ children, color, className }: ButtonProps) {
  return (
    <button
      className={`rounded-lg border px-4 py-2 text-sm transition-all duration-500 ${buttonColors[color]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

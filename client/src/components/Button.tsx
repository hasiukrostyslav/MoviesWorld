interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'transparent';
}

const buttonColors = {
  primary:
    'border-blue-600 bg-blue-600 text-slate-100 hover:border-blue-700 hover:bg-blue-700',
  secondary: '',
  transparent: 'border-slate-300 hover:border-slate-100 hover:text-slate-100',
};

function Button({ children, color }: ButtonProps) {
  return (
    <button
      className={`rounded-lg border px-4 py-2 text-sm transition-all duration-200 ${buttonColors[color]}`}
    >
      {children}
    </button>
  );
}

export default Button;

import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-[#31B099] hover:bg-[#349684] text-white rounded-lg py-3 px-5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import Label from './label';

import { cn } from '@/utils/cn';

type TextFieldProps = {
  id: string;
  label?: string;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}: TextFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className={cn(
          'block w-full h-12 appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 focus:border-2 focus:border-[#31B099] focus:bg-white focus:outline-none focus:ring-[#31B099] sm:text-sm'
        )}
      />
    </div>
  );
}

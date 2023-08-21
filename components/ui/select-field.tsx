import Label from './label';

import { cn } from '@/utils/cn';

type SelectFieldProps = {
  id: string;
  label?: string;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function SelectField({
  id,
  label,
  className = '',
  ...props
}: SelectFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...props}
        className={cn(
          'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm',
          'pr-8'
        )}
      />
    </div>
  );
}

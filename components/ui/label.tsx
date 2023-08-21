type LabelProps = {
  id: string;
  children: React.ReactNode;
};

export default function Label({ id, children }: LabelProps) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm text-gray-700">
      {children}
    </label>
  );
}

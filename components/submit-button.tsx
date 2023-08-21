'use client';

import Button from '@/components/ui/button';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'En cours' : title}
    </Button>
  );
}

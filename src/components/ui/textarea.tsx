import * as React from 'react';
import { cn } from '@/lib';

export function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'min-h-[130px] w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b3a82] focus:ring-2 focus:ring-[#0b3a82]/20',
        className
      )}
      {...props}
    />
  );
}

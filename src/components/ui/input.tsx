import * as React from 'react';
import { cn } from '@/lib';

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b3a82] focus:ring-2 focus:ring-[#0b3a82]/20',
        className
      )}
      {...props}
    />
  );
}

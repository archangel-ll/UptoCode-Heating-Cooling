import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3a82]/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#0b3a82] text-white shadow-lg shadow-[#0b3a82]/30 hover:-translate-y-0.5 hover:bg-[#0a3272]',
        outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
        ghost: 'text-slate-700 hover:bg-slate-100',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 rounded-lg px-4 text-xs',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant, size, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };

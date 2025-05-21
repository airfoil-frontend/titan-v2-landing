import { cn } from '@/common/functions/cn';

interface ComparisonItemProps {
  title: string;
  value: string;
  className?: string;
  titleClassName?: string;
  tradeValue: number;
}

export const ComparisonItem = ({
  title,
  value,
  className,
  titleClassName,
  tradeValue,
}: ComparisonItemProps) => {
  const commonTextClassName =
    'text-lg leading-6 font-medium tracking-[-0.0225rem]';
  return (
    <div className="flex w-full items-center gap-8">
      <div
        className={cn('h-10 rounded-full md:h-11', className)}
        style={{ width: `${tradeValue}%` }}
      />
      <div className="flex min-w-25 flex-col justify-center">
        <h3 className={cn(commonTextClassName, titleClassName)}>{title}</h3>
        <p className={cn(commonTextClassName, 'text-gray-500')}>{value}</p>
      </div>
    </div>
  );
};

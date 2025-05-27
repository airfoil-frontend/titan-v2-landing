import { PriceTable } from '@/modules/Home/Price/PriceTable';

export const PriceSection = () => {
  return (
    <section className="flex justify-center px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div
        className="relative flex w-full max-w-[1216px] flex-col justify-center rounded-2xl before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-b before:from-[rgba(171,186,173,0.1)] before:to-[rgba(171,186,173,0)] before:p-[1px] xl:flex-row"
        style={{
          background:
            'linear-gradient(180deg, rgba(28, 27, 23, 0.5) 0%, rgba(16, 14, 10, 0.5) 100%)',
        }}
      >
        <div className="px-0 md:px-10 xl:px-0 xl:py-[4.25rem]">
          <div className="flex flex-col gap-5 px-4 py-10 md:px-6 md:py-16 lg:p-16 xl:min-w-[657px]">
            <h2 className="font-display text-primary text-[2rem] leading-[2.25rem] tracking-[-2%] md:text-5xl md:tracking-[-0.06rem]">
              Solana&apos;s original meta DEX aggregator
            </h2>
            <p className="text-lg leading-6 font-light tracking-[-1%] text-gray-400">
              Titan finds the best price across Talos, Jupiter, DeFlow,
              Hashflow, and every other router on Solana.
            </p>
          </div>
        </div>
        <PriceTable />
      </div>
    </section>
  );
};

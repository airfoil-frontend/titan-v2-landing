export const TradeSlider = ({
  numberOfTrades,
  setNumberOfTrades,
}: {
  numberOfTrades: number;
  setNumberOfTrades: (value: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfTrades(Number(e.target.value));
  };

  return (
    <div className="relative flex w-full flex-col items-start gap-2.5">
      <div className="relative h-6 w-full">
        {/* Background track */}
        <div className="absolute top-2 h-2 w-full bg-gray-800" />

        {/* Active track */}
        <div
          className="absolute top-2 h-2 bg-gray-300"
          style={{ width: `${(numberOfTrades / 1000) * 100}%` }}
        />

        {/* Hidden native input */}
        <input
          className="absolute top-0 h-6 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-200 [&::-webkit-slider-thumb]:bg-gray-300"
          max="1000"
          min="0"
          type="range"
          value={numberOfTrades}
          onChange={handleChange}
        />
      </div>

      {/* Value label */}
      <span
        className="absolute -top-12 rounded bg-white px-4 py-1.5 font-mono text-base leading-6 font-normal tracking-[-0.32px] text-black"
        style={{
          left: `calc(${(numberOfTrades / 1000) * 100}% - ${Math.round(numberOfTrades / 100) * 4 + 11}px)`,
        }}
      >
        {numberOfTrades}
      </span>

      <span className="text-lg leading-7 tracking-[-0.0225rem] text-gray-50">
        Number of trades per month
      </span>
    </div>
  );
};

function ColorCard({ color }: { color: string }) {
  return (
    <div
      className="border-slate-400 border-2 transition ease-in-out w-full h-96 mb-10 shadow-md shadow-slate-800/30 rounded"
      style={{ backgroundColor: color }}
    />
  );
}

export default ColorCard;

const PPU = ({ ppu, idp }) => {
  return (
    <div className="flex flex-col items-center space-y-1 ">
      <span className={`${!idp && "text-green-400"} uppercase`}>Pay-Per-Use</span>
      <span className={`${!idp && "text-green-400"} `}>{ppu ? "Yes" : "No"}</span>
    </div>
  );
};

export default PPU;

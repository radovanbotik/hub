const Technology = ({ technology }) => {
  return (
    <div className="flex flex-col items-center space-y-1 flex-wrap ">
      <span className="uppercase">Available Technology</span>
      <span>{technology.join("/")}</span>
    </div>
  );
};

export default Technology;

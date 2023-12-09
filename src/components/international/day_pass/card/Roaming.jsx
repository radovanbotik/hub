const Roaming = ({ idp, sudp, ppu }) => {
  if (!sudp) {
    return (
      <>
        <div className="flex flex-col items-center">
          <span className="font-bold text text-center">International Day Pass®</span>
          <span className="font-bold text-8xl">{idp ? "Yes" : "No"}</span>
        </div>
      </>
    );
  }
  if (sudp) {
    return (
      <>
        <div className="flex flex-col items-center">
          <span className="font-bold text text-center"> Select Unlimited Domestic Plans</span>
          <span className="font-bold text-8xl">{sudp ? "Yes" : "No"}</span>
        </div>
      </>
    );
  }
  // if (!sudp && !idp) {
  //   return (
  //     <>
  //       <div className="flex flex-col items-center">
  //         <span className="font-bold text text-center"> Pay-Per-Use</span>
  //         <span className="font-bold text-8xl">{sudp ? "Yes" : "No"}</span>
  //       </div>
  //     </>
  //   );
  // }
};

export default Roaming;

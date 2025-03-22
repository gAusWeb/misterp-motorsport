import React from "react";

const Parallax: React.FC = () => {
  return (
    <div className="parallax">
      {/* layer 1 will be the bottom layer, layer 3 will be the top layer */}
      <div className="parallax-layer layer1">LAYER 1</div>
      <div className="parallax-layer layer2">LAYER 2</div>
      <div className="parallax-layer layer3">LAYER 3</div>
    </div>
  );
};

export default Parallax;

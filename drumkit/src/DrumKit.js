import React from "react";
import DrumKitButton from "./DrumKitButton";

const DrumKit = () => (
  <div className="all">
    <DrumKitButton keyName="w" data-key="w" />
    <DrumKitButton keyName="a" data-key="a" />
    <DrumKitButton keyName="s" data-key="s" />
    <DrumKitButton keyName="d" data-key="d" />
    <DrumKitButton keyName="j" data-key="j" />
    <DrumKitButton keyName="k" data-key="k" />
    <DrumKitButton keyName="l" data-key="l" />
  </div>
);

export default DrumKit;

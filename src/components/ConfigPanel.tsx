import { useEffect, useState } from "react";
import { PasswordConfig } from "../Type";
import useRandom from "../hooks/useRandom";

interface PanelState {
  config: PasswordConfig;
}

const initState: PasswordConfig = {
  long: 3,
  activeNumber: true,
  activeSymbols: true,
  activeCapital: true,
  activeLower: true,
};
const ConfigPanel: React.FunctionComponent = () => {
  const [currentConfig, setCurrentConfig] =
    useState<PanelState["config"]>(initState);
  const { password, generatePass } = useRandom();

  useEffect(() => {
    generatePass(currentConfig);
  }, [currentConfig, generatePass]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = evt.target.name as keyof PanelState["config"];
    if (targetName !== "long") {
      setCurrentConfig((prv) => ({
        ...prv,
        [targetName]: !currentConfig[targetName],
      }));
    } else {
      setCurrentConfig((prv) => ({
        ...prv,
        [targetName]: parseInt(evt.target.value),
      }));
    }
  };

  const computePass = () => {
    generatePass(currentConfig);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    alert("Text copied");
  };

  return (
    <div>
      <h2>Config Your Password</h2>
      <form>
        <label htmlFor="password-length">Length</label>
        <input
          type="number"
          name="long"
          min="3"
          max="50"
          value={currentConfig.long}
          onChange={handleChange}
        />
        <input
          type="range"
          min="3"
          max="50"
          name="long"
          value={currentConfig.long}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="activeNumber"
          checked={currentConfig.activeNumber}
          onChange={handleChange}
        />
        <label htmlFor="activeNumber">Active Number</label>
        <input
          type="checkbox"
          name="activeSymbols"
          checked={currentConfig.activeSymbols}
          onChange={handleChange}
        />
        <label htmlFor="activeSymbols">Active Symbols</label>
        <input
          type="checkbox"
          name="activeCapital"
          checked={currentConfig.activeCapital}
          onChange={handleChange}
        />
        <label htmlFor="activeCapital">Active Capitals</label>
        <input
          type="checkbox"
          name="activeLower"
          checked={currentConfig.activeLower}
          onChange={handleChange}
        />
        <label htmlFor="activeLow">Active Lower</label>
        <button type="button" value="refresh" onClick={computePass}>
          New Pass
        </button>
        <button type="button" value="refresh" onClick={copyToClipboard}>
          Copy
        </button>
      </form>
    </div>
  );
};

export default ConfigPanel;

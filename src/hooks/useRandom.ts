import { useCallback, useState } from "react";
import {
  PasswordConfig,
  ActionTypes,
  Symbols,
  Letters,
  Feature,
} from "../Type";
import { useDispatch } from "react-redux";

const useRandon = () => {
  const [newPass, setNewPass] = useState<string>("");
  const storedispatch = useDispatch();
  const generatePass = useCallback(
    (config: PasswordConfig): void => {
      let pass = "";
      if (
        config.activeCapital ||
        config.activeLower ||
        config.activeNumber ||
        config.activeSymbols
      ) {
        while (pass.length < config.long) {
          const charType = Math.floor(Math.random() * 4);
          switch (Feature[charType]) {
            case "number":
              if (config.activeNumber) {
                const char = Math.floor(Math.random() * 9);
                pass = pass + char;
              }
              break;
            case "symbol":
              if (config.activeSymbols) {
                const char = Math.floor(Math.random() * Symbols.length);
                pass = pass + Symbols[char];
              }
              break;
            case "capital":
              if (config.activeCapital) {
                const char = Math.floor(Math.random() * Letters.length);
                pass = pass + Letters[char].toUpperCase();
              }
              break;
            case "lower":
              if (config.activeLower) {
                const char = Math.floor(Math.random() * Letters.length);
                pass = pass + Letters[char];
              }
              break;
          }
        }
        storedispatch({ type: ActionTypes.UPDATE, value: pass });
        setNewPass(pass);
      }
    },
    [storedispatch]
  );

  return {
    password: newPass,
    generatePass,
  };
};

export default useRandon;

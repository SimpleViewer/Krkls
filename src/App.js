import React from "react";
import { Skills } from "./Skills";
import { SkillsContextProvider } from "./SkillsContext";
import { Lvl } from "./Lvl";
import { Devices } from "./Devices";
import "./styles.css";
import { DevicesContextProvider } from "./DevicesContext";
import { WeaponsContextProvider } from "./WeaponsContext";
import { Weapons } from "./Weapons";

export default function App() {
  return (
    <SkillsContextProvider>
      <DevicesContextProvider>
        <WeaponsContextProvider>
          <Lvl />
          <br />
          <br />
          <span>Умения:</span>
          <Skills />
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <span>Устройства:</span>
              <Devices />
            </div>
            <div>
              <span>Оружие:</span>
              <Weapons />
            </div>
          </div>
        </WeaponsContextProvider>
      </DevicesContextProvider>
    </SkillsContextProvider>
  );
}

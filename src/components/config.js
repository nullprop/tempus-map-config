import React from "react";

import "./config.css";

export default function Config(props) {
  if (props.maps.length <= 0) return null;

  return (
    <pre className={props.className}>
      <p className="config-display">
        <code>
          {createConfig(
            props.maps,
            props.keybind,
            props.tier,
            props.playerClass,
            props.date,
            props.useRcon
          )}
        </code>
      </p>
    </pre>
  );
}

function createConfig(maps, keybind, tier, playerClass, date, useRcon) {
  let config = "";

  config += `// Tempus ${playerClass} tier ${tier} speedrun config\n`;
  config += `// Created ${date}\n`;
  config += "// https://nullprop.github.io/tempus-map-config\n";
  config += `// Starting map: ${maps[0].name}\n\n`;

  config += `bind ${keybind} tmps-map-1\n\n`;

  for (let i = 0; i < maps.length; i++) {
    let nextMap = i + 1;
    if (i >= maps.length - 1) {
      nextMap = 0;
    }

    config += `alias tmps-map-${i} "bind ${keybind} tmps-map-${nextMap};${
      useRcon ? " rcon" : ""
    } changelevel ${maps[i].name}"\n`;
  }

  return config;
}

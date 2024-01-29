import React from "react";
import "./Building.scss";

export default function Building({ building, removeItem, upgradeItem }) {
  return (
    <div
      className={`building ${
        building.upgraded ? "bakery-image-level-2" : "bakery-image"
      }`}
      style={{
        border: building.upgraded ? `5px solid gold` : `5px solid #FFDD95`,
        position: "relative",
      }}
    >
      {building.upgraded && <div class="triangle-container"></div>}

      <div
        style={{
          position: "absolute",
          top: "-2rem",
        }}
      >
        <div class="chimney">
          <div class="smoke"></div>
        </div>
      </div>

      {building.upgraded && (
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            right: 0,
          }}
        >
          <div class="chimney">
            <div class="smoke"></div>
          </div>
        </div>
      )}

      <button className="remove-button" onClick={() => removeItem(building.id)}>
        <span>REMOVE</span>
      </button>

      {building.upgraded ? null : (
        <button
          className="upgrade-button"
          onClick={() => upgradeItem(building)}
        >
          <span className="plus-icon">UPGRADE</span>
        </button>
      )}
    </div>
  );
}

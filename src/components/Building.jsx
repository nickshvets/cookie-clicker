import React from "react";
import "./Building.scss";

export default function Building({ building, removeItem, upgradeItem }) {
  return (
    <div
      className="building"
      style={{
        border: building.upgraded ? `5px solid gold` : `5px solid aqua`,
      }}
    >
      <button onClick={() => removeItem(building.id)}>
        <span className="plus-icon">-</span>
      </button>

      {building.upgraded ? null : (
        <button onClick={() => upgradeItem(building)}>
          <span className="plus-icon">UPGRADE</span>
        </button>
      )}
    </div>
  );
}

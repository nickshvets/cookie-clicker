import { useReducer, useState, useEffect } from "react";
import Stats from "./components/Stats";
import Cookie from "./components/Cookie";
import Building from "./components/Building";
import { GiHouse } from "react-icons/gi";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { GiUpgrade } from "react-icons/gi";

import "./App.scss";

const SquarePlusButton = ({ onClick }) => {
  return <button className="square-button" onClick={onClick}></button>;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        buildings: [...state.buildings, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        buildings: state.buildings.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        buildings: state.buildings.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.updatedItem }
            : item
        ),
      };
    default:
      return state;
  }
};

const initialBuildingState = {
  buildings: [],
};

function App() {
  const [cookieCount, setCookieCount] = useState(0);

  const [buildingState, dispatch] = useReducer(reducer, initialBuildingState);

  const addItem = () => {
    const newItem = { id: Date.now() };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const upgradeItem = (building) => {
    const upgradedBuilding = {
      ...building,
      upgraded: true,
      level: building.level + 1,
    };
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: building.id, updatedItem: upgradedBuilding },
    });
  };

  const handleClick = (premiumCookie) => {
    setCookieCount((cookieCount) =>
      premiumCookie ? cookieCount + 100 : cookieCount + 1
    );
  };

  useEffect(() => {
    if (buildingState.buildings.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      let increment = 1;
      for (const building of buildingState.buildings) {
        if (building.upgraded) {
          increment += 2;
        }
      }
      setCookieCount((prevCount) => prevCount + increment);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [buildingState.buildings]);

  return (
    <div className="App">
      <Stats cookieCount={cookieCount} buildingState={buildingState} />
      <Cookie handleClick={handleClick} />
      <div className="building-container">
        {buildingState.buildings.map((building) => (
          <Building
            key={building.id}
            building={building}
            removeItem={removeItem}
            upgradeItem={upgradeItem}
          />
        ))}
        {buildingState.buildings.length > 3 ? null : (
          <SquarePlusButton onClick={addItem} />
        )}
      </div>
    </div>
  );
}

export default App;

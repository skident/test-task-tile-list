import { useState } from "react";
import { Tile } from "./Tile";
import { tileList } from "./model";
import "./Tile.css";

const thumbnailPlaceholder =
  "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";

export const TileList = () => {
  const [tiles, setTiles] = useState(tileList);

  function install(id: string) {
    const array = new Array(...tiles);
    const tile = array.find((x) => x.id === id);
    if (!tile) {
      return;
    }

    if (tile.state === "install") {
      tile.progress = 0;
      tile.state = "in-progress";

      const interval = setInterval(() => {
        const array = new Array(...tiles);
        const tile = array.find((x) => x.id === id);
        if (!tile) {
          clearInterval(interval);
          return;
        }

        tile.progress = Math.min(tile.progress + 3, 100);
        setTiles(array);
        if (tile.progress >= 100) {
          clearInterval(interval);
          tile.state = "done";
        }
      }, 40);
    } else if (tile.state === "done") {
      tile.state = "install";
      tile.progress = 0;
    }

    setTiles(array);
  }

  return (
    <div className="tilelist">
      {tiles.flatMap((tileInfo) => (
        <Tile key={tileInfo.id} {...tileInfo} install={install} />
      ))}
    </div>
  );
};

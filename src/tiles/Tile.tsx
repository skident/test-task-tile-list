import "./Tile.css";
import { TileModel } from "./model";

type TileProps = TileModel & {
  install: (id: string) => void;
};

export const Tile = (props: TileProps) => {
  return (
    <div className="tile">
      <img src={props.thumbnail} alt="" />
      <br />
      {props.name}
      <br />
      {props.description}
      <br />
      {props.version}
      <br />
      {props.state}
      <br />
      {props.progress}

      <br />
      <button
        onClick={() => {
          props.install(props.id);
        }}
      >
        CLICK ME!
      </button>
    </div>
  );
};

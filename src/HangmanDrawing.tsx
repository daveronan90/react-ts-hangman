const HEAD = (
  <div
    style={{
      width: 50,
      height: 50,
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: 50,
      right: -30,
    }}
  />
);
const BODY = (
  <div
    style={{
      height: 100,
      width: 10,
      background: "black",
      position: "absolute",
      top: 120,
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      height: 10,
      width: 100,
      background: "black",
      position: "absolute",
      top: 150,
      right: -100,
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      height: 10,
      width: 100,
      background: "black",
      position: "absolute",
      top: 150,
      right: 10,
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      height: 10,
      width: 100,
      background: "black",
      position: "absolute",
      top: 210,
      right: -90,
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      height: 10,
      width: 100,
      background: "black",
      position: "absolute",
      top: 210,
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuess: number;
};

function HangmanDrawing({ numberOfGuess }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuess)}
      <div
        style={{
          height: 50,
          width: 10,
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{ height: 10, width: 250, background: "black", marginLeft: 120 }}
      />
      <div
        style={{ height: 400, width: 10, background: "black", marginLeft: 120 }}
      />
      <div style={{ height: 10, width: 250, background: "black" }} />
    </div>
  );
}

export default HangmanDrawing;

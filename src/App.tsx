import { Fragment } from "react";

const Icon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
      <path d="M16 5.25l-8 4.5" />
    </svg>
  );
};

const Grid = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from(Array(44)).map((_, i) => (
        <Fragment key={i}>
          <line
            x1="0"
            y1={(i + 1) * 50}
            x2="1200"
            y2={(i + 1) * 50}
            stroke="currentColor"
            strokeWidth="1"
          />

          <line
            x1={(i + 1) * 50}
            y1="0"
            x2={(i + 1) * 50}
            y2="1200"
            stroke="currentColor"
            strokeWidth="1"
          />
        </Fragment>
      ))}
    </svg>
  );
};

const Stars = () => {
  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1400 1400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(200)].map((_, index) => (
        <circle
          key={index}
          cx={getRandomNumber(-1400, 2800)}
          cy={getRandomNumber(-1400, 2800)}
          r={getRandomNumber(1, 10)}
          fill="currentColor"
        />
      ))}
    </svg>
  );
};

const Button = () => {
  return (
    <button className="group border border-black rounded-md shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)]">
      <div className="relative flex flex-col p-4 shadow-[inset_0px_0px_1px_1px_rgba(255,255,255,0.5)] rounded-[0.3rem] bg-black overflow-hidden">
        <div className="text-white z-10">
          <Icon />
        </div>
        <div className="absolute w-full h-[60%] left-0 top-0 overflow-hidden text-white">
          <Stars />
        </div>
        <div className="absolute w-full h-[50%] left-0 bottom-0 overflow-hidden text-white">
          <div
            className="absolute w-[200%] left-[-50%] top-[-50%]"
            style={{ perspective: "32px" }}
          >
            <div style={{ transform: "rotateX(60deg)" }}>
              <Grid />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

const App = () => {
  return (
    <div className="text-lg p-8 relative">
      <Button />
    </div>
  );
};

export default App;

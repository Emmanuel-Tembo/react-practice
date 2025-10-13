import { useState } from "react";

const Count = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Expand/Collapse
      </button>
      <div
        className={`${isCollapsed ? "w-[100px]" : "w-[400px]"} h-screen bg-blue-400 p-4`}
      >
        <div className="h-8 w-8 bg-white">+</div>
        {!isCollapsed && <span className="text-white">some text</span>}
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <>
      <h1>Example Screen</h1>
      <Count />
    </>
  );
};

export default Screen;
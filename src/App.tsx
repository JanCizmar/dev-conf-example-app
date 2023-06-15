import { useState } from "react";

function App() {
  const [foodIdx, setFoodIdx] = useState(undefined as number | undefined);

  const foods = ["Burger", "Pizza", "Spaghetti", "Chicken"];

  return (
    <>
      <div className="mx-auto flex justify-center items-center max-w-[800px] min-h-[100vh]">
        <div className="flex justify-center flex-col">
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-900 to-green-500">
            LunchAI
          </h1>
          <h2 className="mt-0 text-xl text-gray-600">
            This App tells you what to eat today
          </h2>
          <button
            onClick={() => {
              setFoodIdx(Math.floor(Math.random() * foods.length));
            }}
            className="bg-gray-50 p-2 rounded-2xl shadow-lg text-gray-700 text-xl mt-4"
          >
            What to eat today?
          </button>
          {foodIdx != undefined && (
            <div className="mt-[100px]">
              <div className="text-2xl text-center">Today you should eat</div>
              <div className="mt-4 text-[50px] text-center">
                {foods[foodIdx]}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

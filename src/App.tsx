import {T, useTolgee, useTranslate} from "@tolgee/react";
import {useState} from "react";

function App() {
  const [foodIdx, setFoodIdx] = useState(undefined as number | undefined);
  const tolgee = useTolgee();
  const setLang = tolgee.changeLanguage;
  const {t} = useTranslate()

  const foods = [
    t('burger', "Burger"),
    t('pizza', "Pizza"),
    t('spaghetti', "Spaghetti"),
    t('chicken', 'Chicken')
  ]

  return (
    <>
      <div className="mx-auto flex justify-center items-center max-w-[800px] min-h-[100vh]">
        <div className="flex justify-center flex-col">
          
          <div className="mb-4 inline-flex gap-1 items-center justify-center">
            <button onClick={() => setLang('en')}>🇬🇧</button>
            <button onClick={() => setLang('de')}>🇩🇪</button>
            <button onClick={() => setLang('cs')}>🇨🇿</button>
          </div>

          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-900 to-green-500">
            <T keyName="app-name">LunchAI</T>
          </h1>
          <h2 className="mt-0 text-xl text-gray-600">
            <T keyName="app-description">This App tells you what to eat today</T></h2>

          <button onClick={() => {
            setFoodIdx(Math.floor(Math.random() * foods.length));
          }} className="bg-gray-50 p-2 rounded-2xl shadow-lg text-gray-700 text-xl mt-4">
            <T keyName="generate-button">What to eat today?</T></button>
          {(foodIdx != undefined) && <div className="mt-[100px]">
            <div className="text-2xl text-center">
              <T keyName="result-info">Today you should eat</T>
            </div>
            <div className="mt-4 text-[50px] text-center">
              {foods[foodIdx]}
            </div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App

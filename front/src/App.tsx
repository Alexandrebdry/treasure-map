import WelcomeProvider from "./providers/Welcome/WelcomeProvider.tsx";
import Game from "./components/game/Game.tsx";
function App() {

  return (
    <>
        <WelcomeProvider>
            <Game></Game>
        </WelcomeProvider>
    </>
  )
}

export default App

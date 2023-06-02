import styles from "./WelcomeProvider.module.css";
import {createContext,  useRef, useState} from "react";

interface WelcomeContextInterface {
    isWelcomeEnded: boolean | null;
}
const WelcomeContext = createContext<WelcomeContextInterface>({isWelcomeEnded: false});
function WelcomeProvider ({children}: JSX.Element[] | JSX.Element) {

    const map = useRef(null);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isWelcomeEnded, setIsWelcomeEnded] = useState(false);

    const startGame = () => {
        if(map && map.current) {
            map.current.classList.add(styles.map);
            map.current.classList.remove(styles.click);
            setTimeout(() => {
                setIsGameStarted(true) ;
            }, 1000);
        }
    }

    return (
        <WelcomeContext.Provider value={{isWelcomeEnded}}>
            {
                !isWelcomeEnded ?
                    <div className={styles.container}>
                        <img width={150} height={150} className={styles.click} onClick={() => {startGame()}}  ref={map}  src="./map.png" alt="Image d'une carte aux trésors ! " />
                        {
                            isGameStarted && (
                                <div className={styles.game} onClick={() => setIsWelcomeEnded(true)}>
                                    <p className={styles.primary}>C'est parti aventurier, on part à la recherche des trésors.</p>
                                    <p>Clic pour continuer ! </p>
                                </div>
                            )
                        }
                    </div>
                    : children
            }

        </WelcomeContext.Provider>

    )

}

export default WelcomeProvider;
import styles from "./Game.module.css";
import Plateau from "../pateau/Plateau.tsx";
import Plaine from "../tuiles/plaine/Plaine.tsx";
import Montagne from "../tuiles/montagne/Montagne.tsx";
function Game () {


    return (
       <div className={styles.container}>
           <div>
               <h1>Bienvenue aventurier</h1>
               <p>Je sais que tu as soif de trésors, tu vas bientôt partir à leurs recherches</p>
           </div>
           <div className={styles.game}>
               <div className={styles.rules}>
                   <label htmlFor="file">
                          <p>Choisissez votre fichier de jeu</p>
                   </label>
                   <input accept={"text/plain"} name={"file"} type="file"/>
               </div>
               <div className={styles.plateau}>
                   <Plateau>
                       <div>
                           <Plaine tresors={4}/>
                           <Montagne/>
                           <Plaine/>
                           <Plaine/>
                           <Plaine personnage={"Pascal"} direction={"sud"}/>
                       </div>
                       <div>
                           <Plaine/>
                           <Plaine personnage={"Pascal"} direction={"est"}/>
                           <Plaine/>
                           <Montagne/>
                           <Plaine tresors={1}/>
                       </div>
                       <div>
                           <Plaine personnage={"Pascal"} direction={"ouest"}/>
                           <Plaine/>
                           <Plaine personnage={"Pascal"} direction={"nord"}/>
                           <Plaine/>
                           <Plaine/>
                       </div>
                   </Plateau>
               </div>
           </div>
       </div>
    )

}

export default Game;
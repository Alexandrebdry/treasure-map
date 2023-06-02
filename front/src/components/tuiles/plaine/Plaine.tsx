import styles from './Plaine.module.css' ;

interface Props {
    tresors?: number ;
    personnage?: string;
    direction?: string;
}
export default function Plainte ({tresors = 0 , personnage = "", direction = "nord"}: Props ) {

    return (
        <div className={styles.tuile}>
            {
                tresors > 0 &&
                    <div className={styles.tresor}>
                        <p> T : {tresors}</p>
                    </div>
            }
            {
                personnage &&
                <div className={styles.personnage}>
                    <p> {personnage.substring(0,3)} </p>
                    {
                        direction === "nord" &&
                        <div className={styles.top}>
                            ^
                        </div>
                    }
                    {
                        direction === "sud" &&
                        <div className={styles.bottom}>
                            v
                        </div>
                    }
                    {
                        direction === "est" &&
                        <div className={styles.right}>

                        </div>
                    }
                    {
                        direction === "ouest" &&
                        <div className={styles.left}>

                        </div>
                    }
                </div>
            }


        </div>
    )
}
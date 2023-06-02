import styles from "./Plateau.module.css";
export default function Plateau ( {children}: JSX.Element[] | JSX.Element | null) {
    return (
        <div className={styles.plateau}>
            {children}
        </div>
    )
}
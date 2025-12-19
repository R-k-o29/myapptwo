import styles from './externaltwo.module.css';
import './external.css';
import variable from './externalthree.module.css'

export default function File(){
    return(
        <>
            <div className="card">
                <h2>Heading</h2>
                <button className="butt">Click me</button>
            </div>

            <div className={styles.card}>
                <h2>Heading</h2>
                <button className="butt">Click me</button>
            </div>

            <div className={variable.card}>
                <h2>Heading</h2>
                <button className="butt">Click me</button>
            </div>


        </>
    );
}
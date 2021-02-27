import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/erikitu.png" alt="Eric Pinheiro" />
            <div>
                <strong>Eric Pinheiro</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    { level }</p>
            </div>
        </div>
    );

}
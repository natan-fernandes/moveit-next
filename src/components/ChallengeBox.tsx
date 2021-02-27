import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const HasActiveChallenge = true;


    return (
        <div className={styles.challengeBoxContainer}>
            { HasActiveChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe 400px</header>
                        <main>
                            <img src="icons/body.svg"/>
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos.</p>
                        </main>
                    </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level-up"/>
                            Avance de level completando desafios
                        </p>
                    </div>
                )}
        </div>
    )
}
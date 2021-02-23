import stylses from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        <header className={stylses.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }}></div>
                <span className={stylses.currentExperience} style= {{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>680 xp</span>
        </header>

    );
}
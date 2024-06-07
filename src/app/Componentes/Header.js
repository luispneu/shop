import React from 'react';
import styles from '../Componentes/header.module.css'; 

export function Header() {
    const handleClick = () => {
        alert('Botão ADICIONAR clicado!');
    };

    return (
        <div className={styles.headerContainer}>
            <img src="https://i.pinimg.com/236x/5d/26/a1/5d26a173f443cbd190e34481438d474b.jpg" alt="Logo 1" className={styles['header-logo']} />
            <img src="https://img.freepik.com/premium-vector/shark-logo_647943-151.jpg" alt="Logo 2" className={styles['header-logo']} />
            <button className={styles.headerButton}>ADICIONAR</button>
            <p className={styles.someClassName}>Venha conhecer a nossa loja!!</p>
        </div>
    );
}

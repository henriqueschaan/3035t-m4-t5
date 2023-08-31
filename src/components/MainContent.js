import { ThemeContext } from '../contexts/ThemeContext';
import { useContext, useEffect } from 'react';
import Switch from 'react-switch';

export function MainContent() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#333' : '#fff';
        document.body.style.color = darkMode ? '#fff' : '#333';
    }, [darkMode]);

    return (
        <div>
            <div className="toggle-container">
                <span className="toggle-text">{darkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}</span>
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
            </div>
            <div className="container">
                <div className="header">Módulo 4 - Tarefa 5</div>
                <div className="paragraph">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                    <p>Donec in efficitur leo. Sed malesuada quis erat facilisis tincidunt.</p>
                </div>
            </div>
        </div>
    );
}

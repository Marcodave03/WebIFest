import React, { useEffect } from 'react';
import { initializeThree } from './logicScript/komodo';

const Komodo: React.FC = () => {
    useEffect(() => {
        initializeThree('canvasKomodo', 'containerKomodo', './Komodo.glb');
    }, []);
    return (
        <div id='containerKomodo' style={{position: 'fixed', width: '100%',height: '100%',margin: '0', padding: '0',}}>
            <canvas id='canvasKomodo'></canvas>
        </div>
    );
};

export default Komodo;

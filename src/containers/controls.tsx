import msc from '../images/cover/blond.jpg'
import ControlBt from './components/controlbt'
import { useState } from 'react';
import { stop, play, prev, pause, next } from '../images/buttons'

const Controls = () => {
    const [isPaused, setIsPaused] = useState(false)

    const hanlePlay = () => {
        setIsPaused(!isPaused)
    }
    return (
        <div className='container'>
            <div className="control-container">
                <img src={msc} alt="capa album" className="current" />

                <div className="buttons-container">
                    <ControlBt>
                        <img src={prev} alt='parar' className="button-icon" />
                    </ControlBt>

                    <ControlBt onClick={() => hanlePlay()}>
                        <img src={isPaused ? pause : play} alt='play/pause' className="button-icon" />
                    </ControlBt>



                    <ControlBt>
                        <img src={next} alt='prox' className="button-icon" />
                    </ControlBt>
                </div>
            </div>
        </div>
    );
};

export default Controls
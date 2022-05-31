import { React, useState } from 'react';

import clearflag from '../assets/Frame 5.png'
import greydot from '../assets/Ellipse 32.svg'
import bluedot from '../assets/Ellipse 33.svg'
import pinkdot from '../assets/Ellipse 34.svg'
import reddot from '../assets/Ellipse 35.svg'
import cross from '../assets/Group 58.svg'
import pinkFlag from '../assets/Frame 7.png'
import blueFlag from '../assets/Frame 4.png'
import redFlag from '../assets/Frame 3.png'


const data = [
    {
        key: "1",
        flagName: "Low",
        img: clearflag
    },
    {
        key: "1",
        flagName: "Medium",
        img: blueFlag
    },
    {
        key: "1",
        flagName: "High",
        img: pinkFlag
    },
    {
        key: "1",
        flagName: "Critical",
        img: redFlag
    },
    {
        key: "1",
        //flagName: "Critical",
        img: clearflag
    }
];


function Likelihood() {

    const [style, setStyle] = useState("cont");
    //const [toggled, toggle] = useState("");
    const toggleOptions = () => {
        if (style === "options") {
            setStyle("cont");
        } else {
            setStyle("options");
        }
    }

    return (
        <>

            <div class='likelihood'>

                <div class='grey-header'>
                    <div style={{ margin: '15px', }}>
                        <h3>Likelihood</h3>
                        <button onClick={toggleOptions}><img src={clearflag} /></button>
                        <div className='flag-name'><p>Critical</p></div>


                        <div className={style}>

                            <div className='option-list'>
                                <img src={greydot} alt="img" />
                                <p>Low</p>
                            </div>
                            <hr />
                            <div className='option-list'>
                                <img src={bluedot} alt="img" />
                                <p>Medium</p>
                            </div>
                            <hr /><div className='option-list'>
                                <img src={pinkdot} alt="img" />
                                <p>High</p>
                            </div>
                            <hr /><div className='option-list'>
                                <img src={reddot} alt="img" />
                                <p>Critical</p>
                            </div>
                            <hr />

                            <div className='option-list'>
                                <button onClick={toggleOptions} style={{ display: 'flex', backgroundColor: 'white', padding: '0px', marginLeft: '0px' }}>
                                    <img src={cross} alt="img" />
                                    <p>Clear</p></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class='likelihood'>

                <div class='grey-header'>
                    {data.map(({ flagName, key, img }) => {
                        return (
                            <>

                                <div style={{ margin: '15px', }}>
                                    <h3>Likelihood</h3>
                                    <button onClick={toggleOptions}><img src={img} />
                                        <div className='flag-name'><p>{flagName}</p></div></button>

                                    {/*<button onClick={toggleOptions}><img src={img} /></button>
                    <button onClick={() => toggle(key)}>{flagName}<img src={clearflag} /></button>*/}

                                    <div className={style}>

                                        <div className='option-list'>
                                            <img src={greydot} alt="img" />
                                            <p>Low</p>
                                        </div>
                                        <hr />
                                        <div className='option-list'>
                                            <img src={bluedot} alt="img" />
                                            <p>Medium</p>
                                        </div>
                                        <hr /><div className='option-list'>
                                            <img src={pinkdot} alt="img" />
                                            <p>High</p>
                                        </div>
                                        <hr /><div className='option-list'>
                                            <img src={reddot} alt="img" />
                                            <p>Critical</p>
                                        </div>
                                        <hr />

                                        <div className='option-list'>
                                            <button onClick={toggleOptions} style={{ display: 'flex', backgroundColor: 'white', padding: '0px', marginLeft: '0px' }}>
                                                <img src={cross} alt="img" />
                                                <p>Clear</p></button>
                                        </div>

                                    </div>
                                </div>



                            </>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default Likelihood;
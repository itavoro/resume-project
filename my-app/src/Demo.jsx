import { useState } from 'react';
export default function Demo () {
    function Button (props) {
        return (
            <button onClick={props.onClick} id="demoButton" style={{fontSize: props.fontSize, padding: props.padding, height:props.height}} className={`items-center flex w-auto rounded-[50px] border-3 border-green-500`}>
                <p id="demoText" className="text-center text-green-500 justify-center items">
                    {props.text}
                </p>
            </button>
        )
    }

    function demoOnClick () {
        useState(false);
    }
    
    return (        
        <div className="bg-black z-50 h-120 w-170 mt-43 ml-30 flex justify-center items-center">
            <Button 
                 text='Click for Demo'
                 fontSize='40px'
                 padding='30px'
                 height='10px'
                 onClick={demoOnClick}
            />
        </div>
    )
}
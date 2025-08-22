import { useState } from 'react';
export default function Demo () {
    function Button (props) {
        const [isVisible, setIsVisible] = useState(props.isVisible);
        const [isAnimating, setIsAnimating] = useState(props.isAnimating);
     
        const handleClick = () => {
            setIsAnimating(true);
            if (props.onClick) {
                props.onClick();
            }
            setTimeout(() => setIsVisible(false), 1000)
        };
        
        if (isVisible) {
                return (
                <button style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                    fontSize: props.fontSize,
                    padding: props.padding,
                    height:props.height
                }} onClick={handleClick} id="demoButton" className={`items-center flex w-auto rounded-[50px] border-3 border-green-500`}>
                    <p id="demoText" className="text-center text-green-500 justify-center items">
                        {props.text}
                    </p>
                </button>
            )
        }
    }

    return (        
        <div className="bg-black z-50 h-120 w-170 mt-43 ml-30 flex justify-center items-center">
            <Button 
                 text='Click for Demo'
                 fontSize='40px'
                 padding='30px'
                 height='10px'
                 isVisible={true}
                 isAnimating={false}
                 onClick={() => {console.log('x')}}
            />
        </div>
    )
}
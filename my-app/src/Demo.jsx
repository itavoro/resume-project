import { useState } from 'react';

function Button (props) {    
    if (props.isVisible) {
            return (
            <button style={{
                opacity: props.isAnimating ? 0 : 1,
                transform: props.isAnimating ? 'scale(0.8)' : 'scale(1)',
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                fontSize: props.fontSize,
                padding: props.padding,
                height:props.height
            }} 
            onClick={props.onClick} id="demoButton" 
            className={`items-center flex w-auto rounded-[50px] border-3 border-green-500`}>
                <p id="demoText" className="text-center text-green-500 justify-center items">
                    {props.text}
                </p>
            </button>
        )
    }
}

function UploadText (props) {
    if (props.isVisible) {
        return (
            <p style= {{fontSize: props.fontSize}} id='uploadText' className='z-50 text-green-500 max-w-140'> 
                {props.text}
            </p>
        )
    }
}

export default function Demo () {
    const [uploadTextIsVisible, uploadTextSetIsVisible] = useState(false)
    const [buttonIsVisible, setIsVisible] = useState(true);
    const [buttonIsAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsVisible(false);
            uploadTextSetIsVisible(true);
        }, 400)
    };

    return (   
        <div className="bg-black z-50 h-120 w-170 mt-43 ml-30 flex justify-center items-center">
            <Button 
                text='Click for Demo'
                fontSize='40px'
                padding='30px'
                height='10px'
                isVisible={buttonIsVisible}
                isAnimating={buttonIsAnimating}
                onClick={handleClick}
            />
            <UploadText 
                isVisible={uploadTextIsVisible}
                text="Upload as many resumes as you'd like. The software will take your
                criteria and rank the resumes in accordance to your preferences."
                fontSize='30px'
            />
        </div>
    )
}
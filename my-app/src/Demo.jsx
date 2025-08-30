import { useState, useRef } from 'react';

function DemoButton (props) {    
    if (props.isVisible) {
            return (
            <button style={{
                opacity: props.isAnimating ? 0 : 1,
                transform: props.isAnimating ? 'scale(0.8)' : 'scale(1)',
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                fontSize: props.fontSize,
                padding: props.padding,
                height: props.height,
            }} 
            onClick={props.onClick} id="demoButton"
            className={`items-center flex w-fit rounded-[50px] border-3 border-green-500`}>
                <p id="demoText" className="text-center text-green-500 justify-center items">
                    {props.text}
                </p>
            </button>
        )
    }
}

function Button (props) {
    if (props.isVisible) {
        return (
            <button style= {{
                fontSize: props.fontSize,
                opacity: props.isAnimating ? 1 : 0,
                transition: 'opacity 0.3s ease-out',
                fontSize: props.fontSize,
                padding: props.padding,
                height: props.height,
                }} 
                onClick={props.onClick} id="button"
                className={`items-center flex w-fit rounded-[50px] border-3 border-green-500`}>
                <p id="buttonText" className="text-center text-green-500 justify-center items">
                    {props.text}
                </p>
            </button>
        )
    }
}

function UploadText (props) {
    if (props.isVisible) {
        return (
            <p style= {{
                fontSize: props.fontSize,
                opacity: props.isAnimating ? 1 : 0,
                transition: 'opacity 0.3s ease-out'
                }} 
                id='uploadText' className='z-50 text-green-500 max-w-140'> 
                {props.text}
            </p>
        )
    }
}

export default function Demo () {
    const [uploadTextIsVisible, setUploadTextIsVisible] = useState(false);
    const [demoButtonIsVisible, setDemoButtonIsVisible] = useState(true);
    const [demoButtonIsAnimating, setDemoButtonIsAnimating] = useState(false);
    const [uploadButtonIsVisible, setUploadButtonIsVisible] = useState(false);
    const [uploadButtonIsAnimating, setUploadButtonIsAnimating] = useState(false)
    const [uploadTextIsAnimating, setUploadTextIsAnimating] = useState(false);
    const uploadInputRef = useRef(null)

    const handleDemoButtonClick = () => {
        setDemoButtonIsAnimating(true);
        setTimeout(() => {
            setUploadTextIsVisible(true);
            setUploadButtonIsVisible(true);
        }, 300)
        setTimeout(() => {
            setDemoButtonIsVisible(false);
            setUploadTextIsAnimating(true);
            setUploadButtonIsAnimating(true)
        }, 400)
    };

    const handleUploadClickButton = () => {
        uploadInputRef.current.click();
    }

    return (   
        <div className="bg-black z-50 h-120 w-170 mt-43 ml-30 flex justify-center items-center">
            <DemoButton 
                text='Click for Demo'
                fontSize='40px'
                padding='30px'
                height='10px'
                isVisible={demoButtonIsVisible}
                isAnimating={demoButtonIsAnimating}
                onClick={handleDemoButtonClick}
            />
            <div className='flex flex-col gap-5'>
                <UploadText 
                    isVisible={uploadTextIsVisible}
                    isAnimating={uploadTextIsAnimating}
                    text="Upload as many resumes as you'd like. The software will take your
                    criteria and rank the resumes in accordance to your preferences."
                    fontSize='30px'
                />
                <input 
                    type='file'
                    style={{display: 'none'}}
                    ref={uploadInputRef}
                    accept='.pdf,.doc,.docx,.txt'>
                </input>
                <Button 
                    text='Select Resumes'
                    fontSize='30px'
                    padding='30px'
                    height='10px'
                    isVisible={uploadButtonIsVisible}
                    isAnimating = {uploadButtonIsAnimating}
                    onClick={handleUploadClickButton}
                />
            </div>
        </div>
    )
}
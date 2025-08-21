import { regularBackground } from './main.jsx'
export default function Navigation () {
    function NavBox (props) {
        return (
            <div className="font-bold border-l-3 pl-10 mr-9 text-center text-white text-xl">{props.text}</div>
        )
    }

    return (
        <nav className={`flex gap-3 ${regularBackground} w-full items-center h-20 fixed top-0 z-50`}>
            <div className="border-r-3 pr-15 mr-auto text-center uppercase font-bold text-white text-3xl ml-10.5 tracking-widest">Selection</div>
            <NavBox 
                text="Sign In"
            />
            <NavBox 
                text="Products"
             />
            <NavBox 
                text="Purchase"
            />
            <NavBox 
                text="About Us"
            />
        </nav>
    )
}
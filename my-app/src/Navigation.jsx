import { regularBackground } from './main.jsx'
export default function Navigation () {
    function NavBox (props) {
        return (
            <div className="font-bold border-l-3 border-white pl-10 mr-9 text-center text-green-500 text-xl">{props.text}</div>
        )
    }

    return (
        <nav className={`flex gap-3 bg-black w-full items-center h-20 fixed top-0 z-40`}>
            <div className="border-r-3 pr-15 mr-auto border-white text-center uppercase font-bold text-green-500 text-3xl ml-10.5 tracking-widest">Selection</div>
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
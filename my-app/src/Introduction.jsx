import { regularBackground } from "./main";
export default function Introduction () {
    function BulletPoint (props) {
        return (
            <li className={props.tailwind.li}>
                <img src={new URL(props.img, import.meta.url).href} alt="" className={`${props.tailwind.img} bullet-point-icon`} />
                <span>{props.text}</span>
            </li>
        );
    }

    return (
          <ul id="introduction" className={`my-10 ml-15 text-left bg-black px-8 py-4 rounded-3xl text-xl text-white`}>
                <BulletPoint
                    img="./assets/Bullet Points/alt-battery-0-svgrepo-com.svg"
                    text="Customizable Based on Your Criteria"
                    tailwind={{
                        li: "flex items-start gap-3",
                        img: "w-6 h-6 mt-1"
                    }}
                />
                <BulletPoint
                    img="./assets/Bullet Points/alt-battery-2-svgrepo-com.svg"
                    text="Sorts in Real Time Using Artificial Intelligence"
                    tailwind={{
                        li: "flex items-start gap-3",
                        img: "w-6 h-6 mt-1"
                    }}
                />
                <BulletPoint
                    img="./assets/Bullet Points/alt-battery-3-svgrepo-com.svg"
                    text="Answers Questions and Summarizes Key Points"
                    tailwind={{
                        li: "flex items-start gap-3",
                        img: "w-6 h-6 mt-1"
                    }}
                />
                <BulletPoint
                    img="./assets/Bullet Points/alt-battery-4-svgrepo-com.svg"
                    text="Highlights Unnoticeable Red Flags"
                    tailwind={{
                        li: "flex items-start gap-3",
                        img: "w-6 h-6 mt-1"
                    }}
                />
                <BulletPoint
                    img="./assets/Bullet Points/alt-battery-5-svgrepo-com.svg"
                    text="Protects Your Privacy With Secure Protocols"
                    tailwind={{
                        li: "flex items-start gap-3",
                        img: "w-6 h-6 mt-1"
                    }}
                />
            </ul>
    )
}
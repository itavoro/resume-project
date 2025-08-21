export default function Introduction () {
    return (
          <ul id="introduction" className="my-10 ml-10 text-left bg-gradient-to-l from-purple-800  to-purple-500 px-8 py-4 rounded-3xl text-xl text-white">
                <li className="flex items-start gap-3">
                    <img src={new URL('./assets/Bullet Points/alt-battery-0-svgrepo-com.svg', import.meta.url).href} alt="bullet-0" className="w-6 h-6 mt-1" />
                    <span>Customizable Based on Your Criteria</span>
                </li>
                <li className="flex items-start gap-3">
                    <img src={new URL('./assets/Bullet Points/alt-battery-2-svgrepo-com.svg', import.meta.url).href} alt="bullet-2" className="w-6 h-6 mt-1" />
                    <span>Provides Accurate Sorting in Real Time Using Artificial Intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                    <img src={new URL('./assets/Bullet Points/alt-battery-3-svgrepo-com.svg', import.meta.url).href} alt="bullet-3" className="w-6 h-6 mt-1" />
                    <span>Answers Questions and Provides Summaries of Resumes</span>
                </li>
                <li className="flex items-start gap-3">
                    <img src={new URL('./assets/Bullet Points/alt-battery-4-svgrepo-com.svg', import.meta.url).href} alt="bullet-4" className="w-6 h-6 mt-1" />
                    <span>Highlights Unnoticeable Red Flags</span>
                </li>
                <li className="flex items-start gap-3">
                    <img src={new URL('./assets/Bullet Points/alt-battery-5-svgrepo-com.svg', import.meta.url).href} alt="bullet-5" className="w-6 h-6 mt-1" />
                    <span>Protects Your Privacy With Secure Protocols</span>
                </li>
            </ul>
    )
}
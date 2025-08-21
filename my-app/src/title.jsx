export default function Title() {
    return(
        <div id="first-page-container" className="flex flex-col h-screen items-start">
            <h1 id="title" className="mt-60 ml-10 bg-gradient-to-b from-purple-800  to-purple-500 text-gray-100 rounded-3xl max-w-200 p-10 text-4xl">The <span className="text-pink-500 font-bold">Most Effective</span><br/>Personalized AI-Powered<br/> Resume Screening <br/> Tool For Employers</h1>
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
        </div>
    );
}
import React, { useState } from 'react'
import { RxCaretDown, RxCaretUp } from "react-icons/rx";



const About = () => {
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);

    return (
        <div className='collapes-container w-full h-screen flex flex-col items-center justify-center'>
            <div className='heading text-4xl mb-4 text-gray-500'>
                <h1>About App</h1>
            </div>
            <div className="div w-4/5  shadow-md border p-4" onClick={() => setFlag1(!flag1)}>
                <div className='heading cursor-pointer flex justify-between  p-1'>
                    <h3 className='text-xl font-thin'>Analyses Your text</h3>
                    <span className='text-xl'>{flag1 === false ? <RxCaretDown /> : <RxCaretUp />}</span>
                </div>
                <div className={`collapes transition-all  duration-1000 ease-linear overflow-hidden  h-${flag1 === true ? "5" : 0}`}>
                    <p className='text-sm'>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
                </div>
            </div>

            <div className="div w-4/5  shadow-md border p-4" onClick={() => setFlag2(!flag2)}>
                <div className='heading cursor-pointer flex justify-between  p-1'>
                    <h3 className='text-xl font-thin'>Free To Use</h3>
                    <span className='text-xl'>{flag2 === false ? <RxCaretDown /> : <RxCaretUp />}</span>
                </div>
                <div className={`collapes transition-all  duration-1000  ease-linear overflow-hidden h-${flag2 === true ? "5" : 0}`}>
                    <p className='text-sm'>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit</p>
                </div>
            </div>


            <div className="div w-4/5  shadow-md border p-4" onClick={() => setFlag3(!flag3)}>
                <div className='heading cursor-pointer flex justify-between  p-1'>
                    <h3 className='text-xl font-thin'>Browser Compatible</h3>
                    <span className='text-xl'>{flag3 === false ? <RxCaretDown /> : <RxCaretUp />}</span>
                </div>
                <div className={`collapes transition-all  duration-1000 ease-linear overflow-hidden  h-${flag3 === true ? "5" : 0}`}>
                    <p className='text-sm'>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
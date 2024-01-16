import React, { useState } from 'react'
import Button from '../components/Button'
import Body from '../components/Body';
const Home = () => {
    const [value, setValue] = useState("");
    const [hasValue , setHasValue] = useState(false);


    const handleUpperCase = () => {
        if(value.length > 0){
            setValue(value.toUpperCase());
        }
    }
    const handleLowerCase = () => {
        if(value.length > 0){
            setValue(value.toLowerCase());
        }
    }
    const clearText = () => {
        setValue("");

    }
    const clipToBoard = () => {
        navigator.clipboard.writeText(value)
        .then(() =>  console.log("copied"))
        .catch((err) => console.log("Error" , err));
    }
    const removeExtraText = () => { 
        const newString = value.replace(/\s+/g, " ");
        setValue(newString);

    }
    return (
        <div className='w-4/5 m-auto mt-10 p-3'>
           <div className="heading text-xl font-thin">Enter Your Text Here</div>
            <div className=''>
                <textarea value={value} onChange={(e) => setValue(e.target.value)} name="" id="" cols="30" rows="10" className='resize-none w-full p-3 text-2xl border'></textarea>
                <div className="btns flex gap-4">
                    <Button val={value} text="Convert UpperCase" color="skyblue" handleFunc={handleUpperCase} />
                    <Button val={value} text="Convert LowerCase" color="skyblue" handleFunc={handleLowerCase} />
                    <Button val={value} text="Clear Text" color="tomato" handleFunc={clearText} />
                    <Button val={value} text="Copy To ClipBoard" color="green" handleFunc={clipToBoard} />
                    <Button val={value} text="Remove Extra Text" color="skyblue" handleFunc={removeExtraText} />
                </div>

                <div className="summary text-left mt-5">
                    <Body val={value}/>
                </div>
            </div>
        </div>
    )
}

export default Home
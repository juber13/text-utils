import React, { useReducer, useState } from 'react'
import Button from '../components/Button'
import Body from '../components/Body';
import btnReducer from '../components/reducer';

const Home = () => {
    const [value, setValue] = useState("");
  
    const [state, dispatch] = useReducer(btnReducer, value);
    const handleConvertUppercase = () => {
        dispatch({ type: "CONVERT_UPPERCASE" });
    };

    const handleConvertLowercase = () => {
        dispatch({ type: "CONVERT_LOWERCASE" });
    };

    const handleClearText = () => {
        dispatch({ type: "CLEAR_TEXT" });
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(state).then(() => console.log("copied")).then((err) => console.log(err));
    };

    const handleRemoveExtraText = () => {
        dispatch({ type: "REMOVE_EXTRA_SPACE" });
    };

    return (
        <div className='w-4/5 m-auto mt-10 p-3'>
            <div className="heading text-xl font-thin">Enter Your Text Here</div>
            <div className=''>
                <textarea value={state} onChange={(e) => dispatch({type :  "UPDATE_STATE" , payload : e.target.value})} name="" id="" cols="30" rows="10" className='resize-none w-full p-3 text-2xl border'></textarea>
                <div className="btns flex gap-4">
                    <button onClick={handleConvertUppercase} className={`text-white font-bold text-xs p-2 rounded-sm shadow-md`} style={{ background: "skyblue" }}>Convert UpperCase</button>
                    <button onClick={handleConvertLowercase} className={`text-white font-bold text-xs p-2 rounded-sm shadow-md`} style={{ background: "skyblue" }}>Convert LowerCase</button>
                    <button onClick={handleClearText} className={`text-white font-bold text-xs p-2 rounded-sm shadow-md`} style={{ background: "tomato" }}>Clear Text</button>
                    <button onClick={handleCopyToClipboard} className={`text-white font-bold text-xs p-2 rounded-sm shadow-md`} style={{ background: "green" }}>Copy To Clipboard</button>
                    <button onClick={handleRemoveExtraText} className={`text-white font-bold text-xs p-2 rounded-sm shadow-md`} style={{ background: "skyblue" }}>Remove Extra Text</button>
                </div>

                <div className="summary text-left mt-5">
                    <Body text={state} />
                </div>
            </div>
        </div>
    )
}

export default Home;

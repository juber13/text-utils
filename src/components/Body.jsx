import React from 'react'

const Body = ({text}) => {
    return (
        <div className=''>
            <div className="heading flex flex-col gap-4">
                <h1 className='text-3xl'>Summery Of Your Text</h1>
                <p>Nummber of words : {text.split(" ").length}</p>
                <p>Number of charecters : {text.split("").length}</p>
                <p>Reading Time:{text.split(" ").length / (120 / 60)}</p>
            </div>

            <div className="previewDocument mt-3">
            <h3 className='text-3xl text-center'>Preview Of Your Text</h3>
                <textarea readOnly  value={text}  name="" id="" cols="10" rows="2" className='border mt-5 p-3 resize-none w-full text-2xl'></textarea>
            </div>
        </div>
    )
}

export default Body
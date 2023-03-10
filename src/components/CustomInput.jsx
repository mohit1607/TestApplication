import React, { useEffect, useState } from 'react'

const CustomInput = ({
    onKeyUp = () => {},
    setInput = () => {},
    placeHolderText='user Id',
}) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        setInput(value)
        // console.log(value)
    },[value])

    return (
        <div className='mt-4 w-full bg-white overflow-hidden rounded-md flex'>
            <input className='w-[85%] h-12 tracking-wide focus:outline-none px-4'
            autoFocus
            placeholder={placeHolderText}
             type='text' onChange={(e) => setValue(e.target.value)} value={value} onKeyUp={onKeyUp}/>
        </div>
  )
}

export default CustomInput
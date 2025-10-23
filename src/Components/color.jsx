import React, { useState } from 'react'

function Color() {
  const [color, setColor] = useState('blue')
  const [color2, setColor2] = useState('blue')

  const handleRGBColor = () => {
    // generate random rgb color

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    setColor(`rgb(${r},${g},${b})`)

  }

  const handleHEXColor = () => {

    // generate random hex color
    const hex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
    setColor(hex)

    const hex2 = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'1')
    setColor2(hex2)
  }
  return (
    <>
      <div className='container' style={{
        background:color,
        height: '10vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
      
        }}>

        <button className='btn-primary' onClick={handleRGBColor}>RGB color</button>
        <button className='btn-primary' onClick={handleHEXColor}>Hex color</button>
      </div>
      
      <div className='container' style={{
        background:color2,
        height: '90vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
      
        }}>

        <h1 style={{color:color}}>I Love My Country</h1>

      </div>
    </>
  )
}

export default Color


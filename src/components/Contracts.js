import React from 'react'
import Nav from './Nav'
import '../styles/Contracts.css'

const Contracts = () => {
  return (
    <div className='contracts-wrapper'>
    <Nav />

<div className='contracts-main'>

<ul className='contracts-addresses'>

<li>$WETH: 0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C</li>

<li>$DAI: 0xefD766cCb38EaF1dfd701853BFCe31359239F305</li>

<li>$USDC: 0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07</li>

<li>$USDT: 0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f</li>

<li>$HEX: 0x57fde0a71132198bbec939b98976993d8d89d225</li>

</ul>


    <button><a href="https://bridge.pulsechain.com/#/bridge" alt="brigde link"> Link to Brigde Site </a></button>


<ul>
    <li >SOURCE</li>
    <li className='img-div'><img src="/contracts_screenshots.png" alt="contract source" className='source-img' /> </li>
</ul>

</div>

    </div>
  )
}

export default Contracts
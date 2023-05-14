import React from 'react';
import '../styles/Rpc.css'
import Nav from './Nav';

const RPCsetup = () => {
  return (
    <div className='rpc-wrapper'>
    <Nav />

<ul className='rpc-main'>

<li>
Network Name:
PulseChain
</li>

<li>
New RPC URL:
https://rpc.pulsechain.com
</li>

<li>
Chain ID:
369
</li>

<li>
Currency Symbol:
PLS
</li>

<li>
Block Explorer:
https://scan.pulsechain.com
</li>

</ul>

    </div>
  )
}

export default RPCsetup
import React from 'react'
import './mint.css';
import {Base,BaseWithChain} from '../imgs/nfts/nfts';
import {useNavigate} from 'react-router-dom';
export default function Mint() {
  let navigate = useNavigate();
  return (
    <><div className="mint-container">
          <img id="mint-pic" src={BaseWithChain} />
          <div className="text-wrapper">
              <h1>Mint you're Phoenix!</h1>
              <p>Unlock premium benefits, and earn lots of money!</p>
              <a className="btn" id="coming-soon">Coming Soon!</a>
          </div>
      </div><a className="btn" id="connect-wallet">Connect Wallet</a><a className="btn" onClick={()=>{navigate('/')}} id="back">Back</a></>
  )
}

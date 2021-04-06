import React, {useState} from 'react';
import Logo from './java.png';
import Rjs from './rjs.png';
import './javascript.css';

const Reactjs = (props) => {

  const [follow, followers] = useState(1100);

  const handleIncrease = () => {
    followers(prev => prev + 1);
  }

  return (
    <div className='one'>
      <div className='image'>
      <img src={Rjs} className='sizes'/>
      </div>
      <div>
        <h1 className='ttl'> JavaScript </h1>
        <h1 className='dot'> <img src={Logo} className='size'/> </h1>
        <h4 className='des'> Java & I aren't the same </h4>
        <h3 className='nd'> {follow} </h3>
        <h4 className='btn'> Followers </h4>
        <h3 className='nf'> 29 </h3>
        <h4 className='btm'> Following </h4>
        <button className='fb' onClick={handleIncrease}> <p className='ck'>Follow </p></button>
        <h4 className='bio'> Hey guys! My name is JavaScript, short for JS, and I'm a programming language that conforms to the ECMAScript specification.</h4>

      </div>
    </div>
  )
}

export default Reactjs;

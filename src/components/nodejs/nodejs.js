import React, {useState} from 'react';
import Logo from './node.png';
import Rjs from './rjs.png';
import './nodejs.css';

const Reactjs = (props) => {

  const [follow, followers] = useState(100);

  const handleIncrease = () => {
    followers(prev => prev + 1);
  }

  return (
    <div className='one'>
      <div className='image'>
      <img src={Rjs} className='sizes'/>
      </div>
      <div>
        <h1 className='ttl'> Node JS </h1>
        <h1 className='dot'> <img src={Logo} className='size'/> </h1>
        <h4 className='des'> Your favorite runtime environment</h4>
        <h3 className='nd'> {follow} </h3>
        <h4 className='btn'> Followers </h4>
        <h3 className='nf'> 13 </h3>
        <h4 className='btm'> Following </h4>
        <button className='fb' onClick={handleIncrease}> <p className='ck'>Follow </p></button>
        <h4 className='bio'> Hey guys! My name is Node.js and I'm an open-source, cross-platform, back-end JavaScript runtime environment. A V8 engine keeps me running and it executes JavaScript code outside a web browser.</h4>

      </div>
    </div>
  )
}

export default Reactjs;

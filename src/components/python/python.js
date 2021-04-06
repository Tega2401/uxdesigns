import React, {useState} from 'react';
import Logo from './python.png';
import Rjs from './rjs.png';
import './python.css';

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
        <h1 className='ttl'> Python </h1>
        <h1 className='dot'> <img src={Logo} className='size'/> </h1>
        <h4 className='des'> I tend to get confused with the snake python</h4>
        <h3 className='nd'> {follow} </h3>
        <h4 className='btn'> Followers </h4>
        <h3 className='nf'> 13 </h3>
        <h4 className='btm'> Following </h4>
        <button className='fb' onClick={handleIncrease}> <p className='ck'>Follow </p></button>
        <h4 className='bio'> Hey guys! My name is Python and I'm an interpreted, high-level and general-purpose programming language. My look emphasizes code readability with its notable use of significant indentation.</h4>

      </div>
    </div>
  )
}

export default Reactjs;

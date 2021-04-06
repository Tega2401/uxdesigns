import React, {useState} from 'react';
import Logo from './logo.png';
import Rjs from './rjs.png';
import './reactjs.css';

const Reactjs = (props) => {

  const [follow, followers] = useState(1500);

  const handleIncrease = () => {
    followers(prev => prev + 1);
  }

  return (
    <div className='one'>
      <div className='image'>
      <img src={Rjs} className='sizes'/>
      </div>
      <div>
        <h1 className='ttl'> React JS </h1>
        <h1 className='dot'> <img src={Logo} className='size'/> </h1>
        <h4 className='des'> Your favorite js framework</h4>
        <h3 className='nd'> {follow} </h3>
        <h4 className='btn'> Followers </h4>
        <h3 className='nf'> 50 </h3>
        <h4 className='btm'> Following </h4>
        <button className='fb' onClick={handleIncrease}> <p className='ck'>Follow </p></button>
        <h4 className='bio'> Hey guys! My name is React and I'm an open-source, front end, JavaScript library for building user interfaces. My parents are the infamous Facebook so I have a lot of money. I have a brother named React Native.</h4>

      </div>
    </div>
  )
}

export default Reactjs;

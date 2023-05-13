import React, {useState} from 'react';
import Counter from './components/Counter.jsx'
import './App.css'

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(prev => prev + 1);
  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '❄️'} 
      </div>
      <div className='counters'>
        <Counter total = {count} onClick={handleClick}/>
        <Counter total = {count} onClick={handleClick}/>
      </div>
    </div>
  )
}
// AppCounter 에 토탈 카운트가 저장되어야 한다.
// 각각의 카운트는 개별적인 카운트를 가지고 있어야한다. 전체적으로 클릭된 카운터의 갯수도 가지고있어야한다. 
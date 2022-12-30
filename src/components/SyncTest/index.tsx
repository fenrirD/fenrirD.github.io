import React, {useState} from 'react';

const SyncTest = () => {

  const [foods, setFoods] = useState([]);

  function sleep(ms) {
    const loopTime = Date.now() + ms;
    while (Date.now() < loopTime) {
    }
  }

  function order() {
    const foods = ['피자', '치킨', '물'];
    foods.forEach(cook);
  }

  function cook(food) {
    const ms = Math.floor(Math.random() * 10000);
    console.log('조리 시간:', ms);
    sleep(ms);
    serve(food, ms);
    // setTimeout(()=> {
    //   serve(food, ms)
    // },ms)
  }

  function serve(food, time) {
    time = time / 1000;
    setFoods((old) => [...old, {food, time}]);
    console.log("서빙 : ", food);
  }

  return (
    <div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
      <div onClick={order} style={{display: 'flex', flexDirection: 'column'}}>
        <button> 주문</button>
      </div>
      <hr/>
      <div>
        {
          foods.map(({food, time}, idx) => <div key={"food_" + idx}>음식:{food}, 시간: {time} 초</div>)
        }
      </div>
    </div>
  )
}

export default SyncTest
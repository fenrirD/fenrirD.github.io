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

  function getImage(src){
    return new Promise((resolve, rejected)=>{
      try {
        const img = new Image();
        img.src=src;
        rejected(img)
      } catch (e) {
        new Error(e)
      }
    })
  }

  function resizeImage(img) {
    img.width = 150;
    img.height= 150;
    return "바보"
  }

  // function getImage(src:string, callback:Function){
  //   try {
  //     const img = new Image();
  //     img.src=src;
  //     callback(img)
  //   } catch (e) {
  //     new Error(e)
  //   }
  //
  // }

  // function resizeImage(img:HTMLImageElement, callback) {
  //   img.width = 150;
  //   img.height= 150;
  //   callback(img)
  // }
  getImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B8c7i0OCqgXJiV7al7cTXiaAjDWEHharTg&usqp=CAU")
    .then((res)=>{
      console.log('first ',res.width, res.height)
      return resizeImage(res)
    })
    .then((res)=>{
      console.log('second ',res)
    })
    .catch((e)=>{
      console.error(e)

      throw new Error("바보야 에러야")
    })

  // getImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B8c7i0OCqgXJiV7al7cTXiaAjDWEHharTg&usqp=CAU",(img,e)=>{
  //   console.log(e)
  //   resizeImage(img, ()=>{
  //     console.log(img, img.width, img.height)
  //   })
  //   new XMLHttpRequest().send()
  // })


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
      <div>
      </div>
    </div>
  )
}

export default SyncTest
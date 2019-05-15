const setup=()=>{
    const btn=document.createElement('button');
    let smokeWidth = '300px';

    const applyAnimation = (elem) => {
        console.log(elem);

        // elem.style.animation = 'moveBike 4s linear 0s forwards'
        let source = "./biker.mp3"
        let audio = new Audio()

        //
        audio.addEventListener("load", function () {
            audio.play();
        }, true);

        //
        audio.autoplay = true;
        audio.src = source;

    }

    applyAnimation(document.querySelector('.bike'));

    const takeOffPx = (bikeLPos) => {

        bikeLPos = bikeLPos.getPropertyValue('left');
        bikeLPos = bikeLPos.split('').slice(0, bikeLPos.split('').indexOf('p')).join('') -
                    smokeWidth.split('').slice(0, smokeWidth.split('').indexOf('p')).join('') - 20 + 'px';
        return bikeLPos
    } 

   

    document.querySelector('.bike').addEventListener('animationstart', () => {
        // alert('started');


    // document.querySelector('main').appendChild(audio);

    })
    document.querySelector('.bike').addEventListener('animationend',()=>{
               let bikePos = window.getComputedStyle(document.querySelector('.bike'));

               let bikeLPos=takeOffPx(bikePos)
               

                let text=['PROFILE','EDUCATION','WORK-EXPERIENCE','TECHNICAL SKILLS'];
                let smokeAnimation = ['smokeAnimation1', 'smokeAnimation2', 'smokeAnimation3', 'smokeAnimation4'];
               console.log('ANIMATION ENDED. BIKE POSITION:-'+bikeLPos);
               for (let i = 0, j = 500; i < 4; i++, j += 1500) {
                                  let smoke = document.createElement('div');

                    setTimeout(() => {
                        smoke.innerHTML += `
                        <div id=smoke${i} 
                                style="width: ${smokeWidth}; height: 100px; position: absolute;
                                display: flex; justify-content: center; align-items: center;
                                background: #cccccc;border-radius: 50px 50px;
                                left: ${bikeLPos}; top: 500px; color: black; font-size: 25px;
                                text-align: center; opacity: 0;
                                animation: ${smokeAnimation[i]} 4s linear 1 forwards;
                        ">${text[i]}
                        </div>`
                        document.querySelector('main').appendChild(smoke);
                    }, j)

               }
           
     
    })
 


}
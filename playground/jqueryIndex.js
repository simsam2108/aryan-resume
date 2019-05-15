let setup=(function(){

   $(document).ready(function(){
       
       let windowWidth=$('main').width();
       let windowHeight = $('main').height();


    
       $('#bwheel,#fwheel').addClass('rotateWheel');

       let fWheelWidth=0;
       let bikeImgWidth=0;
       let bikeImgHeight=0;

       if (windowHeight / windowWidth > 1.5) {
               fWheelWidth = (windowWidth * 95 / 1368) + 20;
                 bikeImgWidth = windowWidth * 180 / 700
                 bikeImgHeight = windowHeight * 158 / 1400
       } else if (windowHeight / windowWidth < 1.5 && windowHeight / windowWidth > 1.2) {
                fWheelWidth = windowWidth * 100 / 1368
                bikeImgWidth = windowWidth * 180 / 1100
                bikeImgHeight = windowHeight * 158 / 1400
       } else {
             fWheelWidth = windowWidth * 85 / 1368
             bikeImgWidth = windowWidth * 180 / 1368
             bikeImgHeight = windowHeight * 158 / 720

       }

       $('#bikeImg').css({width:bikeImgWidth, height:bikeImgHeight})
       $('#fwheel').css({width:fWheelWidth, height:fWheelWidth})
       $('#bwheel').css({width:fWheelWidth, height:fWheelWidth})

       let WheelW = $('#fwheel').width();
       let WheelH = $('#fwheel').height();
       let bikeImgInitLPos=WheelW/2;
       let WheelTPos = -(WheelW/2)

       $('#bikeImg').css({left:bikeImgInitLPos})
              $('#bikeImg').css({bottom:0})

       $('#fwheel').css({left:bikeImgWidth})
        $('#fwheel').css({top:WheelTPos})

       $('#bwheel').css({left:0})
      $('#bwheel').css({top:WheelTPos})



       let section=['RESUME'];
       $('#cloud2').css({
           left: $('#landingPage').width()-$('#cloud2').width()
       });
              
       let i=0;
           setTimeout(()=>{
               while (i < 100) {
                   $('#cloud1').animate({
                       left: $('#landingPage').width(),
                   }, 40000, "linear", function () {
                       $(this).css({ left: 0 });
                   })


                   $('#cloud2').animate({
                       left: -($('#landingPage').width() - $('#cloud2').width()),
                   }, 42000, "linear", function () {
                       $(this).css({
                           left: windowWidth
                       });
                   })
                   i++;
               }

               //    $('#bwheel,#fwheel').addClass('rotateWheel');
               let bikeStopPos = $('#landingPage').width() - ($('#landingPage').width()  / 25);

               console.log(windowWidth + ':' + bikeStopPos);
               let fwheelStopPos = bikeStopPos;
               console.log($('#fwheel').position().left);
               let bwheelStopPos = bikeStopPos - ($('#fwheel').position().left - $('#bwheel').position().left);
               bikeImgStopPos = bikeStopPos - ($('#fwheel').position().left - ($("#fwheel").width() / 2)) - 5;


               console.log(`FOR ${windowWidth}X${windowHeight} the Bike-Wheel dimensions 
       are ${WheelW}X${WheelH} AND THE BIKE SIZE IS ${bikeImgWidth}X${bikeImgHeight}. THE BIKE STOPPING POSITION
       ARE FWHEEL:- ${bikeStopPos}, BIKEIMG:- ${bikeImgStopPos}, BWHEEL:- ${bwheelStopPos}  `);
               $('#landingPage').addClass('landingPage1')

               $('#bwheel').animate({ left: bwheelStopPos }, 5500, "linear");
               $('#fwheel').animate({ left: fwheelStopPos }, 5500, "linear")
               $('#bikeImg').animate({ left: bikeImgStopPos }, 5500, "linear", function () {
                   $('#bwheel,#fwheel').removeClass('rotateWheel');

                   section.forEach((sec, ind) => {
                       //    console.log(delay);
                       smokeCl = `smokeCl${ind}`
                       if (!$('div').hasClass('smokeCl0')) {
                           $('#landingPage').append(`<div id="smoke"
                             class=${smokeCl}></div>                    
                             `);
                           $('.' + smokeCl).css({
                               left: bwheelStopPos - $('#bwheel').width(),
                               top: $('#bikeImg').position().top + $('#bikeImg').height() / 2, opacity: "0.6",
                               cursor: "pointer"
                           })

                           topPos = $('#smoke').height()
                        //    $('.' + smokeCl).addClass('smokeAnim');
                           let smokeLPos = bikeImgStopPos-windowWidth/2;
                           console.log('smokeLPos:-' + smokeLPos);

                           $('.' + smokeCl).animate({ left: smokeLPos, top: "100px"},10000, "swing",function(){
                               $('.smokeAnim').append('<p>RESUME</p>')
                               $('.smokeCl0').mouseenter(function () {

                                   setTimeout(() => {

                                       $('#landingPage').delay(200).animate({
                                           right: "100vw",
                                       }, 500, "linear")

                                       $('#resume').delay(200).animate({
                                           right: "100vw",
                                       }, 500, "linear", function () {
                                           $('#cloud1').remove();
                                           $('#cloud2').remove();
                                           $('#smoke').remove();
                                           $('.smokeCl0').remove();
                                              $('audio').remove();

                                       })

                                   }, 300)
                               })
                           }).addClass('smokeAnim');
                         
                       }

                   })

               }).append('<audio autoplay> <source src="../sounds/biker.mp3"></audio>')
        

           },2000) 
   
           
       

   })
}())

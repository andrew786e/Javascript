(function(){

    "use strict"
    const myimages = ["image1.jpg" ,"image2.jpg" ,"image3.jpg" ,"image4.jpg" , "image5.jpg" ] ;
    let currentImage = 0 ; 

    document.getElementById('next').onclick = nextPhoto ;

    function nextPhoto(){
        currentImage++ ;

        if(currentImage > 4){
            currentImage = 4 ;
        }

        document.getElementById('myimage').src = myimages[currentImage] ;
    }

    document.getElementById('previous').onclick = nextPhoto_prev ;

    function nextPhoto_prev(){
        currentImage-- ;

        if(currentImage < 0){
            currentImage = 0 ;
        }
        
        document.getElementById('myimage').src = myimages[currentImage] ;
        }
})()
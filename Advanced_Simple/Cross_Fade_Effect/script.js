(function(){
    "use strict"
    let currentImage = 0 ;
    const myphotos = ['slides/image1.jpg','slides/image2.jpg','slides/image3.jpg','slides/image4.jpg','slides/image5.jpg',] ;
    const container  = document.getElementById('content') ;
    const nextBtn = document.getElementById('next') ;
    const prevBtn  = document.getElementById('previous') ;

    var swapImg = function(count){
        const newSlide = document.createElement('img') ;
        newSlide.className = 'fadeinimg' ; 
        newSlide.src = myphotos[count] ; 
        container.appendChild(newSlide) ;

        if(container.children.length > 2){
            container.removeChild(container.children[0]) ;
        }
    }

    nextBtn.addEventListener('click', function(event){
        event.preventDefault() ;

        currentImage++ ;
        if(currentImage > myphotos.length - 1){
            currentImage = 0 ;
        }

        swapImg(currentImage) ;

    }) ;

    prevBtn.addEventListener('click', function(event){
        event.preventDefault() ;

        currentImage-- ;
        if(currentImage < 0){
            currentImage = 4 ;
        }

        swapImg(currentImage) ;


    }) ;
})() ;
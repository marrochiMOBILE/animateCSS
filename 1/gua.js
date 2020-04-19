function animateCSSHome(x, y){
    function animateCSS(element, animationName, infinite, callback, delay, kecepatan) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName, infinite, delay, kecepatan)
    
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName, infinite, delay, kecepatan)
            node.removeEventListener('click', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
            
        
        node.addEventListener('click', handleAnimationEnd)
    }
    
    animateCSS(x[0], x[1] ,x[2], function() {
        
        const node2 = document.querySelector(y[0])
    
        function handleAnimationEnd2() {
            node2.classList.add('animated', y[1], y[2], y[3], y[4])
            node2.removeEventListener('dblclick', handleAnimationEnd2)
        }
        
        node2.addEventListener('dblclick', handleAnimationEnd2)
       
    }, x[3], x[4])
}
# animateCSS

dibawah ini adalang link :

> https://daneden.github.io/animate.css/

cara penggunaanya gampang pertama anda dowload link dibawah ini dengan nama *** animate.css ***

> https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css

masukan link dibawah ini ke html denagn source yang sudah kita buat tadi yaitu animate *** animate.css ***

```html
    <head>
    <link rel="stylesheet" href="animate.css">
    </head>
```

kemudian tinggal gunakan ini contohnya :

```html
<h1 class="animated infinite bounce delay-2s">Contohnya Ke gini</h1>
```

> infinite untuk terus pengulangan tanpa henti. jika tidak mau pakai hapus aja

*** `contoh` *** 
> ```<h1 class="animated bounce delay-2s">Contohnya Ke gini</h1>```



### jenis animate class
| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |

### delay class
| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-1s` | `1s`       |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |


### kecepatan

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |



## contoh 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
        <h1 class="animated bounce pulse delay-2s">contohnya ke gini</h1>
</body>
</html>
```

## contoh 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
       <center>
            <br>
            <br>
            <h1 class="my-element">
                ini menggunakan gabungan dengan js yang sederhana
            </h1>
       </center>

       <script>    
        const element =  document.querySelector('.my-element')
        element.classList.add('animated', 'bounceOutLeft')
       </script>
</body>
</html>
```

## contoh 3
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
       <center>
            <br>
            <br>
            <h1 class="my-element">
                ini menggunakan gabungan dengan js yang sederhana
            </h1>
       </center>

       <script>    
        const element =  document.querySelector('.my-element');
        element.classList.add('animated', 'bounce', 'infinite');
        element.addEventListener('mouseover', function() { element.classList.remove('infinite') });
       </script>
</body>
</html>
```

## contoh 4
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
       <center>
            <br>
            <br>
            <h1 class="my-element">
                ini menggunakan gabungan dengan js yang sederhana
            </h1>
       </center>

       <script>    
        function animateCSS(element, animationName, infinite) {
            const node = document.querySelector(element)
            node.classList.add('animated', animationName, infinite)

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName, infinite)
                node.removeEventListener('click', handleAnimationEnd)

                if (typeof callback === 'function') callback()
            }

            node.addEventListener('click', handleAnimationEnd)
        }
        animateCSS('.my-element', 'bounce' ,'infinite')
       </script>
</body>
</html>
```

## contoh 5
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
       <center>
            <br>
            <br>
            <h1 class="my-element ">
                ini menggunakan gabungan dengan js yang sederhana
            </h1>
       </center>

       <script>    
        function animateCSS(element, animationName, infinite, callback) {
            const node = document.querySelector(element)
            node.classList.add('animated', animationName, infinite)

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName, infinite)
                node.removeEventListener('click', handleAnimationEnd)

                if (typeof callback === 'function') callback()
            }
                
            
            node.addEventListener('click', handleAnimationEnd)
        }

        animateCSS('.my-element', 'bounce' ,'infinite', function() {
            
            const node2 = document.querySelector('.my-element')

            function handleAnimationEnd2() {
                node2.classList.add('animated', 'bounce', 'infinite')
                node2.removeEventListener('dblclick', handleAnimationEnd2)

                if (typeof callback === 'function') callback()
            }
                
            
            node2.addEventListener('dblclick', handleAnimationEnd2)
           
        })
       </script>
</body>
</html>
```

## contoh 6

#### html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="animate2.css">
    <title>Document</title>
</head>
<body>
       <center>
            <br>
            <br>
            <h1 class="my-element ">
                ini menggunakan gabungan dengan js yang sederhana
            </h1>
       </center>


       
       <script src="gua.js"></script>
       <script>    

        let animateArray = new Array()
        animateArray[0] = '.my-element';
        animateArray[1] = 'bounce';
        animateArray[2] = 'infinite';
        animateArray[3] = 'delay-1s';
        animateArray[4] = 'faster';
        let setelahAnimateArray = ['.my-element', 'flipInX', 'infinite', 'delay-1s', 'slow'];
        animateCSSHome(animateArray, setelahAnimateArray); 
       </script>
</body>
</html>
```
#### gua.js
```javascript
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
```
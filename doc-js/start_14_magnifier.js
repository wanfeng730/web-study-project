window.addEventListener('load', function(){
    var imgDiv = document.getElementsByClassName('img-div')[0];
    var mask = document.getElementsByClassName('mask')[0];
    var magDiv = document.getElementsByClassName('mag-div')[0];
    var magImg = document.getElementById('mag-img');

    imgDiv.addEventListener('mouseover', function(e){
        console.log(e);
        mask.style.display = 'block';
        magDiv.style.display = 'block';
        
    });

    imgDiv.addEventListener('mouseout', function(e){
        mask.style.display = 'none';
        magDiv.style.display = 'none';
    });

    console.log(imgDiv);
    imgDiv.addEventListener('mousemove', function(e){
        // console.log(e);
        // 鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        console.log(mask.offsetWidth);

        // mask在盒子内的坐标(若小于0则限制为0)
        var maskLeft = (x - mask.offsetWidth / 2);
        var maskTop = (y - mask.offsetHeight / 2);
        if(maskLeft < 0){
            maskLeft = 0
        }
        if(maskTop < 0){
            maskTop = 0;
        }
        var maskLeftMax = this.offsetWidth - mask.offsetWidth;
        var maskTopMax = this.offsetHeight - mask.offsetHeight;
        if(maskLeft > maskLeftMax){
            maskLeft = this.offsetWidth - mask.offsetWidth
        }
        if(maskTop > maskTopMax){
            maskTop = this.offsetHeight - mask.offsetHeight
        }
    
        console.log(maskLeft, maskTop);
        mask.style.left = maskLeft + 'px';
        mask.style.top = maskTop + 'px';

        // mask坐标向右下方向移动(maskLeft, maskTop),magImg要在放大画面的基点向左上方移动 5倍
        var magMoveLeft = -maskLeft * 5;
        var magMoveTop = -maskTop * 5;
        console.log(magMoveLeft, magMoveTop);
        
        magImg.style.left = magMoveLeft + 'px';
        magImg.style.top = magMoveTop + 'px';
        
    });
})



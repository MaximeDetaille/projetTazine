$(document).ready(function(){
    slogan = true;
    setInterval(function(){
        if(slogan){
            $('#slogan0').fadeOut(function(){
                $('#slogan1').fadeIn();
            });
            slogan = false;
        }else{
            $('#slogan1').fadeOut(function(){
                $('#slogan0').fadeIn();
            });
            slogan = true
        }

    },5000)
})
$( document ).ready(function() {
    
    $(function(){
        //Scroll to section
        $(".homeScrollButton").click(function() {
            $("body,html").animate(
                {
                scrollTop: $("#home").offset().top
                },
                800 //speed
            );
        });
    })
    
    $(function(){
        //Scroll to section
        $(".aboutScrollButton, #exploreScrollButton").click(function() {
            $("body,html").animate(
                {
                scrollTop: $("#about").offset().top
                },
                800 //speed
            );
        });
    })
    
    $(function(){
        //Scroll to section
        $(".portfolioScrollButton").click(function() {
            $("body,html").animate(
                {
                scrollTop: $("#portfolio").offset().top
                },
                800 //speed
            );
        });
    })
    
    $(function(){
        //Scroll to section
        $(".contactScrollButton").click(function() {
            $("body,html").animate(
                {
                scrollTop: $("#contact").offset().top
                },
                800 //speed
            );
        });
    })


    $(".recipeAppContainer").mouseenter(function(){
        $(this).children('.webPreview').html(
            '<video class="videoPreview" src="./media/recipeAppWebDemo.webm" controls="true" ></video>'
        )
    })
    $(".recipeAppContainer").mouseleave(function(){
        $(this).children('.webPreview').html(
            '<img src="./media/recipeAppWeb.jpg" alt="//recipeApp Web Preview"/>'
        )
    })

    
    $(".bempAppContainer").mouseenter(function(){
        $(this).children('.webPreview').html(
            '<video class="videoPreview" src="./media/bempWebDemo.webm" controls ></video>'
        )
    })
    $(".bempAppContainer").mouseleave(function(){
        $(this).children('.webPreview').html(
            '<img src="./media/bempWeb.jpg" alt="bempApp Web Preview"/>'
        )
    })
    
    $(".suspendAppContainer").mouseenter(function(){
        $(this).children('.webPreview').html(
            '<video class="videoPreview" src="./media/suspendAppWebDemo.webm" controls ></video>'
        )
    })
    $(".suspendAppContainer").mouseleave(function(){
        $(this).children('.webPreview').html(
            '<img src="./media/suspendAppWeb.jpg" alt="Suspend Clothing Web Preview"/>'
        )
    })

    $(".mtxContainer").mouseenter(function(){
        $(this).children('.webPreview').html(
            '<video class="videoPreview" src="./media/mtxWebDemo.webm" controls ></video>'
        )
    })
    $(".mtxContainer").mouseleave(function(){
        $(this).children('.webPreview').html(
            '<img src="./media/mtxWeb.jpg" alt="MTXchange Web App Preview" />'
        )
    })

    $(".tigerAppContainer").mouseenter(function(){
        $(this).children('.webPreview').html(
            '<video class="videoPreview" src="./media/tigerWebDemo.webm" controls ></video>'
        )
    })
    $(".tigerAppContainer").mouseleave(function(){
        $(this).children('.webPreview').html(
            '<img src="./media/tigerWeb.jpg" alt="Tiger Saysavanh Portfolio Preview" />'
        )
    })
});

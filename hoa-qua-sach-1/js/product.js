$(document).ready(function(){
    ///////// FILTER //////// 

    $(".product__section-header").children('span').addClass('isOpen')
    $(".product__section-header").siblings().addClass('isOpen')
    $(".product__section-header").click(function(){
        console.log("ok1")
        $(this).children('span').toggleClass('isOpen')
        $(this).siblings().toggleClass('isOpen')

        
        
    });

    $(".product__btn--white").click(function(e){
        e.preventDefault()
        $("input").prop("checked", false);
    })
     
     
    $(window).on("load resize", function() {
        let width = $(this).width();
        console.log(width)

        if(width <= 991) {
            
            $("#product__filter").addClass('isMobile')
        }else $("#product__filter").removeClass('isMobile')

    })

    $("#product__filter-icon").click(function() {
        $("#product__filter").removeClass('isClose')
    })

    $("#product__close p").click(function() {

        console.log('close')
        $("#product__filter").addClass('isClose')
    })
})
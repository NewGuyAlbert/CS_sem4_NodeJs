//1
$('body').css( 
    {textAlign: "center"
});

//2
$('#title h2').text("New title")

//3
$('.subtitle-box h3').css("background-color","pink")

//4
$(".temp").css({
    display: "none"
})

//5
$("ol li.reason").css("border-style","dashed")

//6
$("ol li").css("font-weight","bold")

//7
$("ol li:last").css("text-decoration","underline")
//$("ol li").last().css("text-decoration","underline")

//8
$("ol li:nth-child(2)").css("text-decoration","line-through")
//$("ol li:eq(1)").css("text-decoration","line-through")

//9
$("ul > *").css("font-style","italic")

//10
$("ul span").css("font-size", ".5em")

//11
$(".unused-box label").remove();

//12
$(".unused-box").append("<p>second sentence</p>");

//13
$(".unused-box p").before("<p>first sentence</p>");

//14
$(".unused-box").attr('class','used-box');

//15

$(document).ready(() => {
    $(".used-box").click(() => {
        $(".used-box").toggleClass("used-boxed-clicked");
    });
});

//16
$("#submit-button").mouseover(function(){
    $(this).attr('title',"CLICK ME ALREADY!");
});

//17
// $("#submit-button").click(()=>{
//     let count = $("ol li").length+1;
//     $("#first-list").append(`<li>Reason ${count}</li>`)
// });

//18
$("#submit-button").click(()=>{
    console.log($("#submit-button").parent());
})
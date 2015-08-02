
$(function(){
    console.log('fuck');
    $("#new_comment").on("ajax:send", function(e, data, status, xhr){
        console.log('sussusucusucsus');
        console.log(e);
        console.log(data);
        console.log(status);
        console.log(xhr);
    })
});
// $("#comment-button").on("click", function(){
//     $.ajax(url: "/post").done (html) ->
//         $('#comment-area').append html
// });


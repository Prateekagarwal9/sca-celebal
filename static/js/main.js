$(document).ready(function(){
    $(".generate").click(function(){
        $.ajax({
            type: "get",
            url: "/all/",
            contentType: 'application/json',
            success: function(data){
                $('#generateuniqueid').val(data['output']);
            },
            error: function(){
                alert("error");
            }
        });
    });
});
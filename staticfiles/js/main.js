$(document).ready(function(){
    $(".generate").click(function(){
        $.ajax({
            type: "get",
            url: "http://localhost:8000/all/",
            contentType: 'application/json',
            success: function(data){
                $('#generateuniqueid').val(data['output']);
            },
            error: function(){
                alert("error");
            }
        });
    });
    $('#finalsubmit').click(function(a,b){
    var a = {};
    var c = [];
    console.log("")
    $('input,select').each(function(j,k){
    console.log($(j));
//    a[$(j).attr('name')] = $(j).val();
//    c.push(a);
//    console.log(j,k);
//    console.log($(k).val());
    })
    console.log(b)
    })
});
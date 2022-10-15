$(document).ready(function(){
    $("#hide").click(function(){
    $("#p1").hide(2000);
    });
    $("#show").click(function(){
    $("#p1").show(400);
    });


    $("#change_back_color").click(function(){
        $("#div3").css("background-color","grey")
      });

    $("#remove_all").click(function(){
        $("#div3").css("background-color","red").fadeToggle(3000);
    });

    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });

    $("#btn1").click(function(){
        $("#p1").before("<b>Before</b>");
      });
    
      $("#btn2").click(function(){
        $("#p1").after("<i>After</i>");
      });

    $("#second_button").click(function(){
        var div=$("#secoond_div");  
        div.animate({height:'80px',opacity:'0.4'},"slow");
        div.animate({width:'550px',opacity:'1'},"slow");
        $("#second_p").fadeIn(800);
        $("#second_p").animate({fontSize:'2em'},1000 , function(){
            alert("The animate has been shown");
        });
      });

      $("#btn3").click(function(){
        $("#first,#second").toggleClass("blue");
      });

      $("#btn4").click(function(){
        $("#div11").load('demo_test.html');
      });




      $('#postForm').submit(function(e){
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, {title:title, body:body}).done(function(data){
            console.log('Post Saved');
            console.log(data);
        });

        $("#win").show(400);
    });
});
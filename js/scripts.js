$(document).ready(function(){
  $("#form").submit(function(event){
    var color = $("input:radio[name=color]:checked").val();
    var born = parseInt($("input#born").val().slice(0,4));
    var area = $("#area").val();
    
    if(color === "Blue" && born > 1975 && area === "North"){
      $("#lib").show();
      $("#mod").hide();
      $("#con").hide();
    }else if(color === "Red" && born <= 1975 && area === "South"){
      $("#con").show();
      $("#mod").hide();
      $("#lib").hide();
    }else{
      $("#mod").show();
      $("#con").hide();
      $("#lib").hide();
    }


    event.preventDefault();
  })
}) 
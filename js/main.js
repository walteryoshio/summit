
$(function(){

    //get the bar chart canvas
    var ctx = $("#myChart");
  
    //bar chart data
    var data = {
      labels: ["match1", "match2", "match3", "match4", "match5"],
      datasets: [
        {
          label: "",
          data: [10, 50, 25, 70, 40],
          backgroundColor: [
            "#E2CB6C",
            "#E2CB6C",
            "#E2CB6C",
            "#E2CB6C",
            "#E2CB6C"
          ],
      
        },
        {
          label: "TeamB Score",
          data: [20, 35, 40, 60, 50],
          backgroundColor: [
            "#83725D",
            "#83725D",
            "#83725D",
            "#83725D",
            "#83725D"
          ],
   
        }
      ]
    };
  
    //options
    var options = {
      responsive: true,
      title: {
        display: false,
        position: "top",
        text: "Bar Graph",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: false,
        position: "bottom",
        labels: {
          
          fontColor: "#333",
          fontSize: 16
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    };
  
    //create Chart class object
    var chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options
    });
  });

  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  
  $(function () {
    $('.popover-body').append('<img src="../img/nav-money.png"');
  })

  // $('#check').click(function(){
  //   $('#comprovante1').css('background-color', 'black');
  // })


$(function(){
  var $checkboxes = $('input[name="check1"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#comprovante1').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#comprovante1').css('background-color', '#ffff')
    }
  });
});


$(function(){
  var $checkboxes = $('input[name="check2"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#comprovante2').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#comprovante2').css('background-color', '#ffff')
    }
  });
});

$(function(){
  var $checkboxes = $('input[name="check3"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#comprovante3').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#comprovante3').css('background-color', '#ffff')
    }
  });
});

$(function(){
  var $checkboxes = $('input[name="check4"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#comprovante4').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#comprovante4').css('background-color', '#ffff')
    }
  });
});

$(function(){
  var $checkboxes = $('input[name="check5"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#comprovante5').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#comprovante5').css('background-color', '#ffff')
    }
  });
});

$(function(){
  var $checkboxes = $('input[name="radio"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#relatorio').css('background-color', '#FFF0B4');
    }
    if(checked == false){
      $('#relatorio').css('background-color', '#ffff')
    }
  });
});

$(function(){
  var $checkboxes = $('input[name="radio"]');
  $checkboxes.change(function(){
    var checked = $(this).prop('checked');
    console.log(checked);
    if (checked == true){
      $('#btn-relatorio').removeAttr('disabled');
      $('#btn-relatorio').css('backgroundColor','#5E6BB4');
      $('#btn-relatorio').css('color','#fff');
    }
    if(checked == false){
      $('#relatorio').attr('disable')
    }
  });
});


function getOwnerData()
{

    $.ajax({
      type: "GET",
      contentType: "application/json",
        url: "/ownerdata",
        dataType: 'json',
      success:function (data){
          for (let i = 0; i <data.length ; i++) {
              $("#row").append("<tr></tr>");
              $("#row tr:last").append("<td>"+data[i].id+"</td>");
              $("#row tr:last").append("<td>"+data[i].firstName+"</td>");
              $("#row tr:last").append("<td>"+data[i].lastName+"</td>");
          }
      },
        error: function (){
            console.log("ERROR : ", e);
        }
    })

}

function getVetData()
{

    $.ajax({
      type: "GET",
      contentType: "application/json",
        url: "/vetdata",
        dataType: 'json',
        success:function (data){
            for (let i = 0; i <data.length ; i++) {
                $("#row").append("<tr></tr>");
                $("#row tr:last").append("<td>"+data[i].id+"</td>");
                $("#row tr:last").append("<td>"+data[i].firstName+"</td>");
                $("#row tr:last").append("<td>"+data[i].lastName+"</td>");
            }
        },
        error: function (){
            console.log("ERROR : ", e);
        }
    })


}
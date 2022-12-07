


function redirect(url){
    window.location.href = "/" + url;
}

function  getOwnerData()
{
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let lastName = params.get('lastName');

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/ownerdata?lastName="+lastName,
        dataType: 'json',
        success:function (data){
              for (let i = 0; i <data.length ; i++) {
                  let names = data[i].pets.map((item) => item.name);
                  $("#owners").append("<tr></tr>");
                  $("#owners tr:last").append("<td><a href='#' onclick='ownerDetailsView("+data[i].id+")'>"+data[i].firstName+" "+data[i].lastName+"</a></td>");
                  $("#owners tr:last").append("<td>"+data[i].address+"</td>");
                  $("#owners tr:last").append("<td>"+data[i].city+"</td>");
                  $("#owners tr:last").append("<td>"+data[i].telephone+"</td>");
                  $("#owners tr:last").append("<td>"+names.join(' ')+"</td>");
          }
      },
        error: function (e){
            console.log("ERROR : ", e);
        }
    })

}

function ownerDetailsView(id)
{
    window.location.href = "/ownerDetails?ownerId="+id;
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

function setOwnerDetailById(){
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId')

    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "/ownerById?ownerId="+ownerId,
        success: function(data) {
           $("#name").text(data.firstName+" "+data.lastName);
           $("#address").text(data.address);
           $("#city").text(data.city);
           $("#telephone").text(data.telephone);

            for (let i = 0; i < data.pets.length; i++) {
               $("#petName").text(data.pets[i].name);
               $("#petBirthDate").text(data.pets[i].birthDate);
               $("#petType").text(data.pets[i].petType.name);
               $("#visitDate").text(data.pets[i].petType.name);
               $("#description").text(data.pets[i].petType.name);
               $("#editPet").html("<a href='#' onclick='editPet("+ownerId+","+data.pets[i].id+")'>Edit Pet</a>");
               $("#addVisit").html("<a href='#' onclick='addVisit("+ownerId+","+data.pets[i].id+")'>Add Visit</a>");

            }
            $("#row").clone().appendTo("#pettable");
        },
        error: function() {
            alert("unable to create the record");
        }
    });
}

function getPetData()
{

}

function getPetById(){
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId');
    let petId = params.get('ownerId');

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/petData?ownerId="+ownerId+"&petId="+petId,
        dataType: 'json',
        success:function (data){
                $("#name").val(data.name);
                $("#dob").val(data.birthDate);
                $("#id").val(data.id);
                $("#petTypes").append("<option>"+data.petType.name+"</option>");
                $("#petTypes").val(data.petType.name).change();
        },
        error: function (){
            console.log("ERROR : ", e);
        }
    })

}

function submitPetData()
{
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId');
    let petId = params.get('ownerId');



    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/submitPetData?ownerId="+ownerId+"&petId="+petId,
        data: JSON.stringify
        ({'name':$("#name").val(),
            'birthDate':$("#dob").val(),
            'petType': $('#petTypes').find(":selected").val() ,'id': Number($('#id').val())}),
        dataType: 'json',
        success:function (){
            ownerDetailsView(ownerId);
        },
        error: function (e){
            console.log("ERROR : ", e);
        }
    })

}

function editPet(ownerId,petId){
    window.location.href = "/petForm?ownerId="+ownerId+"&petId="+petId;

}

function findOwner()
{
    let lastName = $("#lastName").val();
    window.location.href = "/owners?lastName="+lastName;
}

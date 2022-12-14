


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
function setInputField(data)
{
    $("#fname").val(data.firstName);
    $("#lname").val(data.lastName);
    $("#address").val(data.address);
    $("#city").val(data.city);
    $("#telephone").val(data.telephone);
}
function setOwnerDetailById(){
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId')

    if (ownerId == null)
        return

    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "/ownerById?ownerId="+ownerId,
        success: function(data) {
            setInputField(data);
           $("#name").text(data.firstName+" "+data.lastName);
           $("#address").text(data.address);
           $("#city").text(data.city);
           $("#telephone").text(data.telephone);
            $("#row .petName").text("abc");
            for (let i = 0; i < data.pets.length; i++) {
               $("#row .petName").text(data.pets[i].name);
               $("#row .petBirthDate").text(data.pets[i].birthDate);
               $("#row .petType").text(data.pets[i].petType.name);
               $("#row .visitDate").text(data.pets[i].petType.name);
               $("#row .description").text(data.pets[i].petType.name);
               $("#row .editPet").html("<a href='#' onclick='editPet("+ownerId+","+data.pets[i].id+")'>Edit Pet</a>");
               $("#row .addVisit").html("<a href='#' onclick='addVisit("+ownerId+","+data.pets[i].id+")'>Add Visit</a>");
                $("#row").children().clone().appendTo("#td1");
                $("#table").clone().appendTo("#td2");
            }

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
    let petId = params.get('petId');

    if(petId == null)
    {
        $("#button").html('Add Pet');
        return;
    }

    $("#button").html('Update Pet');



    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getPetData?ownerId="+ownerId+"&petId="+petId,
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



    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/submitPetData?ownerId="+ownerId,
        data: JSON.stringify
        ({'name':$("#name").val(),
            'birthDate':$("#dob").val(),
            'petType': $('#petTypes').find(":selected").val()}),
        dataType: 'json',
        success:function (){
            ownerDetailsView(ownerId);
        },
        error: function (e){
            console.log("ERROR : ", e);
        }
    })

}

function addOwner()
{
    let model = {
        'firstName':$("#fname").val(),
        'lastName':$("#lname").val(),
        'address': $('#address').val(),
        'city': $('#city').val(),
        'telephone': $('#telephone').val(),
    };
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/owners/new",
        data: JSON.stringify(model),
        dataType: 'json',
        success:function (result){
            ownerDetailsView(result);
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

function redirectToAddOwner()
{
    window.location.href = "/owners/new";
}


function redirectToUpdateOwner()
{
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId');
    window.location.href = "/owners/update?ownerId=" + ownerId;
}

function redirectToAddPet(){
    let url = new URL(window.location.href);
    const params = url.searchParams;
    let ownerId = params.get('ownerId');
    window.location.href = '/petForm?ownerId='+ownerId;
}
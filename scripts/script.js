let isImportant = false;
var isAsideVisible = true;

function toggleImportant(){

    let icon = $(".iImportant")

    if(isImportant)
    {
      icon.removeClass("fas").addClass("far");
      isImportant = false;

    }
    else
    {
        icon.removeClass("far").addClass("fas");
        isImportant = true;
    }


}

function toggleDetails(){

    let aside = $("aside");
    
    if(isAsideVisible)
    {
        aside.hide();
        isAsideVisible = false;
    }
    else
    {
        aside.show();
        isAsideVisible = true;
    }

}

function saveTask(){

    let tittle = $("#txtTitle").val();
    let date = $("#txtDueDate").val();
    let location = $("#txtLocation").val();
    let description = $("#txtDes").val();
    let participants = $("#txtPar").val();
    let color = $("#txtColor").val();

    console.log(tittle, date, location, description, participants, color);


    
}



function init(){

    console.log("Calendar");


    $("#btnSave").click(saveTask);
    $(".iImportant").click(toggleImportant);
    $("#btnToggleDetails").click(toggleDetails);

}

window.onload = init;
$(document).ready(function() {
    $("#submit").click(function() {
        var CurrentCost = $("#CallCost").val();
        $("#CallSave").html(`You would save R${CurrentCost*30/100}!`);
        // $("#CallSave").show();
    });
});
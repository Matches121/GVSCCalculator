var TotalCost = 0;

$(document).ready(function() {
    $("#submit").click(function() {
        var CurrentCost = $("#CallCost").val();
        $("#CallSave").html(`You would save R${CurrentCost*30/100}!`);
        TotalCost = TotalCost + (CurrentCost * 30 / 100);
        // $("#CallSave").show();
    });
});

$(document).ready(function() {
    $("#submit").click(function() {
        var CurrentCost = $("#EquipCost").val();
        $("#EquipSave").html(`You would save R${CurrentCost*15/100}!`);
        TotalCost = TotalCost + (CurrentCost * 15 / 100);
        // $("#CallSave").show();
    });
});

$(document).ready(function() {
    $("#submit").click(function() {
        var CurrentCost = $("#LineCost").val();
        if ($("ServiceProvider").val() === "Telkom") {
            $("#LineSave").html(`You would save R${CurrentCost}!`);
            TotalCost = TotalCost + (CurrentCost);
        } else {
            $("#LineSave").html(`You would save R${CurrentCost*30/100}!`);
            TotalCost = TotalCost + (CurrentCost * 30 / 100);
        };
    });
});

$(document).ready(function() {
    $("#submit").click(function() {
        $("#TotalSave").html(`You would save a Estimated Total of R${TotalCost}!`);
        // $("#CallSave").show();
        TotalCost = 0;
    });
});
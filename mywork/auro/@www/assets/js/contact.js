var dropdown_member = $(".dropdown_member");
dropdown_member.each(function () {
    var x = $(this).data('placeholder') || "";
    $(this).select2({
        placeholder: x,
        minimumResultsForSearch: Infinity,
        theme: "dropdownC",
        width: "100%",
    });
});
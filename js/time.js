$(function () {
    var seYear = $('#year');
    var date = new Date();
    var time = date.getFullYear();

    seYear.append('<option value="">Year</option>');
    //Tạo element rỗng chứa value year
    for (i = time; i >= 1900; i--) {
        seYear.append('<option value="' + i + '">' + i + '</option>');
    };
    $('#year').change(function () {
    //Đoạn code lấy id không viết bằng jQuery để phù hợp với đoạn code bên dưới
        var y = document.getElementById('year');
        var year = y.options[y.selectedIndex].value;
    })
})
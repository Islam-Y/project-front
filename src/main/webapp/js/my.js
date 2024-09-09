function show_List() {
    let url = "/rest/players";
    $.get(url, function (response) {
        $.each(response, function (i, item) {
            $("<tr>")
                .html("<td></td><td>"
                    + item.id + "</td><td>"
                    + item.name + "</td><td>"
                    + item.title + "</td><td>"
                    + item.race + "</td><td>"
                    + item.profession + "</td><td>"
                    + item.level + "</td><td>"
                    + new Date(item.birthday).toLocaleDateString() + "</td><td>"
                    + item.banned + "</td><td>")
                .appendTo("#table_1");
        });
    });
}
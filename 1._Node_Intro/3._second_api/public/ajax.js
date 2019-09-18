$(document).ready(() => {
    // add event handler for about me button
    let aboutmeIsClicked = true;
    $("#about-me-btn").click((event) => {
        if (aboutmeIsClicked) {
            $.get("/about", data => {    
                console.log(data);
                $(".about-me-content").append("<div>First name: " + data.firstName + "</div>");
                $(".about-me-content").append("<div>Last name: " + data.lastName + "</div>");
            })
        } else {
            $(".about-me-content").empty();
        }
        aboutmeIsClicked = !aboutmeIsClicked;
    });


    // create a form that posts to a new request handler on the server
    // this request handler should be called POST /aboutme 
    // (send the form with a body) the /aboutme should receive a body with a new firstName and Lastname

    // bonus: once posted to /aboutme it should change the now global aboutme variable
    // and calling GET /aboutme should allow for a different result

    // if you change the name in the get next time, see the new name
    $("#about-me-form-btn").click((e) => {
        e.preventDefault();
        console.log("form submitted")
        $.post("/aboutme", {
            firstName: $("#first-name").val(),
            lastName: $("#last-name").val()
        }, (data) => {
            console.log(data);
            $(".about-me-content-form").html(data.firstName + " " + data.lastName + "</div>");
        }, "json")
        return false
     });
});
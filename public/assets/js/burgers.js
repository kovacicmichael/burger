$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = true;
    console.log("this is eatern: " + eaten)

    var eatState = {
      eaten: eaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatState
    }).then(
      function() {
        console.log("changed eat state to", eaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event){
    var id = $(this).data("id");
    console.log(id);


    $.ajax("/api/burgers/delete/" + id, {
      type: "DELETE",
    }).then(function(){
      console.log("burger successfully deleted...");

      location.reload();
    })
  })

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

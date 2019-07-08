$(document).ready(function() {

    var userName = $("#username-input");
    var userEmail = "user@email.com";
    var userRole = "user";
    var userPassword = $("#password-input");

    $("#register").on("click", function (event) {
        event.preventDefault();
        // Wont submit the post if we are missing  Product Name, Details, Brand Name, or Units
        // if (!inputProductName.val().trim() || !details.val().trim() || !gender.val().trim() || !brandName.val().trim() || !units.val() || !unitPrice.val() ) {
        //   return;
        // }
        if (!userName.val().trim()) {
            return;
        }
        var newUser = {
            name: userName.val().trim(),
            email: userEmail,
            role: userRole,
            password: userPassword.val().trim()
        };
        console.log(newUser);
        postUser(newUser);
        // submitUser(newUser);

    });
   

    getUsers();

    function getUsers() {
        $.get("/users", function(data) {
          for (var i = 0; i < data.length; i++) {
            var row = createUserRow(data[i], i);
            $("#user-row").append(row);
          }
        });
    };

   

    function postUser(user) {
        $.post("/users", user, function() {
          console.log("posted");
        }).then(function() {
          $("#username-input").empty();
          location.reload();
        });
      }

      // Submits a new post and brings user to blog page upon completion
  // function submitUser(user) {
  //   $.post("/users", user, function() {
  //     window.location.href = "/users";
  //   });
  // }
    
      function createUserRow(user, index) {
        var userRow =
          "<tr>" + 
          "<th class='text-center' scope=\"row\">" +
          (index + 1) +
          "</th>" +
          "<td>" +
          user.name +
          "</td>" +
          "<td>" +
          user.email +
          "</td>" +  
          "</tr>";
        return userRow;
      }
    
});
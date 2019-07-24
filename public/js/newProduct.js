/* eslint-disable prettier/prettier */
// alert("test start");
//console.log("test start");
$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and survivor select
  var inputProductName = $("#ProductName");
  var details = $("#Details");
  var gender = $("#Gender");
  var brandName = $("#Brand");
  var units = $("#ProductUnits");
  var unitPrice = $("#UnitPrice");
 
  // Adding an event listener for when the form is submitted
  $("#newProd").on("submit", handleFormSubmit);
  
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // var url = window.location.search
  
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  //Get all the brand names options from Brands tabel to use in create new product.
  appendSurvivorOptions();
  function appendSurvivorOptions () {
    $.get("/brand", function (data) {
      for (var i = 0; i < data.length; i++) {
        $("#Brand").append("<option id=\"opt-" + data[i].BrandName + "\" data-value=\"" + data[i].id + "\">" + data[i].BrandName + "</option>");
        // $("#Brand").append("<option id=\"opt-" + data[i].BrandName + "\" data-value=\"" + "</option>");
      }
    });
  }
  
  // A function for handling what happens when the form to create a new product is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing  Product Name, Details, Brand Name, or Units
    if (!inputProductName.val().trim() || !details.val().trim() || !gender.val().trim() || !brandName.val().trim() || !units.val() || !unitPrice.val() ) {
      return;
    }
   
    // Constructing a newProduct object to send to the database
    var newProduct = {
      ProductName: inputProductName.val().trim(),
      ProductDetails: details.val().trim(),
      Gender: gender.val(),
      BrandName: brandName.val(),
      Units: units.val(),
      UnitPrice: unitPrice.val(),
    };
    
    if (updating) {
      newProduct.id = ProductId;
      updateProduct(newProduct);
    } else {
      console.log("submitting product");
      submitProduct(newProduct);
      console.log("submitted product");
    }
  }
});

// Submits a new post and brings user to blog page upon completion
function submitProduct(product) {
  $.post("/products", product, function() {
    window.location.href = "/inventory";
  });
}

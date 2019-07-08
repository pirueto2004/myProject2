/* eslint-disable prettier/prettier */
$(document).ready(function() {
  //var todayDate = new Date()

  getProducts();

  // eslint-disable-next-line no-unused-vars
  $(document).on("click", "button.delete", function(r) {
    deleteProduct($(this).attr("data-value"));
  });

  function getProducts() {
    $.get("/products", function(data) {
      for (var i = 0; i < data.length; i++) {
        var row = createNewRow(data[i], i);
        $("#productBody").append(row);
      }
    });
  }

  function createNewRow(product, index) {
    var row =
      "<tr>" +
      // eslint-disable-next-line prettier/prettier
      "<th scope=\"row\">" +
      (index + 1) +
      "</th>" +
      "<td>" +
      product.ProductName +
      "</td>" +
      "<td>" +
      product.ProductDetails +
      "</td>" +
      "<td>" +
      product.Gender +
      "</td>" +
      "<td>" +
      product.Brand +
      "</td>" +
      "<td>" +
      product.Units +
      "</td>" +
      "<td>" +
      product.UnitPrice +
      "</td>" +
      "<td>" +
      "<button class=\"edit product-options\" data-value=\"" +
      product.ProductId +
      "\">edit</button>" +
      "</td>" +
      "<td>" +
      "<button class=\"delete product-options\" data-value=\"" +
      product.ProductId +
      "\">delete</button>" +
      "</td>" +
      
      "</tr>";

    return row;
  }

  function deleteProduct(id) {
    $.ajax({
      method: "DELETE",
      url: "/products/" + id
    }).then(function() {
      $("#productBody").empty();
      getProducts();
    });
  }


 
   // Get references to inventory page button elements
    const $buttonClicked = $(".btn");
    
    $buttonClicked.on("click", function(){

        let $buttonId = $(this).attr("id");

        switch ($buttonId) {
            case "btn1":
              window.location.href = "inventory.html";
                break;
            case "btn2":
              window.location.href = "#";
                break;
            case "btn3" :
              window.location.href = "#";
                break;
            case "btn4":
              window.location.href = "add_new_product.html";
                break;
            case "btn5":
              window.location.href = "add_new_order.html";
                break;
            case "btn6":
              window.location.href = "orders.html";
                break;
            
       };
    
      });
});

/* eslint-disable prettier/prettier */
$(document).ready(function() {
  //var todayDate = new Date()
  var lte;
  lte = $("#lessThenEquelTo").val();
  getProducts();

  $( "#lessThenEquelTo" )
    .change(function () {
      console.log("Changed value to "+$(this).val());
      lte = $("#lessThenEquelTo").val();
      //location.reload();
      $("#lowInv tbody tr").remove(); 
      getProducts();
      // 
    });
  //lte = $("#lessThenEquelTo").val();

  

  // eslint-disable-next-line no-unused-vars
  $(document).on("click", "button.delete", function(r) {
    deleteProduct($(this).attr("data-value"));
  });

  
  function getProducts() {
    $.get("/low/"+lte, function(data) {
      for (var i = 0; i < data.length; i++) {
        var row = createNewRow(data[i], i);
        $("#lowInventoryBody").append(row);
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
      product.BrandName +
      "</td>" +
      "<td>" +
      product.Units +
      "</td>" +
      "<td>" +
      product.UnitPrice +
      "</td>" +
      // "<td>" +
      // "<button class=\"edit product-options\" data-value=\"" +
      // product.ProductId +
      // "\">edit</button>" +
      // "</td>" +
      // "<td>" +
      // "<button class=\"delete product-options\" data-value=\"" +
      // product.ProductId +
      // "\">delete</button>" +
      // "</td>" +
      
      "</tr>";

    return row;
  }

  function deleteProduct(id) {
    $.ajax({
      method: "DELETE",
      url: "/low/" + id
    }).then(function() {
      $("#productBody").empty();
      getProducts();
    });
  }
});
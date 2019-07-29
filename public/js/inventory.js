/* eslint-disable prettier/prettier */
$(document).ready(function() {
  //var todayDate = new Date()

  getProducts();

  countOpenOrders();

  $("#newOrder").on("click", function(){
    getNewOrders();
  });

  
  // eslint-disable-next-line no-unused-vars
  $(document).on("click", "button.delete", function(r) {
    deleteProduct($(this).attr("data-value"));
  });
  // eslint-disable-next-line no-unused-vars
  $(document).on("click", "button.edit", function(r) {
    editProduct($(this).attr("data-value"),$($(this).parent().parent().children()[5]).html());
  });


  function countOpenOrders() {
    var count = 0;
    $.get("/orders", function(data) {  
      for (var i = 0; i < data.length; i++) {
        if(data[i].OrderStatus.trim() === "Open"){
          count+=1;
          // console.log("Open" + count);
          $("#badge").text(count);
        } 
      } 
    });  
  }

  function getNewOrders() {
    $.get("/orders", function(data) {  
      for (var i = 0; i < data.length; i++) {
        
        if(data[i].OrderStatus.trim() === "Open"){
          var row = createOrderRow(data[i],i);
          
        } 
        $("#order-rows").append(row);
      } 
    });  
  }

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
      // "<td>" +
      // product.Brand +
      // "</td>" +
      "<td>" +
      product.BrandName +
      "</td>" +
      "<td contenteditable='true' class = unitClass>" +
      product.Units +
      "</td>" +
      "<td>" +
      product.UnitPrice +
      "</td>" +
      "<td>" +
      "<button class='btn btn-sm btn-info btn-rounded edit product-options' data-value=\"" +
      product.ProductId +
      "\">edit</button>" +
      "</td>" +
      // "<td>" + product.Brand.Id + "</td>" +
      "<td>" +
      "<button class='btn btn-sm btn-danger btn-rounded delete product-options' data-value=\"" +
      product.ProductId +
      "\">update</button>" +
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

  
  function editProduct(id, data) {
    $.ajax({
      method: "PUT",
      url: "/products/" + id,
      data: {Units:data}
    }).then(function() {
      window.location.href = "/inventory";
      //getProducts();
    });
  }

});

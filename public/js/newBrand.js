/* eslint-disable prettier/prettier */
//alert("test");
$(document).ready(function() {

  countOpenOrders();

  $("#newOrder").on("click", function(){
    getNewOrders();
  });

  // Grabbing references 
  var brandName = $("#BrandName");

  // button clicks
  $(document).on("click", "button.delete", function() {
    var id = $(this).attr("data-value");
    console.log(id);
    deleteBrand(id);
  });

  $("#CreateBrand").on("click", function handleFormSubmit(event) {
    event.preventDefault();

    if (!brandName.val().trim()) {
      return;
    }
    var newBrand = {
      BrandName: brandName.val().trim()
    };
    postBrand(newBrand);
  });

  function postBrand(brand) {
    $.post("/brand", brand, function() {
      console.log("posted");
    }).then(function() {
      $("#BrandName").empty();
      location.reload();
    });
  }

  function getBrands() {
    $.get("/brand", function(data) {
      for (var i = 0; i < data.length; i++) {
        var row = createBrandRow(data[i], i);
        $("#BrandBody").append(row);
      }
    });
  }
  getBrands();

  function createBrandRow(brand, index) {
    var brandRow =
      "<tr>" +
      "<th scope='row'>" +
      (index + 1) +
      "</th>" +
      "<td>" +
      brand.BrandName +
      "</td>" +
      // "<td>" +
      // brand.Products.length +
      // "</td>" +
      "<td>" +
      "<button class='btn btn-sm btn-danger btn-rounded delete product-options' data-value=\"" +
      brand.BrandId +
      "\">delete</button>" +
      "</td>" +
      "</tr>";

    return brandRow;
  }

  function deleteBrand(id) {
    $.ajax({
      method: "DELETE",
      url: "/brand/" + id
    }).then(function() {
      $("#BrandBody").empty();
      getBrands();
    });
  }
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

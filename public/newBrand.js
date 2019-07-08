/* eslint-disable prettier/prettier */
//alert("test");
$(document).ready(function() {
    // Grabbing references to the "brand-name" input and brand container, and the table "tbody"
  
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
        "<button class=\"delete product-options\" data-value=\"" +
        brand.BrandId +
        "\">delete</button>" +
        "</td>" +
        "</tr>";
  
      return brandRow;
    }
  
    // eslint-disable-next-line no-unused-vars
    function upsertBrand(brandData) {
      $.post("/brand", brandData).then(getBrands);
      $("#BrandTable").tablesorter({ sortList: [[0, 0], [1, 0]] });
    }
  
    // eslint-disable-next-line no-unused-vars
    function renderBrandList(rows) {
      brandList
        .children()
        .not(":last")
        .remove();
      brandContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        brandList.prepend(rows);
      } else {
        renderEmpty();
      }
    }
  
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create a Brand before you can create a Product.");
      brandContainer.append(alertDiv);
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
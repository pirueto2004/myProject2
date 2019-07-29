//==== Variable Declaration ===========
//Object of each Item in the order
var orderData = new Object();
var newOrder = new Object();
//Get today's date in format mm/dd/yyyyy
var todayDate = new Date();
var y = todayDate.getFullYear();
var m = todayDate.getMonth() + 1;
var d = todayDate.getDate();
var orderTotal = 0;
var totalUnits = 0;
var unitAvgePrice = 0;
var productNames = [];
var productDetailList = [];
var brandList = [];
var count = 0;
var storeName = "";
var productIdList = [];

$(document).ready(function() {
  //Display the products in the inventory to select from
  getProducts();
  selectProducts();
  //Start building the order with data collected in localStorage
  buildNewOrder();
  //Display all the orders submitted
  getOrders();

  // process the form
  $(".createOrder").on("click", function(event) {
    event.preventDefault();
    //Redirect to page overview.html
    window.location.href = "view-order.html";
  });
});

$(document.body).on("click", "#order-rows tr .dispatch", function(event) {
  event.preventDefault();
  var id = $(this).attr("data-value");
  // $("#dispatch").addClass("disabled");
  var $status = $(this)
    .closest("tr")
    .find("td:nth-child(7)")
    .text();
  console.log($status);
  if ($status === "Open") {
    $(".dispatch").addClass("disabled");
    changeOrderStatus(id);
  }
});
//==========Function Section =======================================================

function getProducts() {
  $.get("/products", function(data) {
    for (var i = 0; i < data.length; i++) {
      var row = createNewRow(data[i], i);
      $("#product-rows").append(row);
    }
  });
}

function selectProducts() {
  //Grabbing the table 'td' cell values on the selected row 'checkbox' input
  $(document.body).on(
    "click",
    "#product-rows tr td input[type='checkbox']",
    function() {
      // // Finds the parent row <tr> of the checkbox being clicked
      var $thisRow = $(this).closest("tr");
      //Detects any change on the checkbox
      $("input[type='checkbox']").change(function() {
        var $checkboxIsChecked = $(this).is(":checked");
        var $thisCheckBox = $thisRow.find(
          "td:nth-child(7) input[type='checkbox']"
        );
        $thisCheckBox.prop("checked", true);
        //If the checkbox is 'checked' selcts all the data on each td cell of the parent row
        if ($checkboxIsChecked) {
          //Finds the specified children <td> elements and stores their text contents to variables
          var $td1 = $thisRow.find("td:nth-child(1)");
          var $td2 = $thisRow.find("td:nth-child(2)");
          var $td3 = $thisRow.find("td:nth-child(3)");
          var $td4 = $thisRow.find("td:nth-child(4)");
          var $td5 = $thisRow.find("td:nth-child(5)");
          var $td6 = $thisRow
            .find("td:nth-child(6) input[name='orderUnits']")
            .val();
          // alert("Button " + $td6 + " checked");

          //Store the $td values into variables
          var productId = $td1.text();
          var storeName = $("#storeName").val();
          var brandName = $td4.text();
          var productName = $td2.text();
          var productDetails = $td3.text();
          var orderUnits = $td6;
          var unitPrice = $td5.text();
          var orderTotal = (orderUnits * unitPrice).toFixed(2);
          var orderStatus = "Open";

          //Creates the order item to be saved in to the localStorage
          orderData = {
            ProductId: productId,
            StoreName: storeName,
            ProductName: productName,
            ProductDetails: productDetails,
            BrandName: brandName,
            Units: orderUnits,
            UnitPrice: unitPrice,
            OrderTotal: orderTotal,
            OrderStatus: orderStatus
          };

          //Save orderData in localStorage
          saveOrderDataInStorage(orderData);
        }
      });
    }
  );
}

function getOrders() {
  $.get("/orders", function(data) {
    for (var i = 0; i < data.length; i++) {
      var row = createOrderRow(data[i], i);
      $("#order-rows").append(row);
      if (data[i].OrderStatus.trim() === "Closed") {
        $(".dispatch")
          .addClass("disabled")
          .addClass("btn-light text-dark")
          .text("DISPATCHED");
      }
    }
  });
}

function setOrderDate() {
  //Setting the current date in the order page
  $("#thisDate").text(m + "/" + d + "/" + y);
  return;
}

function buildNewOrder() {
  setOrderDate();
  //Iterating the localStorage to get the order details
  for (var i = 0; i < localStorage.length; i++) {
    var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
    $("#orderDetails").append(
      "<tr><td>" +
        data.ProductId +
        "</td><td> " +
        data.ProductName +
        "</td><td> " +
        data.ProductDetails +
        "</td><td> " +
        data.BrandName +
        "</td><td> " +
        data.UnitPrice +
        "</td><td> " +
        data.Units +
        "</td><td> " +
        parseFloat(data.Units * data.UnitPrice).toFixed(2) +
        "</td></tr>"
    );
    storeName = data.StoreName;
    productIdList.push(data.ProductId);
    orderTotal += data.Units * data.UnitPrice;
    totalUnits += parseInt(data.Units);
    unitAvgePrice += parseFloat(data.UnitPrice);
    productNames.push(data.ProductName);
    productDetailList.push(data.ProductDetails);
    brandList.push(data.BrandName);
    count += 1;
  }

  orderTotal = parseFloat(orderTotal).toFixed(2);
  $("#orderTotal").text(orderTotal);

  unitAvgePrice = unitAvgePrice / count;
  productIdList = productIdList[0];
  productNames = productNames.toString();
  productDetailList = productDetailList.toString();
  brandList = brandList.toString();
  // Constructing a newOrder object to send to the database
  newOrder = {
    StoreName: storeName,
    ProductId: productIdList,
    ProductName: productNames,
    ProductDetails: productDetailList,
    BrandName: brandList,
    Units: totalUnits,
    UnitPrice: unitAvgePrice,
    OrderTotal: orderTotal,
    OrderStatus: "Open"
  };

  $("#submitOrder").on("click", function(event) {
    event.preventDefault();

    if (!storeName) {
      return;
    }

    //Post new order to the database
    postOrder(newOrder);

    localStorage.clear();
  });
}

function changeOrderStatus(id) {
  $.ajax({
    // added {
    url: "/orders/" + id,
    type: "PUT",
    data: {
      OrderId: id,
      OrderStatus: "Closed"
    },
    success: function() {
      location.reload();
      getOrders();
    }
  }); // added }
}
function postOrder(order) {
  $.post("/orders", order, function() {
    console.log("Order posted");
  }).then(function() {
    //Delete all data in localStorage after posting the order
    localStorage.clear();
    // $("#order-table").empty();
    getOrders();
    // Show the modal notifying that the user submission was successful
    $("#orderSubmission").modal("toggle");
    setTimeout(function() {
      //Redirect to page place_orders.html
      window.location.href = "place_orders.html";
    }, 2000);
  });
}

function createNewRow(product, index) {
  var row =
    "<tr>" +
    "<td class='text-center' scope=\"row\">" +
    (index + 1) +
    "</td>" +
    "<td>" +
    product.ProductName +
    "</td>" +
    "<td>" +
    product.ProductDetails +
    "</td>" +
    "<td>" +
    product.BrandName +
    "</td>" +
    "<td class='text-center'>" +
    product.UnitPrice +
    "</td>" +
    "<td class='text-center'>" +
    "<input class='col-md-10' type='number' name='orderUnits' value='1' maxlength='6' min='1'>" +
    // order.Units +
    "</td>" +
    "<td scope='row'>" +
    "<input class='form-check-input ml-2' type='checkbox' name='rowItem'  id='item' " +
    product.ProductId +
    ">" +
    "<label class='form-check-label' for='checkbox1' class='label-table'></label>" +
    "</td>" +
    "</tr>";
  return row;
}
function createOrderRow(order, index) {
  var orderRow =
    "<tr>" +
    "<td class='text-center' scope=\"row\">" +
    (index + 1) +
    "</td>" +
    "<td >" +
    order.StoreName +
    "</td>" +
    "<td >" +
    order.ProductName +
    "</td>" +
    "<td >" +
    order.Units +
    "</td>" +
    "<td class='text-center'>" +
    order.UnitPrice +
    "</td>" +
    "<td class='text-center'>" +
    order.OrderTotal +
    "</td>" +
    "<td class='text-center' >" +
    order.OrderStatus +
    "</td>" +
    "<td>" +
    "<button type='button' id='dispatch' class='btn btn-sm btn-warning dispatch' data-value=' " +
    order.OrderId +
    "'>Dispatch</button>" +
    "</td>" +
    "</tr>";
  return orderRow;
}
function saveOrderDataInStorage(orderData) {
  if (localStorage) {
    var key = "orderData" + orderData.ProductId;
    var item = JSON.stringify(orderData);
    localStorage.setItem(key, item);
  } else {
    console.log("Error: you don't have localStorage!");
  }
  return;
}

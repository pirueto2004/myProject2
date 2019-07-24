//==== Variable Declaration ===========
//Array of all of the data in the order
var orderDataList = new Array();
//Object of each Item in the order
var orderData = new Object();
var newOrder = new Object();

$(document).ready(function() {
  //Get today's date in format mm/dd/yyyyy
  var todayDate = new Date();
  y = todayDate.getFullYear();
  m = todayDate.getMonth() + 1;
  d = todayDate.getDate();
  var orderTotal = 0;
  var totalUnits = 0;
  var unitAvgePrice = 0;

  //Setting the current date in the order page
  $("#thisDate").text(m + "/" + d + "/" + y);
  var productNames = [];
  var productDetailList = [];
  var brandList = [];
  var count = 0;
  var storeName = "";
  var productIdList = [];

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
        data.Brand +
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
    brandList.push(data.Brand);
    count += 1;
  }

  // alert("Total Units: " + totalUnits);
  // alert("Unit Avrge Price: " + unitAvgePrice);
  // alert("Counts: " + count)

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
    Brand: brandList,
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

  //   alert(
  //     "Order submitted:  " +
  //       newOrder.StoreName +
  //       "||" +
  //       newOrder.ProductName +
  //       "||" +
  //       newOrder.ProductDetails +
  //       "||" +
  //       newOrder.Brand +
  //       "||" +
  //       newOrder.Units +
  //       "||" +
  //       newOrder.UnitPrice +
  //       "||" +
  //       newOrder.OrderTotal +
  //       "||" +
  //       newOrder.OrderStatus
  //   );
  //   console.log(newOrder);
  //   postOrder(newOrder);
  //   localStorage.clear();
  // });

  //==== Main =====================

  getProducts();

  getOrders();

  // process the form
  $(".createOrder").on("click", function(event) {
    event.preventDefault();

    //Redirect to page overview.html
    window.location.href = "view-order.html";
  });
});

$(document.body).on("click", "#dispatch", function(event) {
  event.preventDefault();
  var id = $(this).attr("data-value");
  console.log(id);

  $("#dispatch").addClass("disabled");

  changeOrderStatus(id);
  // changeOrderStatus();
  // processOrder(id);
  alert("Order dispatched and closed");
});

//Grabbing references to the "brand-name" input and brand container, and the table "tbody"
$(document.body).on("click", "#checkbox1", function() {
  var $thisRow = $(this).closest("tr"); // Finds the closest row <tr>
  //Finds the specified children <td> elements and stores their text contents to variables
  var $td1 = $thisRow.find("td:nth-child(1)");
  var $td2 = $thisRow.find("td:nth-child(2)");
  var $td3 = $thisRow.find("td:nth-child(3)");
  var $td4 = $thisRow.find("td:nth-child(4)");
  var $td5 = $thisRow.find("td:nth-child(5)");
  var $td6 = $thisRow.find("td:nth-child(6) input");

  var productId = $td1.text();
  var storeName = $("#storeName").val();
  var brandName = $td4.text();
  var productName = $td2.text();
  var productDetails = $td3.text();
  var orderUnits = $td6.val();
  var unitPrice = $td5.text();
  var orderTotal = (orderUnits * unitPrice).toFixed(2);
  var orderStatus = "Open";

  orderData = {
    ProductId: productId,
    StoreName: storeName,
    ProductName: productName,
    ProductDetails: productDetails,
    Brand: brandName,
    Units: orderUnits,
    UnitPrice: unitPrice,
    OrderTotal: orderTotal,
    OrderStatus: orderStatus
  };

  // updateInventory(productId);

  //  createListItem(orderData);

  orderDataList.push(orderData);

  // setObjInStorage("orderData", orderData);
  saveOrderDataInStorage(orderData);
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

function getOrders() {
  $.get("/orders", function(data) {
    for (var i = 0; i < data.length; i++) {
      var row = createOrderRow(data[i], i);
      $("#order-rows").append(row);
    }
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
      getOrders();
    }
  }); // added }
}

function postOrder(order) {
  $.post("/orders", order, function() {
    console.log("Order posted");
  }).then(function() {
    $("#order-table").empty();
    getOrders();
    //Redirect to page overview.html
    window.location.href = "add_new_order.html";
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
    product.Brand +
    "</td>" +
    "<td class='text-center'>" +
    product.UnitPrice +
    "</td>" +
    "<td class='text-center'>" +
    "<input class='col-md-10' type='number' name='orderUnits' value='1' maxlength='6' min='1'>" +
    // order.Units +
    "</td>" +
    "<td scope='row'>" +
    "<input class='form-check-input ml-2' type='checkbox' name='selected' id='checkbox1'>" +
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
    "<button type='button' id='dispatch' class='btn btn-sm btn-warning' data-value=\"" +
    order.OrderId +
    "\" data-state='enabled'>Dispatch</button>" +
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

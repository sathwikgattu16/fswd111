const checkBtn = document.getElementById("check-order");

checkBtn.addEventListener("click", function () {
  const nameBox = document.getElementById("cust-name");
  const qtyBox = document.getElementById("qty");

  let customerName = nameBox.value;
  let howMany = qtyBox.value;

  const picked = document.querySelector("input[name='dish']:checked");

  let chosenDish = picked.value;

  console.log("customer name:", customerName);
  console.log("dish ordered:", chosenDish);
  console.log("quantity:", howMany);

  if (customerName === "") {
    console.log("⚠ the name field is empty");
  }
});
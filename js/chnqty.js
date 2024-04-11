function changeQuantity(change) {
    var quantityInput = document.getElementById('nft-quantity');
    var newQuantity = parseInt(quantityInput.value) + change;
    quantityInput.value = newQuantity < 1 ? 1 : newQuantity;
    updateTotal();
  }

  function setMax() {
    // Define your max quantity logic here
    var maxQuantity = 1000; // Example max quantity
    document.getElementById('nft-quantity').value = maxQuantity;
    updateTotal();
  }

  function updateTotal() {
    var quantity = document.getElementById('nft-quantity').value;
    var pricePerNFT = 0.05; // Update with the actual price
    var total = quantity * pricePerNFT;
    document.getElementById('total').textContent = total.toFixed(2);
  }
const products = [];

function addProduct(name, description, value, available) {
  const newProduct = { name, description, value, available };
  products.push(newProduct);
  console.log('Novo produto cadastrado:', newProduct);
  displayProductList();
}

function displayProductList() {
  const sortedProducts = products.sort((a, b) => a.value - b.value);
  console.log('Lista de produtos ordenada por valor:');
  sortedProducts.forEach(product => {
    console.log(`Nome: ${product.name}, Valor: ${product.value}`);
  });
}

addProduct('Produto 1', 'Descrição do produto 1', 50, true);
addProduct('Produto 2', 'Descrição do produto 2', 30, false);

let products = [];

class Product{

    constructor(title, imageUrl, description, price, quanitity){

        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.quanitity = quanitity;
    }

     getPrice(){

        return this.price;
        }
        
    }

    
function addFewProducts(){

    products.push("apple", "", "", 0.49, 1000);
    products.push("ps5", "", "", 499.99, 140);
    products.push("orange juice", "", "", 2.99, 500);

}

function findProductsLessThan100(){

    let newProduct = new Product("banana", "", "", 15.4, 34);
    console.log(newProduct.price);
    //cheapProducts.filter(product => product.price > 100);
  //  console.log(cheapProducts);
}

function printPrices(){

    console.log(products);
}

addFewProducts();
//printPrices();
findProductsLessThan100();

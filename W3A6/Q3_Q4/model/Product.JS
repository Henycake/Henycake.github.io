products=[];
class Product{
    constructor(id, name, price, description){
        this._id=id;
        this._name=name;
        this._price=price;
        this._description=description;
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name=name;
    }
    getId(){
        return this._id;
    }
    setId(id){
        this._id=id;
    }
    getPrice(){
        return this._price;
    }
    setPrice(price){
        this._price=price;
    }
    getDescription(){
        return this._description;
    }
    setDescription(decription){
        this._description=description;
    }
    static getAllProducts(){
        return products;
    }
}
// products=[new Product(1,"Computer",12,"mac pro!"),
// new Product(2,"Books",15,"java books"),
// new Product(3,"Furniture",5,"Wooden !")
// ];
module.exports=Product;
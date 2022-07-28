import axios from 'axios';

let catalog = [
    {   
        id:1,
        price: .99,
        stock: 22,
        title:"Apple",
        image: "apples.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:2,
        price: 1.11,
        stock: 2,
        title:"orange",
        image: "Oranges.webp",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:3,
        price: 4.99,
        stock: 50,
        title:"Watermelon",
        image: "watermelon.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:4,
        price: 1.49,
        stock: 2,
        title:"Pears",
        image: "pears.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:5,
        price: 2.49,
        stock: 15,
        title:"Cantelope",
        image: "cantalope.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:6,
        price: .89,
        stock: 33,
        title:"Avacado",
        image: "avacado.webp",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:7,
        price: .75,
        stock: 343,
        title:"Plum",
        image: "plums.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:8,
        price: 1.65,
        stock: 422,
        title:"Peach",
        image: "peaches.jpg",
        discount: 10,
        category: "Fruit"
    },
    {   
        id:9,
        price: 2.53,
        stock: 15,
        title:"Dragon Fruit",
        image: "dragonfruit.jpg",
        discount: 10,
        category: "Fruit"
    },
];

class DataService{
    serverURL= "http://127.0.0.1:5000";
    async getCatalog(){
        //call the server to get the data
        let response = await axios.get(this.serverURL + "/api/products")
        return response.data;
        // use the line below to show the catalog without a backend
        // return catalog;

    
    }
    async saveProduct(prod){
        // send prod to the server
        let response = await axios.post("http://127.0.0.1:5000/api/products", prod);
        
    }
};

export default DataService;
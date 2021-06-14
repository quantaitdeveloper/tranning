import Home from "./components/Home/Home";
import ProductsContainer from "./containers/ProductsContainer";
import AddProduct from "./components/AddProduct/AddProduct";


export const routes= [
    {
        path : "/home",
        component : Home,
        exact : true
    },
    {
        path : "/products",
        component : ProductsContainer,
        exact : true
    },
    {
        path : "/add",
        component : AddProduct,
        exact : true
    },

   
]
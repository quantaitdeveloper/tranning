const inititalState = [
    {
        id:1 ,
        brand :"Apple IPhone",
        name : "Iphone XS max",
        price : 1200,
        status: 1,
        amount : 10
    },
    {
        id:2,
        brand :"Apple IPhone",
        name : "Iphone 11",
        price : 1500,
        status: 1,
        amount : 10
    },
    {
        id:3,
        brand :"Samsung",
        name : "Galaxy S21 Ultra",
        price : 1500,
        status: 0,
        amount : 0
    }
] ;

const products = (state = inititalState , action ) =>{
    switch (action.type){
        default:{
            return [...state];
        }
    }
}
export default products;
const { default: axiosClint } = require("./axiosClint");



const createOrder= (data)=> axiosClint.post("/orders",data);


export { createOrder };


import Product from "../model/product.model.js";

export const saveAll = async(request,response,next)=>{
    try{
    let allProduct = request.body;
    for(let product of allProduct){
        await Product.create(product);
    }
    return response.status(201).json({message: "All product saved.."});
}
catch(err){
    console.log(err);
   } 
}

export const getProductById = (request,response,next)=>{
   Product.findById(request.params.productId)
   .then(result=>{
     console.log(result[0]);
     return response.render("view-more",{product:result[0],isLoggedIn: request.session.isLoggedIn,currentUser: request.session.currentUser});
   }).catch(err=>{
    console.log(err);
   }); 
}

export const bookingPage = async(req,res,next)=>{
    try{
        let result = await Product.findById(req.params.productId);
        let product = result[0];
        console.log(result);
        return res.render("booking.ejs",{product,isLoggedIn:req.session.isLoggedIn,currentUser:req.session.currentUser});
    }catch(err){
        console.log(err);
    }
}
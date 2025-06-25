import Product from "../model/product.model.js";

export const indexPage = (request,response,next)=>{
    return response.render("index.ejs",{currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}
export const servicesPage = async(request,response,next)=>{
    let productlist = await Product.findAll();
    return response.render("services.ejs",{products: productlist, currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}
export const bookingPage = (request,response,next)=>{
    return response.render("booking.ejs",{currentUser: request.session.currentUser,isLoggedIn: request.session.isLoggedIn});
}
export const signUpPage = (request,response,next)=>{
    return response.render("signup.ejs");
}
export const signInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}
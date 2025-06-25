
import User from "../model/user.model.js";
import Booking from "../model/booking.model.js";

export const dashboardPage = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect("/sign-in");
    }

    const email = request.session.currentUser.email;

    Booking.findByUserEmail(email).then(bookings => {
        response.render("dashboard.ejs", {
            currentUser: request.session.currentUser,
            isLoggedIn: true,
            bookings: bookings
        });
    }).catch(err => {
        console.log(err);
        response.end("Something went wrong in dashboard.");
    });
};


export const SignOut = (request,response,next) =>{
    request.session.isLoggedIn=false;
    request.session.currentUser=null;
    request.session.destroy();
    return response.redirect("/");
}

export const signIn = (request,response,next) =>{
    let {email,password} = request.body;
    User.find(email,password).then(result =>{
        if(result.length){
            console.log(result);
            request.session.isLoggedIn = true;
            request.session.currentUser = result[0];
            return response.redirect("/");
        }else{
        return response.redirect("/sign-in");
        }
    }).catch(err=>{
        return response.end("something went wrong!...");
    })
}

export const signUp = (request,response,next)=>{
        console.log("Request Body:", request.body); 
    let {name,email,password,contact} = request.body;
    console.log("Request Body:", request.body); 
    let user = new User(null,name,email,password,contact);
    user.create().then(result =>{
        return response.redirect("/sign-in");
    }).catch(err=>{
        console.log(err);
        response.end("something wrong!...");
    });
}

import Booking from "../model/booking.model.js";
import pool from "../db/dbConfig.js";


export const booking = (request, response, next) => {
    let { name, email, contact, date, time, service } = request.body;
    Booking.find(email).then(result => {
        if (result.length) {
            console.log(result);
            request.session.isLoggedIn = true;
            request.session.currentUser = result[0];
            return Booking.book(name, email, contact, date, time, service).then((result) => {
                
                return response.redirect("/");
            }).catch((err) => {
                
                console.log(err);

            });
        } else
            return response.redirect("/sign-up");
    }).catch(err => {
        return response.end("something went wrong!...");
    })

    // let userbooking = new Booking(null,name,email,contact,date,time,service);
    // userbooking.book().then((result) => {
    //     return response.redirect("/");
    // }).catch((err) => {
    //     console.log(err);

    // });
}

export const cancelBooking = (request, response, next) => {
    const bookingId = request.params.bookingId;
    pool.getConnection((err, con) => {
        if (!err) {
            let sql = "delete from bookings where id = ?";
            con.query(sql, [bookingId], (err, result) => {
                con.release();
                if (err) {
                    console.error("Cancellation error:", err);
                    return response.end("Error cancelling booking");
                }
                return response.redirect("/user/dashboard");
            });
        } else {
            return response.end("Database connection error");
        }
    });
};



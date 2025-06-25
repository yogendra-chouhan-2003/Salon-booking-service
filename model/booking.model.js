import pool from "../db/dbConfig.js";
class Booking{
    constructor(id,name,email,contact,date,time,service) {
        this.id=id;
        this.name=name;
        this.email=email;
        this.contact=contact;
        this.date=date;
        this.time=time;
        this.service=service;
    }
    static book(name, email, contact, date, time, service){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "insert into bookings(name,email,contact,date,time,service) values(?,?,?,?,?,?)";
                    con.query(sql,[name,email,contact,date,time,service],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);

                    })
                }else reject(err);
            })
        })

    }
    static find(email){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                let sql = "select * from user where email = ?";
                con.query(sql,[email],(err,result)=>{
                    con.release();
                    err ? reject(err):resolve(result);
                })
            }else
                reject(err);
            
            })
        });
    }

    static findByUserEmail(email) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (!err) {
                const sql = "select * from bookings where email = ?";
                con.query(sql, [email], (err, result) => {
                    con.release();
                    err ? reject(err) : resolve(result);
                });
            } else reject(err);
        });
    });
}


}
export default Booking;
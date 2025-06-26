import pool from "../db/dbConfig.js";

class Product{
    constructor(id,title,description,category,price,offer,brand,img,duration,rating,available,gender){
        this.id=id;
        this.title=title;
        this.description=description;
        this.category=category;
        this.price=price;
        this.offer=offer;
        this.brand=brand;
        this.img=img;
        this.duration=duration;
        this.rating=rating;
        this.available=available;
        this.gender=gender;

    }
    static create(product){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
            if(!err){
            let sql = "insert into product(id,title,description,category,price,offer,brand,img,duration,rating,available,gender) values(?,?,?,?,?,?,?,?,?,?,?,?)";
            con.query(sql,[product.id,product.title,product.description,product.category,product.price,product.offer,product.brand,product.img,product.duration,product.rating,product.available,product.gender],(err,result)=>{
                con.release();
                err ? reject(err):resolve(result);
            });
        }else
            reject(err);
        
        })
        });

    }

    static findAll(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    return reject(err);
                }
               let sql = "select * from product";
               con.query(sql,(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }

    static findById(productId){
      return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    return reject(err);
                }
               let sql = "select * from product where id = ?";
               con.query(sql,[productId*1],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(result);
               })
            });
        });
    }
}
export default Product;
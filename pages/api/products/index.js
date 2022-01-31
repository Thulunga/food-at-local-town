import dbConnection from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const {method} = req;

    dbConnection()

    if (method === "GET"){
        try {
            const getProduct = await Product.find();
            res.status(200).json(getProduct);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if (method === "POST"){
        try{
            const postProduct = await Product.create(req.body);
            res.status(201).json(postProduct)
        }catch(err){
            res.status(500).json(err);
        }
    }

  }
  
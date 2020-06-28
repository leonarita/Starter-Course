const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {

    //Listagem
    async index (req, res) {
        const { page = 1 } = req.query  //query -> get
        const products = await Product.paginate({}, {page, limit: 10}) //Vai retornar 10 valores
        return res.json(products)
    },

    //Criação
    async store (req, res) {
        try {
            const product = await Product.create(req.body)
            return res.json(product)
        }
        catch (err) {
            console.log(err)
        }
    },

    //Detail -> lista um produto
    async show (req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async update (req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product)
    },
    
    async destroy (req, res) {
        await Product.findOneAndRemove(req.params.id)
        return res.send()
    },
}

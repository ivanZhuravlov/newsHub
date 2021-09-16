/**
 * Info controller.
 * @module controllers/info
 */

const axios = require('axios')
const API_KEY = process.env.API_KEY
/**
 * @param req
 * @param res
 */
exports.newsList = async (req,res) => {

    const result = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-09-15&sortBy=popularity&apiKey=${API_KEY}`)
    const data = result.data.articles

    return res.json({
        status: 200,
        message: 'Success',
        data,
    })
}
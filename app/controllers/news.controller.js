/**
 * Info controller.
 * @module controllers/info
 */


/**
 * @param req
 * @param res
 */
exports.newsList = (req,res) => {
    return res.json({
        status: 200,
        message: 'Success',
        data: [],
    })
}
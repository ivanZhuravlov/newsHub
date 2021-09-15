/**
 * Info controller.
 * @module controllers/info
 */


/**
 * @param req
 * @param res
 */
exports.getInfo = (req, res) => {
  return res.json({
    status: 200,
    message: 'Success',
    data: {
      name: 'newsHub'
    }
  })
}
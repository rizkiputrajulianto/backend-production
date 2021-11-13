const {Materi} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const where = {
            id: req.params.id
        }
        const requestDB = await Materi.update(payload, {where});
        if (requestDB[0]) {
            return res.json({msg: 'Data berhasil diubah', data: requestDB[0]});
        } else{
            return res.status(404).json({msg: 'Data gagal di Update'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};
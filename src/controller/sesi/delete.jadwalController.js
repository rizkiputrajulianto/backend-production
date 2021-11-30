const {Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {
            kodeSesi: req.params.kode
        }
        const requestDB = await Session.destroy({where});
        if (requestDB) {
            return res.json({msg: 'Data berhasil dihapus'});
        }else{
            return res.status(404).json({msg: 'Data gagal dihapus'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};
const {Materi} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {id: req.params.id};
        const requestDB = await Materi.destroy({where});
    if (requestDB) {
        res.json({msg: 'Data berhasil dihapus'});
    } else{
        res.status(404).json({msg: 'Data gagal dihapus'});
    }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};
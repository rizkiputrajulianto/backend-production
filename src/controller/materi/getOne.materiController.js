const {Materi} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {
            id: req.params.id
        }
        const materi = await Materi.findOne({where, attributes: {exclude: ['createdAt', 'updatedAt']}});
        if(materi){
            return res.json({data: materi});
        }else{
            return res.status(404).json({message: 'Materi not found'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};
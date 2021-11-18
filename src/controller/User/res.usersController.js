const {Users,Session, Class, socmed, Alamat, Kota, Kecamatan, Provinsi} = require('../../models');


const service = async (req, res, next) => {
    try {
        const where = {
            username: req.auth.username,
        }
        const user = await Users.findOne({where,attributes: {exclude:["password","createdAt","updatedAt","deletedAt"]}, include:[{model:Class, as: 'activeClass', include: [{model:Session, as:'Sessions'}], attributes: {exclude: ["createdAt","updatedAt","deletedAt"]}},{model:socmed, as: 'sosmed', attributes:{exclude: ["createdAt","updatedAt","deletedAt"]}},{model:Alamat, as: 'alamat', attributes:{exclude: ["createdAt","updatedAt","deletedAt"]}, include:[{model:Kecamatan, as:'Kecamatan', attributes:{exclude: ["createdAt","updatedAt","deletedAt"]}, include:[{model:Kota, as:'kota', attributes:{exclude:["createdAt","updatedAt","deletedAt"]}, include:[{model:Provinsi, as:'provinsi', attributes:{exclude:["createdAt","updatedAt","deletedAt"]}}]}]}]}]});
        return res.json({msg: 'Data Berhasil diterima', data: user});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service};

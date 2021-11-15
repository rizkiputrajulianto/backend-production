const {Users, Kota, Kecamatan, Alamat, socmed} = require('../../models');

const service = async (req, res, next) => {
    try {
    const payload = req.body;
    //sosmed
    if (payload.sosmed) {
        const addSosmed = await socmed.create(payload.sosmed);
        if (addSosmed) {
            const findSosmed = await socmed.findOne({where : payload.sosmed});
            delete payload.sosmed;
            payload.idSocmed = findSosmed.id;
        }else{
            return res.status(404).json({msg: 'Failed to Update', cause: 'Social Media'})
        }
    }
    //sosmed
    //alamat algo 2
    if (payload.alamat){
        const findKota = await Kota.findOne({where : {namaKota : payload.alamat.kota}});
        if(findKota){
            const addKecamatan = await Kecamatan.create({namaKecamatan: payload.alamat.kecamatan, idKota: findKota.id});
            if(addKecamatan){
                const addAlamat = await Alamat.create({namaAlamat: payload.alamat.alamat, idKecamatan: addKecamatan.id});
                if(addAlamat){
                    delete payload.alamat;
                    payload.idAlamat = addAlamat.id;
                }else{
                    return res.status(404).json({msg: 'Failed to Update', cause: 'Alamat'})
                }
            }else{
                return res.status(404).json({msg: 'Failed to Update', cause: 'Kecamatan'})
            }
        }else{
            return res.status(404).json({msg: 'Kota Not Found'})
        }
    }
    const where = {username : req.params.username};
    const requestDB = await Users.update(payload, {where});
    if(requestDB[0]){
        return res.json({msg: 'Success to Update Data', data: payload});
    } else{
        return res.status(404).json({msg: 'Failed to Update'})
    }    
    } catch (error) {
        return res.status(500).json({msg: error.toString()})   
    }   
}

module.exports = {service};
const {joinClass, Users, Class} = require('../../models');

const service = async (req, res, next) => {
    try {
        /*
        payloadnya
        data: {
            idUsers: 'admin22',
            idClass: '010101',
            role: 'Student'
        }
        */
        const payload = req.body;
        const user = req.auth;
            payload.idUsers = user.id;
            const dataClass = await Class.findOne({where: {kodeKelas: payload.idClass}});
            if (dataClass) {
                payload.idClass = dataClass.id;
                const requestDB = await joinClass.create(payload);
                if(requestDB){
                    return res.json({msg: 'Success', data: payload});
                }else{
                    return res.status(400).json({msg: 'Failed to Join Class'})
                }
            }else{
                return res.status(404).json({msg: 'Data Class not Found'});
            }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};
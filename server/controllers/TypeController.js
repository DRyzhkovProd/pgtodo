import {Type} from "../models/models.js";
import ApiError from "../handlers/ApiError.js";
class TypeController {
    async getAll (req, res) {
        try{
            const allTypes = await Type.findAll()
            return res.json(allTypes)
        }catch (e) {
            console.log(e.message)
        }
    }

    async create (req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async update (req, res, next) {
        try{
            const {id, name} = req.body

            if (!name || !id) {
                next(ApiError.badRequest(`Отсутствует id или имя категории`))
            }

            const updatedType = await Type.update({name: name}, {where: {id: id}})
            return res.json(updatedType)

        } catch (e) {
            console.log(e.message)
        }
    }

    async delete (req, res, next) {
        try {
            const { id } = req.body

            if (!id) {
                next(ApiError.badRequest(`Отсутствует id или имя категории`))
            }

            const deleteType = await Type.destroy({where: {id: id}})
            return res.json(deleteType)

        } catch (e) {
            console.log(e.message)
        }
    }
}

export default new TypeController()
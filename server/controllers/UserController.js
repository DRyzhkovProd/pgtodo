import ApiError from "../handlers/ApiError.js";

 class UserController {
    async registration (req, res) {

    }

    async login (req, res) {

    }

    async checkAuth (req, res, next) {
        const {id} = req.query

        if (!id) {
            next(ApiError.badRequest("Незадан Id"))
        }
    }
}

export default new UserController()
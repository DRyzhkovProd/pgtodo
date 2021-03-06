import ApiError from "../handlers/ApiError.js";

export default function (err, req, res) {
    if (err instanceof  ApiError) {
        res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}
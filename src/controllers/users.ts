export default function User() {
    return {index, show, create, update, remove}
}

const index = ({res}) => res.json({users: "index"})
const show = (req, res) => res.json({users: "show", params: req.params})
const create = (req, res) => res.json({users: "create", params: req.params})
const update = (req, res) => res.json({users: "update", params: req.params})
const remove = (req, res) => res.json({users: "remove", params: req.params})
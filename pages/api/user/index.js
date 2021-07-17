import fs from 'fs'

export default async function handler(req, res) {
    function getUser() {
        let rawdata = fs.readFileSync('public/user.json');
        let data = JSON.parse(rawdata);
    
        res.status(200).json(data);
    }
    
    function updateUser() {
        const data = fs.writeFileSync('public/user.json', JSON.stringify(req.body));

        res.status(200).json(data);
    }

    switch (req.method) {
        case 'GET':
            return getUser();
        case 'PUT':
            return updateUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

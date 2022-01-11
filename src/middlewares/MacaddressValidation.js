const MacaddressValidation = (req, res, next) => {
    return
    if (!req.body.macaddress) {
        return res.status(400).json({ error: 'macaddress é obrigatório' });
    } else {
        next();
    }
};

module.exports = MacaddressValidation;
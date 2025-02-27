const unknownRoutes = (req, res) => {
    res.send("cannot find the route");
}

module.exports = unknownRoutes;
module.exports = (folder, client) => {
  return (req, res, next) => {
    const path = req.originalUrl;
    client.get(folder+":"+path)
        .then((data) =>{
            if (data !== null) {
            const tmpData = JSON.parse(data);
            req.pathPattern = (tmpData && tmpData.pathPattern)? tmpData.pathPattern : undefined;
            req.isCache = true;
            res.setHeader('isCache', true);
            const response = (tmpData && tmpData.response) ? tmpData.response : tmpData;
            return res.status(200).send(response);
            } else {
                res.setHeader('isCache', false);
                next();
            }
        })
        .catch((err) =>{
            console.error(err);
            return res.sendStatus(500);
        });
  };
};
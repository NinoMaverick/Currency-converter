const convertCurrency = async (req, res) => {
    try {
        const { from, to, amount } = req.query;

        if(!from || !to || !amount ) {
           return res.status(400).json({ error: "Missing required query parameters"});
           })
        }
    }catch{}
}

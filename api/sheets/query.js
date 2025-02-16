// 查询电子表的信息
// 只能用require引入
const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const headers = req.headers;
        const spreadsheetToken = req.query.spreadsheetToken; // 电子表格 Token

        // const params = req.queryStringParameters || {};

        // const response = await axios.get(`https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/${spreadsheetToken}/sheets/query`,
        //     {
		// 		mode:'no-cors',
        //         headers: headers
        //     }
        // );
        const response = await axios({
            url: `https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/${spreadsheetToken}/sheets/query`,
            method: 'GET',
            headers: headers,
            mode: 'no-cors'
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
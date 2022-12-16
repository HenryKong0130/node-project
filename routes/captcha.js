var express = require('express');
var router = express.Router();
var { formatResponse, analysisToken } = require("../utils/tool")
const {getCaptchaService} = require('../service/captchaService')

// 验证码
router.get('/', async function(req, res, next) {
    //生成一个验证码
    const captcha = await getCaptchaService();
    req.session.captcha = captcha.text;
    //设置响应头
    res.setHeader("Content-Type","image/svg+xml")
    res.send(captcha.data)
});



module.exports = router;
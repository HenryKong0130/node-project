// banner 模块的业务逻辑层
const { ValidationError } = require("../utils/errors");
const { formatResponse,handleDataPattern } = require("../utils/tool");
const { findBannerDao,updateBannerDao} = require("../dao/bannerDao");
//
module.exports.findBannerService = async function () {
  const data =   await findBannerDao();
  const result = handleDataPattern(data)
  return formatResponse(0,"",result)
};

module.exports.updateBannerService = async function(bannerArr){
  const data = await(updateBannerDao(bannerArr))
  const result = handleDataPattern(data)
  return formatResponse(0,"",result)
}

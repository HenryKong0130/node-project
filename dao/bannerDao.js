// 这一层负责和数据库打交道
const bannerModel = require("./model/bannerModel");

module.exports.findBannerDao = async function () {
  return await bannerModel.findAll();
};

module.exports.updateBannerDao = async function (bannerArr) {
  //将表的记录全部删除
  bannerModel.destroy({
    truncate: true,
  });
  //批量写入数据
  await bannerModel.bulkCreate(bannerArr);
  return bannerModel.findAll();
};

const USER_AGENTS = [
  "jdapp; JD4iPhone/167454 (iPhone; iOS 14.4; Scale/2.00)",
  "jdapp; JD4iPhone/167454 (iPhone; iOS 14.4; Scale/2.00)",
  "jdapp;iPhone;9.3.6;12.4.9;a8e5888f7fa596649c38509e32240b81b8604b2e;network/wifi;ADID/7F47CFCA-29DF-4674-BD38-F3FF7169CE15;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone7,2;addressid/784286062;supportBestPay/0;appBuild/167519;jdSupportDarkMode/0;pv/444.21;apprpd/Home_Main;ref/https%3A%2F%2Fwbbny.m.jd.com%2FbabelDiy%2FZeus%2F2cKMj86srRdhgWcKonfExzK4ZMBy%2Findex.html%3FbabelChannel%3Dfc%26lng%3D113.383087%26lat%3D23.162075%26sid%3Db72b3767ecde075980584380ace5debw%26un_area%3D19_1601_3633_63254;psq/3;ads/;psn/a8e5888f7fa596649c38509e32240b81b8604b2e|934;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1610113804972|1610113816;adk/;app_device/IOS;pap/JA2015_311210|9.3.6|IOS 12.4.9;Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_9 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.0;14.4;2b2cc82d3f3799de0ef82986db394bded9e1e04d;network/4g;ADID/DD9433AE-6BA2-4585-8F28-185BCB0E4E98;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone9,1;addressid/137688148;supportBestPay/0;appBuild/167454;pushNoticeIsOpen/0;jdSupportDarkMode/0;pv/178.4;apprpd/Home_Main;ref/JDWebViewController;psq/3;ads/;psn/2b2cc82d3f3799de0ef82986db394bded9e1e04d|340;jdv/0|kong|t_1001226363_|jingfen|5c18598e22774744ba111b2097af9998|1611922269858|1611922279;adk/;app_device/IOS;pap/JA2015_311210|9.3.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}

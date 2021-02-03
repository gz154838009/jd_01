const USER_AGENTS = [
  "jdapp; JD4iPhone/167454 (iPhone; iOS 14.4; Scale/2.00)",
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

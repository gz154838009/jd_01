const USER_AGENTS = [
  "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
  "jdapp;android;9.3.5;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/138709979;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/86390;partner/jingdong;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp; JD4iPhone/167454 (iPhone; iOS 14.4; Scale/2.00)",
  "jdapp;android;9.3.4;9;D266436653462-6665326466626;network/4g;model/Mi Note 3;addressid/137888479;aid/15225879b8538ee7;oaid/f3157082db9da676;osVer/28;appBuild/86388;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;5353235373364666-4693734373436656;network/wifi;model/GM1910;addressid/993893557;aid/55257cdfd97474fe;oaid/;osVer/29;appBuild/86388;partner/oppo;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.6;9;8363538313830343131373538363-93D2134313639356631333737346;network/wifi;model/16T;addressid/1312262776;aid/afba6ae53ef2cece;oaid/;osVer/28;appBuild/86560;partner/meizu;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
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

/**
 * @Author: Linyb
 * @Date: 2023-06-24 16:06:52
 * @Description: 系统配置公共参数
 */
interface obj {
  APP_NAME: string,
  DASHBOARD_URL: string,
  
}
const DEFAULT_CONFIG: obj = {
  APP_NAME: "前端学习",
  DASHBOARD_URL: "/welcome",
}

// module.exports = DEFAULT_CONFIG;
export default DEFAULT_CONFIG;
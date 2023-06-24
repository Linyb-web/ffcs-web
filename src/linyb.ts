/**
 * @Author: Linyb
 * @Date: 2023-06-24 16:14:28
 * @Description: 引入全局挂载
 */
import config from '@/config/params';

export default {
  install(app: any) {
		/** 挂载全局对象 */
		app.config.globalProperties.$CONFIG = config;
  }
}
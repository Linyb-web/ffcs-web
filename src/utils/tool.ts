const tool = ['GetQueryString'] as const;
// type Api = Record<(typeof tool)[number], (data: object) => AxiosPromise<any>>;

/** 截取URL上参数 */
// tool.GetQueryString = (name: string) => {
//   let url = window.location.href;
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//   if(!url.split('?')[1]) return;
//   var r = url.split('?')[1].match(reg);
//   if (r != null) {
//     return unescape(r[2]);
//   }
//   return null;
// }
export default tool
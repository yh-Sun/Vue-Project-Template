import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default (app:any) => {
  app.use(ElementPlus, {
    locale: zhCn,
  })
}

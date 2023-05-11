import 'dayjs/locale/ja'
import isBetwen from 'dayjs/plugin/isBetween'
import dayjs from 'dayjs'

dayjs.locale('ja')
dayjs.extend(isBetwen)

export default ({ app }, inject) => {
  inject('dayjs', (string) => dayjs(string))
}

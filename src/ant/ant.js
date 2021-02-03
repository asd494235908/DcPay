import { Row, Col, Button, Input, Select, Statistic, Pagination, ConfigProvider } from 'ant-design-vue'
import {
    UnorderedListOutlined, CloseOutlined, AlipayOutlined, WechatOutlined, UpOutlined, DownOutlined,AndroidFilled,AppleFilled,WechatFilled
} from '@ant-design/icons-vue';
const ant = {
    install(Vue) {
        Vue.component(Row.name, Row)
        Vue.component(Col.name, Col)
        Vue.component(Button.name, Button)
        Vue.component(Input.name, Input)
        Vue.component(Input.TextArea.name, Input.TextArea)
        Vue.component(Select.name, Select)
        Vue.component(Select.Option.displayName, Select.Option)
        Vue.component(Statistic.Countdown.name, Statistic.Countdown)
        Vue.component(ConfigProvider.name, ConfigProvider)
        Vue.component(Pagination.name, Pagination)
    }
}
export default ant
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AzTabbar } from '../../index'

const TabbarDemo = () => {
	return (
		<View>
			<AzTabbar options={[{title:'tab1', key:0},{title:'tab2', key:1},{title:'tab3', key:2}]} current={1} direcition='horizontal' ></AzTabbar>
			<AzTabbar options={[{title:'tab1', key:0},{title:'tab2', key:1},{title:'tab3', key:2}]} current={0} ></AzTabbar>
		</View>
	)
}

export default TabbarDemo
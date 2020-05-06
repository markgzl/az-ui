import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AzButton } from '../../index'

const TabbarDemo = () => {
	return (
		<View>
			<AzButton type='primary' size='small' loading>anniu</AzButton>
			<AzButton type='danger' size='big'>anniu</AzButton>
			<AzButton type='danger' block disabled={true}>anniu</AzButton>
			<AzButton type='danger' loading={true}>anniu</AzButton>
		</View>
	)
}

export default TabbarDemo
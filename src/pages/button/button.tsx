import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AzButton } from '../../index'

const TabbarDemo = () => {
	return (
		<View>
			<AzButton type='danger' size='small'>anniu</AzButton>
			<AzButton type='danger' size='big'>anniu</AzButton>
			<AzButton type='danger' size='small' disabled={true}>anniu</AzButton>
		</View>
	)
}

export default TabbarDemo
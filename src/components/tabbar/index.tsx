import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

import './index.scss'

interface ITabItemProps {
	title: string;
	key?: string | number
}

type TabDirection = 'horizontal' | 'vertical'

interface IAzTabProps {
	options: ITabItemProps[];
	current: number;
	direcition?: TabDirection;
	onChange?: (row: ITabItemProps, e: CommonEvent) => void
}

const Tabbar: Taro.FC<IAzTabProps> = (props) => {

	const { options, current, direcition } = props
	const [_current, setCurrent] = useState(current)

	const classes = classnames('tabbar', {
		[`tabbar-direcition-${direcition}`]: direcition
	}, 'custom-class')

	const handleClick = (item: ITabItemProps, index: number, e: CommonEvent) => {
		console.log(item, e)
		setCurrent(index)
	}


	return (
		<View className={classes}>
			{
				options.map((tab, index) => (
					<View key={`${tab.key}${index}`}
						className={`tabbar-item ${_current === index ? 'tabbar-item__active' : ''}`}
						onClick={(e: CommonEvent) => handleClick(tab, index, e)}>
						{tab.title}
					</View>
				))
			}
		</View>
	)
}
Tabbar.defaultProps = {
	options: [],
	direcition: 'vertical'
}
Tabbar.externalClasses = ['custom-class']

export default Tabbar
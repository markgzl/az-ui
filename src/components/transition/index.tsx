import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { isObj, nextTick, getClassNames } from './utils'

import './index.scss'

interface ITransitionProps {
	show: boolean;
	duration: number;
	name: string
}

const Transition: Taro.FC<ITransitionProps> = (props) => {
	const { show, duration, name} = props
	const classes = classnames('van-transition custom-class',{
		...getClassNames(name)
	})
	return (
		show ? <View className={classes}>

		</View> : null
	)
}

Transition.defaultProps = {
	show: false,
	duration: 300,
	name: 'fade'
}

Transition.externalClasses = ['custom-class']

export default Transition


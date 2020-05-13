import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classnames from 'classnames'
import { nextTick, getClassNames } from './utils'

import './index.scss'

interface ITransitionProps {
	show: boolean;
	name?: string;
	onClick?: () => void
	onTouchMove?: (e: CommonEvent) => void
}

const Transition: Taro.FC<ITransitionProps> = (props) => {
	const { show, name, onTouchMove, onClick } = props
	const [_show, setShow] = useState(show)
	const [currentClass, setCurrentClass] = useState('leave-to')

	const classes = classnames('van-transition', 'custom-class')
	const allClasses = getClassNames(name) || {}
	useEffect(() => {
		console.log(99999)
		show ? enter() : leave()
	}, [show])

	const enter = () => {
		if (currentClass !== 'leave-to') return
		Promise.resolve()
			.then(nextTick)
			.then(() => {
				setShow(true)
				setCurrentClass('enter')
			}).then(nextTick)
			.then(() => {
				setCurrentClass('enter-to')
			})

	}
	const leave = () => {
		if (currentClass !== 'enter-to') return
		Promise.resolve()
			.then(nextTick)
			.then(() => {
				setShow(false)
				setCurrentClass('leave')
			})
			.then(nextTick)
			.then(() => {
				setCurrentClass('leave-to')
			})
			.catch(() => { });
	}

	const handleClick = () => {
		onClick && onClick()
	}

	return (
		<View className={`${classes} ${allClasses[currentClass]}`} onTouchMove={onTouchMove} onClick={handleClick}></View>
	)
}

Transition.defaultProps = {
	show: false,
	name: 'fade'
}

Transition.externalClasses = ['custom-class']


export default Transition


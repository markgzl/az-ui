import Taro from '@tarojs/taro'
import Transition from '../transition/index'
import './index.scss'
import { CommonEvent } from '@tarojs/components/types/common'

interface IOverlayProps {
	show: boolean;
	zIndex?: number;
	onClick?: () => void
}


const Overlay: Taro.FC<IOverlayProps> = ({ show, onClick, children }) => {

	const handleTouchMove = (e: CommonEvent) => {
		e.stopPropagation()
		e.preventDefault()
	}

	const handleClick = () => {
		onClick && onClick()
	}
	return (
		show ? <Transition show={show} custom-class='overlay' name='fade' onTouchMove={handleTouchMove} onClick={handleClick}>
			{children}
		</Transition> : null
	)
}

Overlay.externalClasses = ['custom-class']

export default Overlay
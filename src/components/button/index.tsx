import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames'
import LoadingIcon from '../images/loading.png'
import './index.scss'

type BtnType = 'default' | 'warning' | 'danger' | 'primary' | 'success';
type BtnSize = 'big' | 'default' | 'small';

interface IButtonProps {
	size?: BtnSize;
	type?: BtnType;
	loading?: boolean;
	disabled?: boolean;
	block?: boolean;
	ghost?: boolean;
	borderColor?: string;
	radius?: number;
	onClick?: () => void
}

const Button: Taro.FC<IButtonProps> = (props) => {
	const {size, type, loading, disabled, block, ghost, borderColor, radius, onClick, children } = props
	const classes = classnames('az-button', {
		[`button-size-${size}`]: size,
		[`button-type-${type}`]: type,
		'button-loading': loading,
		'button-block': block,
		'button-disabled': disabled,
		'button-ghost': ghost
	}, 'custom-class')

	const buttonStyle = {
		borderRadius: radius + 'rpx',
		borderColor: borderColor
	}

	const handleClick = () => {
		onClick && onClick() 
	}
	return (
		<View className={classes} style={buttonStyle} onClick={handleClick}>
			{loading && <Image src={LoadingIcon} className='button-loading--icon' />}
			<View>{children}</View>
		</View>
	)
}

Button.defaultProps = {
	size: 'default',
	type: 'default',
	loading: false,
	disabled: false,
	block: false,
	ghost: false,
	borderColor: 'transparent',
	radius: 10
}

Button.externalClasses = ['custom-class']

export default Button
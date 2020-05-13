import Taro from '@tarojs/taro'

const extendFunctionComponent = (config: Taro.FC) => {
	(config.externalClasses || []).push('custom-classs')

	let defaultOptions = {
		multipleSlots: true,
		addGlobalClass: true
	};

	config.options = Object.assign({}, defaultOptions, config.options)
	console.log(config,'config')
}

export default extendFunctionComponent
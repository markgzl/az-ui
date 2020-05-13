import Taro, { useState } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AzOverlay } from '../../index'

const AzTransitionDemo = () => {
	const [ show, setShow ] = useState(false)
	return (
		<View>
			<Button onClick={()=>setShow(!show)}>按钮</Button>
			<AzOverlay show={show} onClick={()=> setShow(false)}></AzOverlay>
		</View>
	)
}

export default AzTransitionDemo
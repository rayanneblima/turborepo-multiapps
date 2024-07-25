import { Text, View } from 'react-native'
import { somar } from '@repo/core'

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                App :: { somar(50, 20) }
            </Text>
        </View>
    )
}

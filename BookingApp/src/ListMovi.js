import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListMovi = () => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    return (
        <View style={styles.container}>


            <FlatList
                data={data}
                renderItem={({ item }) => <ItemList dulieu={item} navigation={navigation} />}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListMovi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
})
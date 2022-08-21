import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';
import colors from '../../constants/Colors';
import { loadAddress } from '../../store/place.actions';

const PlaceListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    useEffect(() => {
        dispatch(loadAddress());
    }, []);
    
    const renderItem = (data) => (
        <PlaceItem
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={() => {}}
        />
    )

    return (
        <View style={{backgroundColor:colors.primary, flex:1}}>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                
            />
        </View>
    )
}

export default PlaceListScreen

import { StyleSheet, Text, View } from 'react-native'
import { useVehicleContext } from '../contexts/VehicleContext';


const Home = () => {
    const { vehicleData } = useVehicleContext();
    const data = vehicleData.details;
    console.log(data);
    return (
        <View>
            <Text style={styles.title}>Home</Text>
            {data &&
                <View className="w-full bg-gray-50 border-gray-400 mt-3 p-3 font-pregular">
                    {Object.entries(data).map(([key, value]) => (
                        <View key={key}>
                            <Text className="font-pregular text-md mt-2 text-gray-400">
                                {key}:
                            </Text>
                            <Text className="font-pregular text-lg ">
                                {value}
                            </Text>
                        </View>
                    ))}
                    <Text className="text-xs text-gray-400 mt-2">
                        {' '}If the details are correct, click on Confirm to continue.</Text>
                </View>
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
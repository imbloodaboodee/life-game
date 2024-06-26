import { View, Image, Pressable, StyleSheet } from "react-native";

const IconImage = ({ image, text, onPress }) => (
    <View style={styles.imageButtonContainer}>
        <Pressable onPress={onPress} style={styles.pressableArea}>
            <Image source={image} style={styles.image} resizeMode="contain" />
            
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    imageButtonContainer: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
    },
    pressableArea: {
        width: 55, 
        height: 55, 
        marginBottom: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        marginTop:18,
    },
    
});

export default IconImage;

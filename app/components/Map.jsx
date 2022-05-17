import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const Map = ({ location }) => {
  return location ? (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    flexGrow: 1,
  },
});

export default Map;

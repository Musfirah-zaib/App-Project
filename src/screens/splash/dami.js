import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  //   const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    // console.log('AGYA', number);
    // setTimeout(() => {
    //   setLoading(false);
    //   navigation.replace("Login");
    // }, 1000);
    getLoggedInUser();

    return () => console.log("Unmounted");
  }, [isFocused]);

  console.log("[Loading]:: ", loading);
  console.log("[isFocused]:: ", isFocused);

  const getLoggedInUser = async () => {
    let data = await AsyncStorage.getItem("user");
    if (data) {
      navigation.replace("Home");
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container }>
      <View style={styles.logo}>
        <Image></Image>
        {/* <Text
          style={styles.logoText}
          //   onPress={() => setLoading(prev => prev + 1)}
        >
        ucp
        </Text> */}
      </View>
      <View style={styles.loading}>
        {loading ? <ActivityIndicator size={"large"} color={"red"} /> : null}
      </View>
    </View>
  );
};

export default Splash;



import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { MOVIES } from "../../utils/movies_data";
import { COLORS } from "../../utils/colors";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const renderItem = ({ index, item }) => {
    return (
      <View
        style={{
          backgroundColor: getRandomColor()?.hex,
          borderWidth: 2,
          borderColor: getRandomColor()?.borderColor,
          marginVertical: 4,
          marginHorizontal: 4,
          paddingHorizontal: 4,
          paddingVertical: 8,
          borderRadius:4 ,
          width: "47%",
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_genre}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 12,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
            alignSelf: "flex-end",
          }}
        >
          {/* {item?.created_at} */}
          {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
        </Text>
      </View>
    );
  };

  const renderItemHorizontal = ({ index, item }) => {
    return (
      <View
        style={{
          backgroundColor: getRandomColor()?.hex,
          borderWidth: 2,
          borderColor: getRandomColor()?.borderColor,
          marginVertical: 4,
          marginHorizontal: 4,
          paddingHorizontal: 4,
          paddingVertical: 8,
          borderRadius: 4,
          width: 300,
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_genre}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 12,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
            alignSelf: "flex-end",
          }}
        >
          {/* {item?.created_at} */}
          {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
        </Text>
      </View>
    );
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Splash");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          height: "100%",
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              marginVertical: 8,
              marginHorizontal: 4,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              Movies
            </Text>
          </View>
          <FlatList
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id}
            numColumns={2}
          />
          <View
            style={{
              marginVertical: 8,
              marginHorizontal: 4,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              Movies
            </Text>
          </View>
          <View style={{ flex: 1, paddingVertical: 8 }}>
            <FlatList
              horizontal
              data={MOVIES}
              renderItem={renderItemHorizontal}
              keyExtractor={(item) => item?.id}
            />
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {MOVIES.map((item) => (
              <View
                style={{
                  backgroundColor: getRandomColor()?.hex,
                  borderWidth: 4,
                  borderColor: getRandomColor()?.borderColor,
                  marginVertical: 4,
                  marginHorizontal: 4,
                  paddingHorizontal: 4,
                  paddingVertical: 8,
                  borderRadius: 4,
                  width: "47%",
                }}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                  }}
                >
                  {item?.movie_name}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                  }}
                >
                  {item?.movie_genre}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 12,
                    fontWeight: "normal",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                    alignSelf: "flex-end",
                  }}
                >
                  {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
                </Text>
              </View>
            ))}
          </View> */}

          <View
            style={{
              marginVertical: 8,
              marginHorizontal: 4,
            }}
          >
            <TouchableOpacity
              style={{
                width: "95%",
                overflow: "hidden",
                backgroundColor: "#fc1000",
                paddingVertical: 16,
                paddingHorizontal: 6,
                marginVertical: 4,
                borderRadius: 4,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
              onPress={() => handleLogout()}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
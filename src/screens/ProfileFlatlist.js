import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import RecipeList from "./RecipeList";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

class ProfileFlatlist extends React.Component {
  state = {
    index: 0,
    bluriii: true,
  };

  render() {
    return (
      <View style={{ marginTop: 45, flex: 1 }}>
        <View>
          <View
            style={[
              {
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row",
                paddingTop: 10,
                paddingRight: 15,
                paddingLeft: 15,
                paddingBottom: 0,
                alignItems: "center",
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <View style={[{ flexDirection: "row" }]}>
                <FontAwesome5 name="store" size={24} color="black" />
                <Text
                  size={14}
                  style={[
                    {
                      fontWeight: "bold",
                      margin: 5,
                    },
                  ]}
                >
                  CookieTown
                </Text>
              </View>
            </View>
            <View
              style={[
                // styles.spaceAround,
                {
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  paddingLeft: 0,
                },
              ]}
            >
              <View style={[{ flexDirection: "row" }]}>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      // marginRight: 20,
                      width: 85,
                      height: 30,
                      // backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <FontAwesome5 name="cookie-bite" size={24} color="black" />
                  <Text style={[{ color: "black", fontWeight: "bold" }]}>
                    {" "}
                    Coins: <Text> 500</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                // styles.spaceAround,
                {
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  paddingLeft: 0,
                },
              ]}
            >
              <View style={[{ flexDirection: "row" }]}>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      // marginRight: 20,
                      width: 70,
                      height: 30,
                      // backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="home-currency-usd"
                    size={30}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              {
                paddingHorizontal: 25,
                paddingBottom: 10,
                paddingTop: 5,
                borderBottomWidth: 1,
              },
            ]}
          >
            <Text style={{ color: "black" }}>
              Enjoy A Homemade Cookie From Our Bakery. Many Styles And Flavors
              Available. Over 300 5-star Verified Reviews And 100% Satisfaction
              Guarantee! Handcrafted Cookies. Delivering Fresh To Door. Baked
              Fresh.
            </Text>
          </View>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              borderBottomWidth: 1,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              //   styles.buttonTabs,
              //   styles.center,
              {
                alignItems: "center",
                justifyContent: "center",
                width: screenWidth * 0.45,
              },
            ]}
            onPress={() => this.onIndexChange(0)}
            ref={(component) => (this.touchable = component)}
          >
            <Text>RECIPES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              //   styles.buttonTabs,

              //   styles.center,
              {
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: screenWidth * 0.45,
              },
            ]}
            onPress={() => this.onIndexChange(1)}
          >
            <Text>FAVORITES</Text>
          </TouchableOpacity>
        </View>

        <RecipeList />
      </View>
    );
  }
}

export default ProfileFlatlist;

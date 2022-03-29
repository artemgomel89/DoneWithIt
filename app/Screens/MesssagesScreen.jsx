import React from "react";
import { FlatList } from "react-native";
import UserItem from "../components/UserItem";
import Screen from "../components/Screen";
import UserItemSeparator from "../components/UserItemSeparator";

const data = [
  {
    id: 1,
    title: "D1",
    description: "Hello",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "D2",
    description: "Hello1234",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "D3",
    description: "1234Hello",
    image: require("../assets/jacket.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <UserItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={UserItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;

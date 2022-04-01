import React, {useState} from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import UserItemSeparator from "../components/UserItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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

  const [messages,setMessages] = useState(initialMessages)
  const [refreshing,setRefreshing] = useState(false);

  const handleDelete = (id) => {
   const newMessages = messages.filter(el => el.id !== id);
   setMessages(newMessages);
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected!")}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() =>  handleDelete(item.id)}
              />
            )}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={UserItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([ {
          id: 3,
          title: "D3",
          description: "1234Hello",
          image: require("../assets/jacket.jpg"),
        },])}
      />
    </Screen>
  );
};

export default MessagesScreen;

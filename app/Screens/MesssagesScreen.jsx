import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "D1",
    description: "Hello",
  },
  {
    id: 2,
    title: "D2",
    description: "Hello1234",
  },
  {
    id: 3,
    title: "Basic text",
    description: "HELLO GEORGE",
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id) => {
    const newMessages = messages.filter((el) => el.id !== id);
    setMessages(newMessages);
  };
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
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: "D3",
              description: "Message",
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

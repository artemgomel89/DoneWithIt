import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import AppContext from "../../auth/context";
import apiMessages from "../../api/messages";

import ListItem from "../../components/lists/ListItem";
import Screen from "../../components/Screen";
import ListItemSeparator from "../../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../../components/lists/ListItemDeleteAction";
import UserIcon from "../../components/icons/UserIcon";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const MessagesScreen = ({ navigation }) => {
  const { user, messages, setMessages } = useContext(AppContext);

  const [dialogs, setDialogs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id) => {
    const newMessages = messages.filter((el) => el.id !== id);
    setMessages(newMessages);
  };

  const getDialogs = (data) => {
    const idList = [];
    const filteredList = [];
    data.forEach((el) => {
      if (el.fromUser.id !== user.userId && !idList.includes(el.fromUser.id)) {
        filteredList.push(el);
        idList.push(el.fromUser.id);
      }
    });
    return filteredList;
  };

  const getUserMessages = async () => {
    setRefreshing(true);
    const resp = await apiMessages.get();
    if (!resp.ok) return Alert.alert("Can't get the messages");

    await setMessages(resp.data);
    await setDialogs(getDialogs(resp.data));
    setRefreshing(false);
  };

  useEffect(() => {
    getUserMessages();
  }, []);

  return (
    <Screen style={{ flex: 1 }}>
      <FlatList
        data={dialogs}
        renderItem={({ item }) => (
          <ListItem
            IconComponent={<UserIcon />}
            title={item.fromUser.name}
            subTitle={item.content}
            image={item.image}
            time={dayjs(item.dateTime).fromNow()}
            onPress={() =>
              navigation.navigate("Dialog", {
                userId: item.fromUser.id,
                userName: item.fromUser.name,
                receivedMessages: messages.filter(
                  (el) => el.fromUser.id === item.fromUser.id
                ),
                sentMessages: messages.filter(
                  (el) => el.toUser.id === item.fromUser.id
                ),
              })
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => getUserMessages()}
      />
    </Screen>
  );
};

export default MessagesScreen;

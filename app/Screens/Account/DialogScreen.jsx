import React, { useCallback, useContext, useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";

import { GiftedChat, Send } from "react-native-gifted-chat";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppContext from "../../auth/context";
import apiMessages from "../../api/messages";

const DialogScreen = ({ route }) => {
  const { user } = useContext(AppContext);
  const [receivedMessages, setReceivedMessages] = useState(
    route.params.receivedMessages
  );
  console.log(route.params.receivedMessages);

  const [sentMessages, setSentMessages] = useState(route.params.sentMessages);

  useEffect(() => {
    setReceivedMessages(
      receivedMessages.map((el) => ({
        _id: el.id,
        text: el.content,
        createdAt: el.dateTime,
        user: {
          _id: el.fromUser.id,
        },
      }))
    );

    setSentMessages(
      sentMessages.map((el) => ({
        _id: el.id,
        text: el.content,
        createdAt: el.dateTime,
        user: {
          _id: user.userId,
        },
      }))
    );
  }, []);

  const onSend = useCallback((messages = []) => {
    setSentMessages((previousMessages) =>
      GiftedChat.append(messages, previousMessages)
    );
    apiMessages.send(messages[0].text, route.params.userId);
    console.log(messages[0].text);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="send-circle"
            backgroundColor="purple"
            size={45}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottom = () => {
    return <MaterialCommunityIcons name="scrollToBottom" />;
  };

  return (
    <GiftedChat
      messages={[...sentMessages, ...receivedMessages].sort(
        (a, b) => b.createdAt - a.createdAt
      )}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.userId,
      }}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottom}
      scrollToBottom
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    marginRight: 5,
  },
});

export default DialogScreen;

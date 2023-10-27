import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!ChatScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

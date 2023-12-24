import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.yukari}>
        <View style={styles.orta}>
          <Text>yazı</Text>
        </View>
      </View>
      <View style={styles.asagi}>
        <View style={styles.satir}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.satir}>
          <View style={[styles.box, styles.hiza]}></View>
          <View style={styles.box}></View>
          <View style={[styles.box, styles.hiza]}></View>
          <View style={styles.box}></View>
          <View style={[styles.box, styles.hiza]}></View>
        </View>
        <View style={styles.satir}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  yukari: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  orta: {
    backgroundColor: '#db0880',
    padding: 10,
  },
  asagi: {
    flex: 2,
    flexDirection: 'column',
  },
  satir: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: '#4b07b2',
  },
  hiza: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});




/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { Provider as PaperProvider, Card, Title } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Card>
        <Card.Title title="React Native With TypeScript and Material UI" subtitle="Beginning with RN"/>
        <Card.Content>
          <Title>
            Card Title
          </Title>
        </Card.Content>
      </Card>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;

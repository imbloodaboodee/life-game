import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { UserProvider } from './store/UserContext';
import WelcomeScreen from './screens/WelcomeScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import SetupScreen from './screens/SetupScreen';
import MainGameScreen from './screens/MainGameScreen';
import PlayerStatsScreen from './screens/PlayerStatsScreen';
import SchoolJobScreen from './screens/SchoolJob/SchoolJobScreen';
import RelationshipScreen from './screens/RelationshipScreen';
import FinanceScreen from './screens/FinanceScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import SubjectListScreen from './screens/SchoolJob/SubjectListScreen';
import { ParttimeJobListScreen, FulltimeJobListScreen } from './screens/SchoolJob/JobListScreen';
import NPCDetailsScreen from './screens/NPCDetailsScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

import DepartmentChoose from './components/layout/DepartmentChoose';
import RandomEvent from './components/layout/RandomEvent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />

    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <UserProvider>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
          <Stack.Screen name="SetupScreen" component={SetupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="MainGameScreen" component={MainGameScreen} />
          <Stack.Screen name="PlayerStatsScreen" component={PlayerStatsScreen} />
          <Stack.Screen name="SchoolJobScreen" component={SchoolJobScreen} />
          <Stack.Screen name="RelationshipScreen" component={RelationshipScreen} />
          <Stack.Screen name="FinanceScreen" component={FinanceScreen} />
          <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} />
          <Stack.Screen name="SubjectListScreen" component={SubjectListScreen} />
          <Stack.Screen name="ParttimeJobListScreen" component={ParttimeJobListScreen} />
          <Stack.Screen name="FulltimeJobListScreen" component={FulltimeJobListScreen} />
          <Stack.Screen name="NPCDetailsScreen" component={NPCDetailsScreen} />

        </Stack.Navigator>
      <DepartmentChoose />
      <RandomEvent />

    </UserProvider>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
      } catch (error) {


      } finally {
        setIsTryingLogin(false);
      }
    }

    fetchToken();
  }, []);


  if (isTryingLogin) {
    return null; 
  }

  return <Navigation />;
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
    </GestureHandlerRootView>

  );
}

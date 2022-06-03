import { Cart } from '@pages/Cart';
import { Home } from '@pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Cart: undefined;
    }
  }
}

export function AppRoutes() {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName={'SignIn'} screenOptions={{ headerShown: false }}>
          <Screen name="Home" component={Home} />
          <Screen name="Cart" component={Cart} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddNewTask } from "@screens/AddNewTask";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="addNewTask"
        component={AddNewTask}
      />
    </Navigator>
  )
}
import { TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CompletedTasks } from "@screens/CompletedTasks";
import { Home } from "@screens/Home";
import { UserProfile } from "@screens/UserProfile";

import { HouseIcon, ListChecksIcon, UserIcon } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomAppRoutes() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.COLORS.GRAY[300],
            height: 60 + insets.bottom,
            borderTopWidth: 0
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity 
              {...props}
              style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} 
              activeOpacity={1}  
            />
          )
        }}
      >
        <Screen 
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <HouseIcon size={34} color={focused ? theme.COLORS.PURPLE : theme.COLORS.GRAY[200]} />
          }}
        />

        <Screen 
          name="completedtasks"
          component={CompletedTasks}
          options={{
            tabBarIcon: ({ focused }) => <ListChecksIcon size={34} color={focused ? theme.COLORS.PURPLE : theme.COLORS.GRAY[200]} />
          }}
        />

        <Screen 
          name="userprofile"
          component={UserProfile}
          options={{
            tabBarIcon: ({ focused }) => <UserIcon size={34} color={focused ? theme.COLORS.PURPLE : theme.COLORS.GRAY[200]} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
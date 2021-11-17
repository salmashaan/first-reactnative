import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from "../../styles";
import cartStore from "../../stores/cartStore";
import { VStack, Badge } from "native-base";
import { observer } from "mobx-react";

const CartButton = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <Badge // bg="red.400"
          colorScheme="default"
          rounded="999px"
          mb={-2}
          ml={2}
          zIndex={1}
          variant="solid"
          alignSelf="flex-start"
          _text={{
            fontSize: 12,
          }}
        >
          {cartStore.totalQuantity}
        </Badge>
        <Icon
          style={styles.cartButton}
          size="21"
          name="shopping-cart"
          onPress={() => navigation.navigate("CartList")}
        />
      </VStack>
    </View>
  );
};

export default observer(CartButton);

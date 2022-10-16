import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";
import Wrapper from "../components/Wrapper";

const LogInButton = () => {
  return (
    <Button backgroundColor="yellow.500" w="full" shadow="4">
      Log In
    </Button>
  );
};

const LogIn = ({ ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper {...props} bottomButton={<LogInButton />}>
      <Flex direction="row">
        <Text fontWeight="medium" fontSize="md">
          Masuk Sebagai{" "}
        </Text>
        <Text fontWeight="bold" fontSize="md">
          Driver{" "}
        </Text>
        <Text fontWeight="medium" fontSize="md">
          atau{" "}
        </Text>
        <Text fontWeight="bold" fontSize="md">
          Admin
        </Text>
      </Flex>
      <VStack w="full" space="4" mt="8">
        <FormControl isInvalid={false}>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.nativeEvent.text)}
            backgroundColor="white"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={false}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Masukkan password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            backgroundColor="white"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Try different from previous passwords.
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </Wrapper>
  );
};

export default LogIn;

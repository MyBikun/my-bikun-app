import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  WarningOutlineIcon
} from "native-base";
import { useContext, useState } from "react";
import Wrapper from "../components/Wrapper";
import { ROLE } from "../constants";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";

const LogInButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      backgroundColor="yellow.500"
      shadow="4"
      mx="8"
      mb="8"
    >
      <Text fontSize="md" fontWeight="medium" color="white">
        Log In
      </Text>
    </Button>
  );
};

const LogIn = ({ ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const authContext = useContext(AuthContext);

  const onSubmit = async () => {
    username === ""
      ? setErrorUsername("Username tidak boleh kosong")
      : setErrorUsername("");
    password === ""
      ? setErrorPassword("Password tidak boleh kosong")
      : setErrorPassword("");

    if (username !== "" && password !== "") {
      auth
        .signInWithEmailAndPassword(username, password)
        .then(() => {
          if (username.includes("admin")) {
            authContext.setRole(ROLE.ADMIN);
          } else if (username.includes("driver")) {
            authContext.setRole(ROLE.DRIVER);
          }
          authContext.setEmail(username);
          props.navigation.navigate("Home");
        })
        .catch(() => {
          setErrorUsername("Username atau password salah");
        });
    }
  };

  return (
    <Wrapper {...props} bottomButton={<LogInButton onPress={onSubmit} />}>
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
        <FormControl isInvalid={!!errorUsername}>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.nativeEvent.text)}
            backgroundColor="white"
            borderColor={!!errorUsername ? "red.500" : "gray.200"}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorUsername}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errorPassword}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Masukkan password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            backgroundColor="white"
            borderColor={!!errorPassword ? "red.500" : "gray.200"}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorPassword}
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </Wrapper>
  );
};

export default LogIn;

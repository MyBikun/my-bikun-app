import * as ImagePicker from "expo-image-picker";
import {
  Box,
  Button,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Text,
  WarningOutlineIcon,
} from "native-base";
import { useEffect, useRef, useState } from "react";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import Wrapper from "../components/Wrapper";

const AddNews = (props) => {
  const richText = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const [showToolbar, setShowToolbar] = useState(false);

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setErrorContent(false);
      setContent(descriptionText);
    } else {
      setErrorContent(true);
      setContent("");
    }
  };

  const onAddImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
    }).then((image) => {
      const str = `data:${image.mime};base64,${image.base64}`;
      richText.current?.insertImage(str);
    });
  };

  const onSubmit = () => {
    const replaceHTML = content.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setErrorContent("Content tidak boleh kosong");
      return;
    }

    if (title === "") {
      setErrorTitle("Judul tidak boleh kosong");
      return;
    }

    alert("SENT");
  };

  useEffect(() => {
    setTitle("");
    setContent("");
  }, []);

  return (
    <Wrapper
      {...props}
      bottomButton={
        <RichToolbar
          style={{
            opacity: showToolbar ? 1 : 0,
          }}
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          actions={[
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
            actions.keyboard,
          ]}
          onPressAddImage={onAddImage}
        />
      }
    >
      <FormControl isInvalid={!!errorTitle}>
        <FormControl.Label>
          <Text fontSize="md">Judul</Text>
        </FormControl.Label>
        <Input
          placeholder="Masukkan Judul"
          value={title}
          onChange={(e) => {
            setTitle(e.nativeEvent.text);
            setErrorTitle(e.nativeEvent.text.length <= 0);
          }}
          backgroundColor="white"
          borderColor={!!errorTitle ? "red.500" : "gray.200"}
          fontSize="md"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorTitle}
        </FormControl.ErrorMessage>
      </FormControl>
      <Box mt="8">
        <Text fontSize="md" mb="1">
          Isi Berita
        </Text>
        <RichEditor
          ref={richText}
          onChange={richTextHandle}
          placeholder="Tulis isi berita di sini"
          androidHardwareAccelerationDisabled={true}
          initialHeight={250}
          onFocus={() => setShowToolbar(true)}
          onBlur={() => setShowToolbar(false)}
          style={
            !!errorContent
              ? {
                  borderWidth: 0.5,
                  borderColor: "#ef4444",
                  borderRadius: 4,
                }
              : {}
          }
        />
      </Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Button
          onPress={onSubmit}
          backgroundColor="yellow.500"
          shadow="4"
          mt="8"
        >
          Submit
        </Button>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default AddNews;

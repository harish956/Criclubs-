import { useAppDispatch } from "@/src/store/hooks";
import { login } from "@/src/store/slices/authSlice";
import {
  Box,
  Center,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Linking } from "react-native";
export const TERMS_AND_CONDITIONS = "https://cricclubs.com/terms.do";
export const PRIVACY_POLICY_URL = "https://cricclubs.com/privacy.do";
export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    let valid = true;
    const newErrors: any = {};

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (validate()) {
      try {
        await AsyncStorage.setItem("@isLoggedIn", "true");
        dispatch(login());
      } catch (e) {
        console.log("Error storing login state", e);
      }
    }
  };

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderBlockColor: "pink",
      }}
    >
      <Center style={{ marginTop: 40 }}>
        <Image
          source={require("../assets/images/logo.png")}
          alt="CricClubs Logo"
          h={146.6}
          w={300}
        />
      </Center>

      <VStack style={{ marginTop: 40, gap: 16 }}>
        <Text fontSize={24} fontFamily="Inter_700Bold">
          Welcome Back !
        </Text>

        <FormControl isInvalid={!!errors.email}>
          <FormControlLabel>
            <FormControlLabelText
              fontSize={12}
              style={{ color: "#286DAD", fontWeight: "600" }}
              fontFamily="Poppins_600SemiBold"
            >
              Email Address
            </FormControlLabelText>
          </FormControlLabel>
          <Input h={48} variant="outline" borderRadius={32}>
            <InputField
              fontFamily="Poppins_400Regular"
              fontSize={14}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
            />
          </Input>
          {errors.email && (
            <FormControlError>
              <FormControlErrorText>{errors.email}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormControlLabel>
            <FormControlLabelText
              fontSize={12}
              style={{ color: "#286DAD", fontWeight: "600" }}
              fontFamily="Poppins_600SemiBold"
            >
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Input h={48} variant="outline" borderRadius={32}>
            <InputField
              fontFamily="Poppins_400Regular"
              fontSize={14}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password)
                  setErrors({ ...errors, password: undefined });
              }}
            />
            <InputSlot style={{ paddingRight: 12 }}>
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <InputIcon
                  as={() => (
                    <Icon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      className="text-typography-500 m-2 w-4 h-4"
                    />
                  )}
                />
              </Pressable>
            </InputSlot>
          </Input>
          {errors.password && (
            <FormControlError>
              <FormControlErrorText>{errors.password}</FormControlErrorText>
            </FormControlError>
          )}
          <Pressable style={{ alignSelf: "flex-end", marginTop: 4 }}>
            {({ pressed }) => (
              <Text
                style={{ color: "#EF4444" }}
                fontSize={12}
                fontFamily="Poppins_500Medium"
                transform={[{ scale: pressed ? 0.95 : 1 }]}
              >
                Forgot Password?
              </Text>
            )}
          </Pressable>
        </FormControl>
        <Pressable onPress={handleLogin}>
          {({ pressed }) => (
            <Box
              transform={[{ scale: pressed ? 0.95 : 1 }]}
              mt={16}
              bg="#286DAD"
              px={16}
              py={12}
              borderRadius={8}
            >
              <Text color="#FFFFFF" fontWeight="bold" textAlign="center">
                Login
              </Text>
            </Box>
          )}
        </Pressable>

        <Text
          style={{
            textAlign: "center",
            marginTop: 8,
            color: "#6B7280",
          }}
          fontSize={12}
        >
          By continuing, you agree to CricClubs{" "}
          <Text
            style={{ color: "#286DAD", textDecorationLine: "underline" }}
            fontFamily="Inter_600Semibold"
            fontSize={12}
            onPress={() => {
              Linking.openURL(TERMS_AND_CONDITIONS);
            }}
          >
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text
            style={{ color: "#286DAD", textDecorationLine: "underline" }}
            fontSize={12}
            onPress={() => {
              Linking.openURL(PRIVACY_POLICY_URL);
            }}
          >
            Privacy Policy
          </Text>
        </Text>
      </VStack>
    </Box>
  );
}

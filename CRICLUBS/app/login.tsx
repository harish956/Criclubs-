import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Pressable } from "react-native";

export default function LoginScreen() {
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
          source={require("../assets/images/icon.png")}
          alt="CricClubs Logo"
          style={{ height: 2, width: 2 }}
        />
      </Center>

      <VStack style={{ marginTop: 40, gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome Back !</Text>

        <FormControl isInvalid={!!errors.email}>
          <FormControlLabel>
            <FormControlLabelText
              style={{ color: "#2563EB", fontWeight: "600" }}
            >
              Email Address
            </FormControlLabelText>
          </FormControlLabel>
          <Input variant="outline" style={{ borderRadius: 999 }}>
            <InputField
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
              style={{ color: "#2563EB", fontWeight: "600" }}
            >
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Input variant="outline" style={{ borderRadius: 999 }}>
            <InputField
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password)
                  setErrors({ ...errors, password: undefined });
              }}
            />
            {/* <InputSlot style={{ paddingRight: 12 }}>
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
              </Pressable>
            </InputSlot> */}
          </Input>
          {errors.password && (
            <FormControlError>
              <FormControlErrorText>{errors.password}</FormControlErrorText>
            </FormControlError>
          )}
          <Pressable style={{ alignSelf: "flex-end", marginTop: 4 }}>
            <Text style={{ color: "#EF4444", fontSize: 14 }}>
              Forgot Password?
            </Text>
          </Pressable>
        </FormControl>

        {/* Login Button */}
        <Button
          style={{
            marginTop: 16,
            backgroundColor: "#2563EB",
            paddingVertical: 12,
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </Button>

        {/* Terms */}
        <Text
          style={{
            textAlign: "center",
            marginTop: 8,
            fontSize: 12,
            color: "#6B7280",
          }}
        >
          By continuing, you agree to CricClubs{" "}
          <Text style={{ color: "#2563EB", textDecorationLine: "underline" }}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={{ color: "#2563EB", textDecorationLine: "underline" }}>
            Privacy Policy
          </Text>
        </Text>
      </VStack>
    </Box>
  );
}

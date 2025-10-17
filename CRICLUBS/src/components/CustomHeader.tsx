import { Image } from "@gluestack-ui/themed";
export default function CustomHeader() {
  return (
    <Image
      source={require("../../assets/images/cricLogo.png")}
      style={{ width: 150, height: 23 }}
      alt="logo"
    />
  );
}

import { jwtDecode } from "jwt-decode";
import { SD_Rules } from "../Utility/SD";

const WithAdminAuth = (WrappedComponnet: any) => {
  return (props: any) => {
    const accessToken = localStorage.getItem("token") ?? "";

    if (accessToken) {
      const decode: {
        role: string;
      } = jwtDecode(accessToken);

      if (decode.role !== SD_Rules.ADMIN) {
        window.location.replace("/accessDenied");
        return null;
      }
    } else {
      window.location.replace("/login");
      return null;
    }

    return <WrappedComponnet {...props} />;
  };
};

export default WithAdminAuth;

const WithAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.replace("/login");
      // return null is important to render for that page
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;

import { SplashScreen } from "components/common/SplashScreen";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);
  const [isAuthenticated] = useState(true); // TO DO

  React.useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!isAuthenticated) {
      router.replace({
        pathname: "/login",
        query: { redirect: router.asPath },
      });
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router.isReady]);

  // The following route is a private route.
  // So, we should not show any content from the rendered page
  // In this case, we will show Splash Screen component
  if (!checked) {
    return <SplashScreen />;
  }

  return <>{children}</>;
};

export default AuthGuard;

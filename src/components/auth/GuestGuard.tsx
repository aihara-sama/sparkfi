import { useRouter } from "next/router";
import React, { useState } from "react";

interface GuestGuardProps {
  children: React.ReactNode;
}

const GuestGuard: React.FC<GuestGuardProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const [isAuthenticated] = useState(false); // TO DO

  React.useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (isAuthenticated) {
      router.replace((router.query.redirect as string) ?? "/profile");
    }
  }, [router.isReady, isAuthenticated]);

  // The following route must be a public route e.g., Login page
  // So, the rendered HTML must be shown as soon as possible
  return <>{children}</>;
};

export default GuestGuard;

"use client";

import { useSubscriptionStore } from "@/app/store/store";
import { subscriptionRef } from "@/lib/converters/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("User has NO Subscription");
          // set no sub
          setSubscription(null);
          return;
        } else {
          console.log("User has subbed.");
          // set sub
          setSubscription(snapshot.docs[0].data());
        }
      },
      (error) => {
        console.log("error getting documents", error);
      }
    );
  }, [session, setSubscription]);

  return <>{children}</>;
}

export default SubscriptionProvider;

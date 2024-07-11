"use client";

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    //push doc to db
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1O5tfIDFUEFzb0elimttBaDH",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // ... stripe ext. on firebase will create a checkout session - realtime event
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        //show error to customer
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        //we have stripe url. proceed
        window.location.assign(url);
        setLoading(false);
      }
    });
    //redirect to user page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* if subbed, continue */}
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block bg-indigo-600 leading-6 px-3.5 py-2.5 text-sm font-semibold text-center text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md"
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </div>
  );
}

export default CheckoutButton;

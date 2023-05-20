"use client";

import { useState } from "react";

import Header from "@/components/Header";
import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { postData } from "@/libs/helpers";

const Account = () => {
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, userDetails } = useUser();

  const [loading, setLoading] = useState(false);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return ( 
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <div className="mb-7 px-6">
        {!subscription && (
          <div className="flex flex-col gap-y-4">
          <p>No active plan.</p>
          <Button 
            onClick={subscribeModal.onOpen}
            className="w-[300px]"
          >
            Subscribe
          </Button>
        </div>
        )}
        {subscription && (
          <div className="flex flex-col gap-y-4">
            <p>You are currently on the <b>{subscription?.prices?.products?.name}</b> plan.</p>
            <Button
              disabled={loading || isLoading}
              onClick={redirectToCustomerPortal}
              className="w-[300px]"
            >
              Open customer portal
            </Button>
          </div>
        )}
      </div>
    </div>
   );
}
 
export default Account;
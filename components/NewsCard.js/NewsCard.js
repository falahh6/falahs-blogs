"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { subscriptions } from "@/lib/users_config";

const NewsCard = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const emailRef = useRef();

  const handleEmailSubmit = async (e) => {
    setLoading(true);
    const email = emailRef.current.value;
    if (email.trim() === "") {
      setErrors(true);
      setLoading(false);
      return;
    }

    subscriptions({ email });

    toast.success("Your subscription is recieved, Thankyou!");
    setLoading(false);
    emailRef.current.value = "";
  };

  const handleChange = () => {
    if (emailRef.current.value.trim().includes("@")) {
      setErrors(false);
    } else {
      setErrors(true);
    }
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Stay up to date</CardTitle>
        <CardDescription className="pt-1">
          Get notified when new blogs are published. No Spam.
        </CardDescription>
        <CardContent className="w-full flex">
          <input
            type="email"
            placeholder="Email"
            className={`${"mr-[1rem] text-[14px] w-full rounded-md p-1 pl-2 outline-none border border-slate-200 focus:border focus:border-gray-500 focus:shadow-md transition duration-200 ease-in-out"} ${
              errors ? "focus:border-red-500" : "focus:border-gray-500"
            } `}
            ref={emailRef}
            onChange={handleChange}
          />

          <Button disabled={errors ? true : false} onClick={handleEmailSubmit}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Join"
            )}
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default NewsCard;

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const NewsCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Stay up to date</CardTitle>
        <CardDescription className="pt-1">
          Get notified when new blogs are published. No Spam
        </CardDescription>
        <CardContent className="w-full flex">
          <input
            type="email"
            placeholder="Email"
            className="mr-[1rem] text-[14px] w-full rounded-md p-1 pl-2 outline-none border border-gray-200 focus:shadow-sm transition duration-200 ease-in-out"
          />
          <Button>
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

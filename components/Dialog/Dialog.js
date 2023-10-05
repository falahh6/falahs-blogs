import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FeedbackDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="hover:cursor-pointer">Share Feedback</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Feedback</DialogTitle>
        </DialogHeader>
        <div className="grid w-full gap-2">
          <textarea
            className="rounded-md p-1 pl-2 outline-none border border-gray-200 focus:shadow-sm transition duration-200 ease-in-out focus-visible:border-gray-500 text-[14px]"
            variant="soft"
            placeholder="Your feedback."
            rows={4}
          />
          <Button>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

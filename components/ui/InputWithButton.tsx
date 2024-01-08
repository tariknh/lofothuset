import { Input } from "@/components/ui/input";
import { Button } from "./button";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="E-Post Adresse" />
      <Button className="text-lg" variant={"link"}>
        Send
      </Button>
    </div>
  );
}

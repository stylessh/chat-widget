import { MessageSquare } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface AppProps {
  chatId: string | null | undefined;
}

function App({ chatId }: AppProps) {
  if (!chatId) {
    return null;
  }

  return (
    <div className="absolute bottom-5 right-5">
      <Popover>
        <PopoverTrigger asChild>
          <Button size="iconLg" className="rounded-full">
            <MessageSquare size={24} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          className="mr-6 mb-4 h-[80vh] w-96 grid grid-rows-[60px,1fr,30px]"
        >
          <header className="bg-indigo-500 h-full rounded-t-md p-4 text-white">
            <div className="flex gap-x-2 items-center">
              <MessageSquare size={30} />
              <h3 className="text-xl -mt-0.5">Company</h3>
            </div>
          </header>

          <div></div>

          <div className="p-1 text-center text-sm italic text-gray-500">
            <p>Powered by ChatWidget ({chatId})</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;

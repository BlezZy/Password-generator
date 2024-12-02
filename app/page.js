import {Form} from "@/app/components/form";
import {Password} from "@/app/components/Password";

export default function Home() {
  return (
      <div className="flex justify-center items-center mt-24">
            <div className="w-[27%] border-[1px] border-gray-300 rounded-md p-4 flex flex-col">
              <Form/>
            </div>
      </div>
  );
}

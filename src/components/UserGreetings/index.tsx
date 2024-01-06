import { Avatar } from "@nextui-org/react";
import { getServerSession } from "next-auth";

const UserGreetings = async () => {
        const session = await getServerSession();
        return ( 
            <div className="flex items-center gap-4 font-semibold text-4xl">
                <Avatar src={session?.user?.image || ''} size="lg" />
                <h1>Hi, {session?.user?.name}</h1>
            </div>  
        );
}
 
export default UserGreetings;
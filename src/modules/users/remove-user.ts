import User from "../../models/User";
import { NotFoundError } from "../../shared/errors";

async function removeUser(id: string) {
    const user = await User.findById(id);

    if (!user) {
        throw new NotFoundError("User is not found");
    }

    await User.findByIdAndDelete(id);

    return true;
}

export default removeUser;

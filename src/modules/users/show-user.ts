import User from "../../models/User";
import { NotFoundError } from "../../shared/errors";
import { ShowUserData } from "./_types";

async function showUser({ id }: ShowUserData) {
    const user = await User.findById(id);

    if (!user) {
        throw new NotFoundError("User is not found");
    }

    return user;
}

export default showUser;

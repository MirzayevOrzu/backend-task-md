import User from "../../models/User";
import { NotFoundError } from "../../shared/errors";
import { EditUserData } from "./_types";

async function editUser(id: string, data: EditUserData) {
    const user = await User.findById(id);

    if (!user) {
        throw new NotFoundError("User is not found");
    }

    await User.findByIdAndUpdate(id, data);

    return true;
}

export default editUser;

import bcrypt from "bcryptjs";
import User from "../../models/User";
import { BadRequestError } from "../../shared/errors";
import { RegisterData } from "./_types";

async function registerUser(data: RegisterData) {
    const { email, password } = data;

    const emailUsed = await User.findOne({ email });

    if (emailUsed) {
        throw new BadRequestError("Email is already used");
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    await User.create({ ...data, password: hashedPwd });

    return true;
}

export default registerUser;

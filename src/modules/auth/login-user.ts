import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../shared/config";
import User from "../../models/User";
import { UnauthorizedError } from "../../shared/errors";
import { LoginData } from "./_types";

async function loginUser({ email, password }: LoginData) {
    const existing = await User.findOne({ email });

    if (!existing) {
        throw new UnauthorizedError("Incorrect email or password");
    }

    const match = await bcrypt.compare(password, existing.password);

    if (!match) {
        throw new UnauthorizedError("Incorrect email or password");
    }

    const payload = { user: { id: existing.id, role: existing.role } };

    const token = jwt.sign(payload, config.jwt.secret, { expiresIn: "1d" });

    return { token };
}

export default loginUser;

export type { AuthSchema } from "./types/AuthSchema";

export { authSlice, authReducer } from "./slice/AuthSlice";

export { getAuthData } from "./selectors/getAuthData";
export { getAccesToken } from "./selectors/getAccesToken";

export { login } from "./services/login";

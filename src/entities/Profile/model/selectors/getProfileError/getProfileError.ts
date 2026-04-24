import { StateSchema } from "app/providers/StoreProvider/index";

export const getProfileError = (state: StateSchema) => state.profile?.error;

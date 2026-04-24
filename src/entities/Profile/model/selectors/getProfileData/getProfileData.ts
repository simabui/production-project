import { StateSchema } from "app/providers/StoreProvider/index";

export const getProfileData = (state: StateSchema) => state.profile?.data;

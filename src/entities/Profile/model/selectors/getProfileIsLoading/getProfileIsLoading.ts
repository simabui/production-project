import { StateSchema } from "app/providers/StoreProvider/index";

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading || "";

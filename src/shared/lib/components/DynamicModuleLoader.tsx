import { Reducer } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useStore } from "react-redux";

import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useAppDispatch } from "app/providers/StoreProvider/hooks/useAppDispatch";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
  children: React.ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}
export default function DynamicModuleLoader({ children, reducers, removeAfterUnmount = false }: DynamicModuleLoaderProps) {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    (Object.entries(reducers) as ReducersListEntry[]).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        (Object.entries(reducers) as ReducersListEntry[]).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  }, []);
  return <>{children}</>;
}

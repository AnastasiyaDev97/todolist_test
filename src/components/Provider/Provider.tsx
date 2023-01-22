import { createContext, FC, ReactNode } from 'react';

import { TodolistStoreDataType } from 'hooks/useGetTodolistsData/useGetTodolistsData';
import { Nullable } from 'types/Nullable';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const StoreContext = createContext<Nullable<TodolistStoreDataType>>(null);

type ProviderPropsType = {
  value: Nullable<TodolistStoreDataType>;
  children: ReactNode;
};

export const Provider: FC<ProviderPropsType> = ({
  value,
  children,
}): ReturnComponentType => {
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

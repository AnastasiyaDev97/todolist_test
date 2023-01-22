import { createContext, FC, ReactNode } from 'react';

import { TodolistType } from 'data/types';
import { Nullable } from 'types/Nullable';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StoreContext = createContext<Nullable<TodolistType>>(null);

type ProviderPropsType = {
  value: Nullable<TodolistType>;
  children: ReactNode;
};

export const Provider: FC<ProviderPropsType> = ({
  value,
  children,
}): ReturnComponentType => {
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

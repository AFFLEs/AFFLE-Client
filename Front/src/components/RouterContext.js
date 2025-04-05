// 현재 사용자가 보고 있는 페이지 경로(=route)를 전역에서 추적하기 위한 페이지
import React, { createContext, useContext, useState } from 'react';

const RouterContext = createContext();

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('');

  return (
    <RouterContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouterContext.Provider>
  );
};
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          themes={['light', 'dark', 'modern']}
        >
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}

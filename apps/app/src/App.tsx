import { NextUIProvider } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

function App({children}:PropsWithChildren) {

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default App

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextAuthProviders from './NextAuthProviders';
import { ToastContainer } from 'react-toastify';
import DashboardProvider from './DashboardProvider';


const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProviders>
        <DashboardProvider>
          {children}
          <ToastContainer />
        </DashboardProvider>
      </NextAuthProviders>
    </QueryClientProvider>
  );
}
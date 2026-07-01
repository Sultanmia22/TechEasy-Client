import { ArrowRight, Check, Lock, TrendingUp } from 'lucide-react'
import React from 'react'

const AccountOverview = () => {
  return (
    <div className='p-4 md:p-8 bg-base-100 rounded-xl'>
        <div>
            <h4 className='text-xl font-medium'> Account Overview </h4> 
        </div>

        <div className='mt-10 space-y-5 md:space-y-9'>
            <section className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0'>
                <div className='flex items-center gap-2 min-w-0'>
                    <div className='bg-green-50 p-2 rounded-lg shrink-0'>
                        <Check className='w-4 h-4 text-green-500' />
                    </div>
                    <div className='flex flex-col min-w-0'>
                        <span className='font-medium'>Account Status</span>
                        <span className='text-sm text-gray-600 dark:text-gray-300 truncate'>Active and verified</span>
                    </div>
                </div>
                <div className='self-start sm:self-auto'>
                    <span className='text-green-500 font-medium text-sm'>Active</span>
                </div>
            </section>

           <section className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0'>
                <div className='flex items-center gap-2 min-w-0'>
                    <div className='bg-purple-50 p-2 rounded-lg shrink-0'>
                        <Lock className='w-4 h-4 text-purple-500' />
                    </div>
                    <div className='flex flex-col min-w-0'>
                        <span className='font-medium'>Two-Factor Auth</span>
                        <span className='text-sm text-gray-600 dark:text-gray-300 truncate'>Enabled for security</span>
                    </div>
                </div>
                <div className='self-start sm:self-auto'>
                    <span className='text-purple-500 font-medium text-sm'>Enabled</span>
                </div>
           </section>

            <section className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0'>
                <div className='flex items-center gap-2 min-w-0'>
                    <div className='bg-amber-50 p-2 rounded-lg shrink-0'>
                        <TrendingUp className='w-4 h-4 text-amber-500' />
                    </div>
                    <div className='flex flex-col min-w-0'>
                        <span className='font-medium'>Last Login</span>
                        <span className='text-sm text-gray-600 dark:text-gray-300 truncate'>Today at 10:30 AM</span>
                    </div>
                </div>
                <div className='self-start sm:self-auto'>
                    <ArrowRight className='w-4 h-4 text-gray-400' />
                </div>
            </section>
        </div>
    </div>
  )
}

export default AccountOverview
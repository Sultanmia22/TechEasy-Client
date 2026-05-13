<!-- Default personal Information -->



      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {personalInfo.map((item) => (
            <div key={item.label} className='flex items-center gap-3 p-3 rounded-xl bg-base-200'>
              <div className='p-2 rounded-lg bg-primary/10 shrink-0'>
                <item.icon className='w-4 h-4 text-primary' />
              </div>
              <div className='min-w-0'>
                <p className='text-[11px] text-neutral uppercase tracking-wide font-medium'>{item.label}</p>
                <p className='text-sm font-medium text-base-content truncate'>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Verification */}
        <div className='flex items-center gap-3 mt-4 pt-4 border-t border-base-300'>
          <ShieldCheck className='w-5 h-5 text-secondary' />
          <div className='flex-1'>
            <p className='text-sm font-medium text-base-content'>Account Verification</p>
            <p className='text-xs text-neutral'>Email and phone number are verified</p>
          </div>
          <span className='badge badge-sm bg-secondary/10 text-secondary border-0'>Verified</span>
        </div>
      </div>

<!-- Default Address -->
<div className='flex flex-col items-center justify-center py-10 text-center'>
        <div className='p-4 rounded-full bg-base-200 mb-4'>
          <MapPinOff className='w-8 h-8 text-neutral' />
        </div>
        <p className='text-sm font-medium text-base-content'>No saved addresses</p>
        <p className='text-xs text-neutral mt-1'>Add an address for faster checkout</p>
        <button className='btn btn-sm btn-primary mt-4 gap-2'>
          <Plus size={15} /> Add Address
        </button>
      </div>

      <div className='space-y-3'>
        {addresses.map((addr) => (
          <div key={addr.id} className='flex items-start gap-4 p-4 rounded-xl bg-base-200 group'>
            <div className='p-2.5 rounded-lg bg-primary/10 shrink-0'>
              <addr.icon className='w-4 h-4 text-primary' />
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2 mb-1'>
                <span className='text-sm font-semibold text-base-content'>{addr.type} Address</span>
                {addr.isDefault && (
                  <span className='badge badge-xs bg-secondary/10 text-secondary border-0'>Default</span>
                )}
              </div>
              <p className='text-sm font-medium text-base-content'>{addr.name}</p>
              <p className='text-sm text-neutral'>{addr.address}</p>
              <p className='text-sm text-neutral'>{addr.city}, {addr.country}</p>
              <p className='text-sm text-neutral flex items-center gap-1 mt-1'>
                <Phone size={13} /> {addr.phone}
              </p>
            </div>
            <button className='btn btn-sm btn-ghost opacity-0 group-hover:opacity-100 transition-opacity text-neutral hover:text-primary shrink-0'>
              <Edit3 size={15} />
            </button>
          </div>
        ))}
      </div>
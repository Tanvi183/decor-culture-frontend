'use client';

export default function PaymentMethods() {
  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      brand: 'Visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true
    },
    {
      id: 2,
      type: 'mobile',
      provider: 'bKash',
      number: '+880 1700-***456',
      isDefault: false
    }
  ];

  return (
    <>
      {/* PageHeading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#141514] dark:text-white">
            Payment Methods
          </h1>
          <p className="text-lg text-[#717a75] font-light">
            Manage your payment options.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-base">add</span>
          Add Payment Method
        </button>
      </div>

      {/* Payment Methods List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((method) => (
          <div key={method.id} className="bg-white dark:bg-[#222] border border-[#f2f3f2] dark:border-[#333] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#f2f3f2] dark:bg-[#2a2a2a] rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    {method.type === 'card' ? 'credit_card' : 'phone_android'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    {method.type === 'card' ? `${method.brand} ****${method.last4}` : method.provider}
                  </h3>
                  {method.isDefault && (
                    <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">
                      Default
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-[#717a75] hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="p-2 text-[#717a75] hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-[#717a75]">
              {method.type === 'card' ? (
                <p>Expires {method.expiryMonth}/{method.expiryYear}</p>
              ) : (
                <p>{method.number}</p>
              )}
            </div>

            {!method.isDefault && (
              <button className="mt-4 w-full py-2 border border-[#f2f3f2] dark:border-[#333] rounded-lg text-sm font-medium hover:bg-[#f2f3f2] dark:hover:bg-[#2a2a2a] transition-colors">
                Set as Default
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Security Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">security</span>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Secure Payments</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              All payment information is encrypted and securely stored. We never store your full card details on our servers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
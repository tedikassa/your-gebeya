import { useState } from "react";

export default function MerchantWallet() {
  // Sample wallet data
  const [wallet, setWallet] = useState({
    balance: 1200.5,
    pendingPayout: 300.0,
    totalEarnings: 2000.0,
    transactions: [
      {
        id: 1,
        type: "order payment",
        amount: 200,
        status: "paid",
        date: "2025-09-05",
      },
      {
        id: 2,
        type: "order payment",
        amount: 150,
        status: "pending",
        date: "2025-09-04",
      },
      {
        id: 3,
        type: "payout",
        amount: 300,
        status: "completed",
        date: "2025-09-03",
      },
    ],
  });

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Wallet</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded text-center">
          <div className="text-sm text-gray-600">Balance</div>
          <div className="text-2xl font-bold text-green-800">
            ETB {wallet.balance}
          </div>
        </div>
        <div className="p-4 bg-yellow-100 rounded text-center">
          <div className="text-sm text-gray-600">Pending Payout</div>
          <div className="text-2xl font-bold text-yellow-800">
            ETB {wallet.pendingPayout}
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded text-center">
          <div className="text-sm text-gray-600">Total Earnings</div>
          <div className="text-2xl font-bold text-blue-800">
            ETB {wallet.totalEarnings}
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Amount</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {wallet.transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="border px-3 py-2">{tx.id}</td>
                <td className="border px-3 py-2">{tx.type}</td>
                <td className="border px-3 py-2">ETB {tx.amount}</td>
                <td className="border px-3 py-2">{tx.status}</td>
                <td className="border px-3 py-2">{tx.date}</td>
              </tr>
            ))}
            {wallet.transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

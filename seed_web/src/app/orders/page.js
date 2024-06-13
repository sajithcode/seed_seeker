'use client';
import Link from "next/link";
import { useState } from "react";

export default function OrdersPage() {
  // Hardcoded orders for demonstration
  const hardcodedOrders = [
    {
      _id: '1',
      paid: true,
      userEmail: 'customer1@example.com',
      createdAt: 'June 14, 2024, 10:00 AM',
      cartProducts: [
        { name: 'Product 1' },
        { name: 'Product 2' },
      ],
    },
    {
      _id: '2',
      paid: false,
      userEmail: 'customer2@example.com',
      createdAt: 'June 15, 2024, 2:30 PM',
      cartProducts: [
        { name: 'Product 3' },
        { name: 'Product 4' },
      ],
    },
  ];

  const [loadingOrders, setLoadingOrders] = useState(false);

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <div className="mt-8">
        {loadingOrders && (
          <div>Loading orders...</div>
        )}
        {hardcodedOrders?.length > 0 && hardcodedOrders.map(order => (
          <div
            key={order._id}
            className="bg-gray-100 mb-2 p-4 rounded-lg flex flex-col md:flex-row items-center gap-6">
            <div className="grow flex flex-col md:flex-row items-center gap-6">
              <div>
                <div className={
                  (order.paid ? 'bg-green-500' : 'bg-red-400')
                  + ' p-2 rounded-md text-white w-24 text-center'
                }>
                  {order.paid ? 'Paid' : 'Not paid'}
                </div>
              </div>
              <div className="grow">
                <div className="flex gap-2 items-center mb-1">
                  <div className="grow">{order.userEmail}</div>
                  <div className="text-gray-500 text-sm">{order.createdAt}</div>
                </div>
                <div className="text-gray-500 text-xs">
                  {order.cartProducts.map(p => p.name).join(', ')}
                </div>
              </div>
            </div>
            <div className="justify-end flex gap-2 items-center whitespace-nowrap">
              <Link href={"/orders/"+order._id} className="button">
                Show order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

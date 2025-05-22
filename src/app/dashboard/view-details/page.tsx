"use client";

import { useEffect, useState } from "react";
import { getItems } from "../../service/service";
import { useRouter } from "next/navigation";
export default function ViewDetailsPage() {
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const orders = Array.from(getItems());
    const status = localStorage.getItem("selectedtype");

    if (status && status !== "Total") {
      const filtered = orders.filter((order: any) => order.Order_Status === status);
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); // Show all if "Total" or null
    }
  }, []);

  const statusBadge = (status: string) => {
    const base = "inline-block px-2 py-1 text-xs font-semibold rounded-full";
    switch (status.toLowerCase()) {
      case "delivered":
        return `${base} bg-green-100 text-green-700`;
      case "pending":
        return `${base} bg-yellow-100 text-yellow-800`;
      case "transit":
        return `${base} bg-blue-100 text-blue-700`;
      default:
        return `${base} bg-gray-200 text-gray-800`;
    }
  };
const backbutton =() =>{
  router.push('/dashboard')
}
  return (
    <div className="p-4 space-y-6">
        <button
        onClick={() => backbutton()}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        ← Back
      </button>
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
      🍽️ Food Orders Dashboard
    </h1>
      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found for selected status.</p>
      ) : (
        filteredOrders.map((order: any) => (
          <div
            key={order.Order_ID}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-800">
                Order #{order.Order_ID}
              </h2>
              <span className={statusBadge(order.Order_Status)}>
                {order.Order_Status}
              </span>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Customer:</strong> {order.Customer_Name}</p>
              <p><strong>Phone:</strong> {order.Customer_Phone}</p>
              <p><strong>Address:</strong> {order.Customer_Address}</p>
              <p>
                <strong>Delivery Status:</strong> {order.Delivery_Status}
              </p>
              <p>
                <strong>Delivery Person:</strong>{" "}
                {order.Delivery_Person || <span className="text-gray-400">N/A</span>}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-bold text-gray-700 mb-2">Items Ordered:</h3>
              <ul className="space-y-1 pl-4 list-disc text-gray-700 text-sm">
                {order.Items.map((item: any, index: number) => (
                  <li key={index}>
                    <span className="font-medium">{item.Item_Name}</span> - ₹
                    {item.Total_Price.toFixed(2)} (x{item.Quantity})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

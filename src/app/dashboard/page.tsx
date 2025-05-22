"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  TooltipProps ,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";
import { getItems } from "../service/service";
const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    const filteredItems = payload.filter((entry) => entry.value > 0);
    const leftItems = filteredItems.slice(0, 25);
    const rightItems = filteredItems.slice(25);

    return (
      <div className="bg-white shadow-lg rounded-md p-4 border border-gray-200 text-sm max-w-2xl">
        <p className="font-semibold mb-2">Order ID: {label}</p>
        <div className="flex gap-8">
          <div className="flex-1">
            {leftItems.map((entry, index) => (
              <div key={index} className="flex justify-between mb-1">
                <span className="mr-2">{entry.name}</span>
                <span className="font-medium text-gray-700">₹{entry.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
          {rightItems.length > 0 && (
            <div className="flex-1">
              {rightItems.map((entry, index) => (
                <div key={index} className="flex justify-between mb-1">
                  <span className="mr-2">{entry.name}</span>
                  <span className="font-medium text-gray-700">₹{entry.value.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};



const COLORS = [
  "#4f46e5", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899",
  "#6366f1", "#f97316", "#22c55e", "#14b8a6", "#eab308", "#f43f5e", "#1e3a8a", 
  "#a855f7", "#84cc16", "#e11d48", "#1e40af", 
  "#facc15", "#f472b6", "#7c3aed", "#15803d", "#fb923c", "#0891b2", "#e879f9",
  "#f87171", "#3f6212", "#5eead4", "#fde047", "#d946ef", "#1e40af", "#d97706",
  "#047857", "#7e22ce", "#991b1b", "#6d28d9", "#1d4ed8", "#fcd34d", "#dc2626",
  "#34d399", "#fde68a", "#f9a8d4", "#65a30d", "#3b0764", "#1e3a8a", 
  "#fbbf24", "#1e293b", "#3f3f46", "#5b21b6", "#db2777", "#d1fae5", "#1e293b",
   "#fde68a","#4c1d95", "#2563eb", "#991b1b", "#0f172a", "#64748b", "#475569" 
];



export default function DashboardPage() {

  const orders =Array.from(getItems());

const trendData = orders.map((order: any) => {
  const total = order.Items.reduce(
    (sum: number, item: any) => sum + item.Total_Price,
    0
  );

  return {
    customer: order.Customer_Name,
    total,
  };
});



const itemTotals:any  = {};

orders.forEach((order: any) => {
  order.Items.forEach((item: any) => {
    const normalized = item.Item_Name.trim().toLowerCase(); // Normalize

    if (!itemTotals[normalized]) {
      itemTotals[normalized] = {
        name: item.Item_Name.trim(), // Store original (first appearance)
        quantity: 0,
        revenue: 0,
      };
    }

    itemTotals[normalized].quantity += item.Quantity;
    itemTotals[normalized].revenue += item.Total_Price;
  });
});
const statusRevenueMap:any = {};

orders.forEach((order: any) => {
  const status = order.Order_Status;
  const orderItems = Array.isArray(order.Items) ? order.Items : [];
  const orderTotal = orderItems.reduce((sum: any, item: any) => sum + item.Total_Price, 0);

  if (!statusRevenueMap[status]) {
    statusRevenueMap[status] = {
      status,
      count: 0,
      totalRevenue: 0,
    };
  }

  statusRevenueMap[status].count += 1;
  statusRevenueMap[status].totalRevenue += orderTotal;
});

const statusSummary = Object.values(statusRevenueMap);
const totalOrderRevenue = statusSummary.reduce((sum, s:any) => sum + s.totalRevenue, 0);
statusSummary.push({
  status: "Total",
  count: orders.length,
  totalRevenue: totalOrderRevenue
});

console.log(statusSummary)


const itemData = Object.values(itemTotals);
// console.log(itemData)
const sortedItemData = itemData.sort((a:any, b:any) => b.quantity - a.quantity);

const orderTypes = Array.from(new Set(orders.map((o: any) => o.Order_Type)));
const barData = orderTypes.map((type: string) => ({
  orderType: type,
  total: orders
    .filter((o: any) => o.Order_Type === type)
    .reduce((sum, o:any) => sum + o.Items.reduce((iSum:any, item:any) => iSum + item.Total_Price, 0), 0),
}));

const statusCounts: Record<string, number> = orders.reduce((acc: Record<string, number>, order: any) => {
  acc[order.Order_Status] = (acc[order.Order_Status] || 0) + 1;
  return acc;
}, {});

const pieData = Object.entries(statusCounts).map(([key, value]) => ({
  name: key,
  value,
}));

const allItemNamesSet = new Set<string>();
orders.forEach((order: any) =>
  order.Items.forEach((item: any) => allItemNamesSet.add(item.Item_Name))
);
const allItemNames = Array.from(allItemNamesSet);

const orderItemsData = orders.map((order: any) => {
  const itemTotals: Record<string, number> = {};
  allItemNames.forEach((itemName: string) => {
    const item = order.Items.find((i:any) => i.Item_Name === itemName);
    itemTotals[itemName] = item ? item.Total_Price : 0;
  });
  return { orderId: order.Order_ID.toString(), ...itemTotals };
});

  // CSV export adapted for new data structure
  const exportFile = (format:any) => {
    const filename = `order-summary.${format}`;
    if (!orders || !orders.length) return;
    const separator = ",";
    const header = ["Order ID", "Customer", "Status", "Total Price (₹)"];
    const csvRows = orders.map((order:any) => {
      const totalPrice = order.Items.reduce(
        (sum:any, item:any) => sum + item.Total_Price,
        0
      );
      return [
        order.Order_ID,
        order.Customer_Name,
        order.Order_Status,
        totalPrice.toFixed(2),
      ];
    });
    const csvContent = [header, ...csvRows]
      .map((e) => e.join(separator))
      .join("\n");
    const blob = new Blob([csvContent], { type: `text/${format};charset=utf-8;` });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

return (
  <main className="p-6 sm:p-10 bg-gradient-to-b from-gray-100 to-white min-h-screen">
    <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
      🍽️ Food Orders Dashboard
    </h1>

<section className="max-w-7xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {statusSummary.map((status: any) => {
    let bgColor = "";
    let textColor = "text-white";

    switch (status.status.toLowerCase()) {
      case "delivered":
        bgColor = "bg-green-500";
        break;
      case "pending":
        bgColor = "bg-yellow-400";
        textColor = "text-black";
        break;
      case "in transit":
        bgColor = "bg-sky-500";
        break;
      case "total":
        bgColor = "bg-indigo-600";
        break;
      default:
        bgColor = "bg-gray-500";
    }

    return (
      <div
        key={status.status}
        className={`p-5 rounded-xl shadow border border-gray-200 ${bgColor} ${textColor}`}
      >
        <h4 className="text-sm font-medium mb-1">
          {status.status === "Total" ? "📊 Total Orders" : `📦 ${status.status}`}
        </h4>
        <p className="text-xl font-bold">{status.count} Orders</p>
        <p className="text-sm mt-1">
          ₹{status.totalRevenue.toFixed(2)} Revenue
        </p>
      </div>
    );
  })}
</section>



 
    <section className="max-w-7xl mx-auto mb-10">
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">🍔 Total Quantity Sold per Item</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedItemData}
            margin={{ top: 5, right: 30, left: 0, bottom: 60 }}
          >
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={70}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="quantity"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>

  
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
      {/* 💰 Revenue by Order Type */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">💰 Revenue by Order Type</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barData}
            margin={{ top: 5, right: 30, left: 0, bottom: 50 }}
          >
            <XAxis dataKey="orderType" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-center">
          📊 Order Status Breakdown
        </h3>
        <div className="flex justify-center">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>


    <section className="max-w-7xl mx-auto mb-12">
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">📦 Order-wise Item Revenue</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={orderItemsData}
            margin={{ top: 5, right: 30, left: 0, bottom: 60 }}
          >
            <XAxis
              dataKey="orderId"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={70}
            />
            <YAxis />
           <Tooltip content={<CustomTooltip />} />
            <Legend />
            {allItemNames.map((itemName, index) => (
              <Bar
                key={itemName}
                dataKey={itemName}
                stackId="a"
                fill={COLORS[index % COLORS.length]}
                radius={index === 0 ? [4, 4, 0, 0] : undefined}
                maxBarSize={40}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>

    <section className="max-w-6xl mx-auto mb-12">
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">📈 Customer Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="customer" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>

    <section className="max-w-6xl mx-auto mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
        <div className="flex justify-between gap-4 mb-4">
        <button
          onClick={()=>exportFile("csv")}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ⬇️ Export CSV
        </button>
 
        <button
          onClick={()=>exportFile("xlsx")}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ⬇️ Export Excel
        </button>
        </div>
        
      </div>

      <div className="overflow-hidden bg-white rounded-xl shadow border border-gray-200">
    
        <table className="min-w-full text-sm text-left table-fixed">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-5 py-3 w-1/6">Order ID</th>
              <th className="px-5 py-3 w-2/6">Customer</th>
              <th className="px-5 py-3 w-1/6">Status</th>
              <th className="px-5 py-3 w-2/6 text-right">Total Price (₹)</th>
            </tr>
          </thead>
        </table>
        <div className="max-h-80 overflow-y-auto">
          <table className="min-w-full text-sm text-left table-fixed">
            <tbody className="bg-white">
              {orders.map((order:any) => {
                const totalPrice = order.Items.reduce(
                  (sum:any, item:any) => sum + item.Total_Price,
                  0
                );
                return (
                  <tr
                    key={order.Order_ID}
                    className="border-t hover:bg-indigo-50 transition"
                  >
                    <td className="px-5 py-3 w-1/6">{order.Order_ID}</td>
                    <td className="px-5 py-3 w-2/6">{order.Customer_Name}</td>
                    <td className="px-5 py-3 w-1/6"><span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.Order_Status.toLowerCase() === 'delivered'
                          ? 'bg-green-500 text-green-800'
                          : order.Order_Status.toLowerCase() === 'pending'
                          ? 'bg-yellow-500 text-yellow-800'
                          : order.Order_Status.toLowerCase() === 'in transit'
                          ? 'bg-blue-500 text-blue-800'
                          : 'bg-gray-500 text-gray-800'
                      }`}
                    >
                      {order.Order_Status}
                    </span></td>
                    <td className="px-5 py-3 w-2/6 text-right font-medium text-gray-700">
                      ₹{totalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </main>
);



}

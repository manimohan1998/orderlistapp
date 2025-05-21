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
import { parseISO, format } from "date-fns";
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
  "#6366f1", "#f97316", "#22c55e", "#14b8a6", "#eab308", "#f43f5e", "#0ea5e9",
  "#a855f7", "#84cc16", "#e11d48", "#06b6d4", "#facc15", "#f472b6", "#7c3aed",
  "#15803d", "#fb923c", "#0891b2", "#e879f9", "#f87171", "#3f6212", "#5eead4",
  "#fde047", "#d946ef", "#1e40af", "#d97706", "#047857", "#7e22ce", "#991b1b",
  "#6d28d9", "#1d4ed8", "#fcd34d", "#dc2626", "#34d399", "#fde68a", "#f9a8d4",
  "#65a30d", "#3b0764", "#60a5fa", "#fbbf24", "#e0f2fe", "#3f3f46", "#5b21b6",
  "#db2777", "#d1fae5", "#1e293b", "#fde68a", "#c084fc", "#7dd3fc", "#991b1b",
  "#5f9ea0", "#cbd5e1", "#9ca3af"
];


export default function Home() {
  // Your new dataset
  const orders =[
  {
    "Order_ID": 1001,
    "Customer_Name": "John Smith",
    "Customer_Phone": "555-1234",
    "Customer_Address": "123 Main St",
    "Items": [
      {
        "Item_Name": "Pepperoni Pizza",
        "Item_Price": 10.99,
        "Item_Type": "Food",
        "Quantity": 1,
        "Rating": "4",
        "Total_Price": 10.99
      },
      {
        "Item_Name": "Garlic Bread",
        "Item_Price": 5.99,
        "Quantity": 2,
        "Total_Price": 11.98
      },
      {
        "Item_Name": "Soft Drink",
        "Item_Price": 2.49,
        "Item_Type": "Beverage",
        "Quantity": 1,
        "Total_Price": 2.49
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Delivered",
    "Delivery_Person": "Sarah Johnson",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1002,
    "Customer_Name": "Alice Johnson",
    "Customer_Phone": "555-5678",
    "Customer_Address": "456 Elm St",
    "Items": [
      {
        "Item_Name": "Cheeseburger",
        "Item_Price": 8.99,
        "Quantity": 2,
        "Total_Price": 17.98
      },
      {
        "Item_Name": "French Fries",
        "Item_Price": 3.99,
        "Quantity": 1,
        "Total_Price": 3.99
      },
      {
        "Item_Name": "Milkshake",
        "Item_Price": 4.99,
        "Quantity": 1,
        "Total_Price": 4.99
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "In Transit",
    "Delivery_Person": "David Lee",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1003,
    "Customer_Name": "Emily Brown",
    "Customer_Phone": "555-9101",
    "Customer_Address": "789 Pine St",
    "Items": [
      {
        "Item_Name": "California Roll",
        "Item_Price": 12.99,
        "Quantity": 3,
        "Total_Price": 38.97
      },
      {
        "Item_Name": "Edamame",
        "Item_Price": 4.99,
        "Quantity": 1,
        "Total_Price": 4.99
      },
      {
        "Item_Name": "Green Tea",
        "Item_Price": 1.99,
        "Quantity": 2,
        "Total_Price": 3.98
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Pending",
    "Delivery_Person": "",
    "Delivery_Status": ""
  },
  {
    "Order_ID": 1004,
    "Customer_Name": "Michael Davis",
    "Customer_Phone": "555-2468",
    "Customer_Address": "246 Oak St",
    "Items": [
      {
        "Item_Name": "Margherita Pizza",
        "Item_Price": 11.99,
        "Quantity": 1,
        "Total_Price": 11.99
      },
      {
        "Item_Name": "Caesar Salad",
        "Item_Price": 7.99,
        "Quantity": 1,
        "Total_Price": 7.99
      },
      {
        "Item_Name": "Iced Tea",
        "Item_Price": 2.49,
        "Quantity": 2,
        "Total_Price": 4.98
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Delivered",
    "Delivery_Person": "Emily Parker",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1005,
    "Customer_Name": "Sophia Wilson",
    "Customer_Phone": "555-1357",
    "Customer_Address": "357 Maple St",
    "Items": [
      {
        "Item_Name": "Chicken Tikka Masala",
        "Item_Price": 13.99,
        "Quantity": 2,
        "Total_Price": 27.98
      },
      {
        "Item_Name": "Naan Bread",
        "Item_Price": 3.49,
        "Quantity": 3,
        "Total_Price": 10.47
      },
      {
        "Item_Name": "Rice Pilaf",
        "Item_Price": 4.99,
        "Quantity": 2,
        "Total_Price": 9.98
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "In Transit",
    "Delivery_Person": "James Smith",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1006,
    "Customer_Name": "Emma Thompson",
    "Customer_Phone": "555-3698",
    "Customer_Address": "369 Pine St",
    "Items": [
      {
        "Item_Name": "Spaghetti Carbonara",
        "Item_Price": 12.99,
        "Quantity": 1,
        "Total_Price": 12.99
      },
      {
        "Item_Name": "Garlic Bread",
        "Item_Price": 5.99,
        "Quantity": 2,
        "Total_Price": 11.98
      },
      {
        "Item_Name": "Tiramisu",
        "Item_Price": 6.99,
        "Quantity": 1,
        "Total_Price": 6.99
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Delivered",
    "Delivery_Person": "Sarah Johnson",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1007,
    "Customer_Name": "Oliver Brown",
    "Customer_Phone": "555-2468",
    "Customer_Address": "468 Oak St",
    "Items": [
      {
        "Item_Name": "Double Cheeseburger",
        "Item_Price": 9.99,
        "Quantity": 2,
        "Total_Price": 19.98
      },
      {
        "Item_Name": "Onion Rings",
        "Item_Price": 4.49,
        "Quantity": 1,
        "Total_Price": 4.49
      },
      {
        "Item_Name": "Soda",
        "Item_Price": 1.99,
        "Quantity": 3,
        "Total_Price": 5.97
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Delivered",
    "Delivery_Person": "David Lee",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1008,
    "Customer_Name": "Isabella Garcia",
    "Customer_Phone": "555-7890",
    "Customer_Address": "789 Elm St",
    "Items": [
      {
        "Item_Name": "Fish and Chips",
        "Item_Price": 14.99,
        "Quantity": 1,
        "Total_Price": 14.99
      },
      {
        "Item_Name": "Cole Slaw",
        "Item_Price": 2.99,
        "Quantity": 1,
        "Total_Price": 2.99
      },
      {
        "Item_Name": "Lemonade",
        "Item_Price": 2.49,
        "Quantity": 2,
        "Total_Price": 4.98
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "In Transit",
    "Delivery_Person": "Emily Parker",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1009,
    "Customer_Name": "Liam Wilson",
    "Customer_Phone": "555-3698",
    "Customer_Address": "698 Pine St",
    "Items": [
      {
        "Item_Name": "Pad Thai Noodles",
        "Item_Price": 11.99,
        "Quantity": 2,
        "Total_Price": 23.98
      },
      {
        "Item_Name": "Spring Rolls",
        "Item_Price": 5.49,
        "Quantity": 3,
        "Total_Price": 16.47
      },
      {
        "Item_Name": "Thai Iced Tea",
        "Item_Price": 3.99,
        "Quantity": 2,
        "Total_Price": 7.98
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Pending",
    "Delivery_Person": "",
    "Delivery_Status": ""
  },
  {
    "Order_ID": 1010,
    "Customer_Name": "Charlotte Lee",
    "Customer_Phone": "555-1357",
    "Customer_Address": "357 Cedar St",
    "Items": [
      {
        "Item_Name": "Margherita Pizza",
        "Item_Price": 11.99,
        "Quantity": 1,
        "Total_Price": 11.99
      },
      {
        "Item_Name": "Caprese Salad",
        "Item_Price": 6.99,
        "Quantity": 1,
        "Total_Price": 6.99
      },
      {
        "Item_Name": "Italian Soda",
        "Item_Price": 3.49,
        "Quantity": 2,
        "Total_Price": 6.98
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Delivered",
    "Delivery_Person": "James Smith",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1011,
    "Customer_Name": "Daniel Miller",
    "Customer_Phone": "555-2468",
    "Customer_Address": "468 Maple St",
    "Items": [
      {
        "Item_Name": "Sushi Combo",
        "Item_Price": 18.99,
        "Quantity": 1,
        "Total_Price": 18.99
      },
      {
        "Item_Name": "Miso Soup",
        "Item_Price": 3.49,
        "Quantity": 2,
        "Total_Price": 6.98
      },
      {
        "Item_Name": "Green Tea Ice Cream",
        "Item_Price": 4.99,
        "Quantity": 1,
        "Total_Price": 4.99
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Delivered",
    "Delivery_Person": "Sarah Johnson",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1012,
    "Customer_Name": "Mia Rodriguez",
    "Customer_Phone": "555-7890",
    "Customer_Address": "890 Oak St",
    "Items": [
      {
        "Item_Name": "BBQ Chicken Wings",
        "Item_Price": 9.99,
        "Quantity": 3,
        "Total_Price": 29.97
      },
      {
        "Item_Name": "Loaded Nachos",
        "Item_Price": 8.49,
        "Quantity": 1,
        "Total_Price": 8.49
      },
      {
        "Item_Name": "Beer",
        "Item_Price": 5.99,
        "Quantity": 2,
        "Total_Price": 11.98
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "In Transit",
    "Delivery_Person": "David Lee",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1013,
    "Customer_Name": "Alexander Brown",
    "Customer_Phone": "555-2468",
    "Customer_Address": "468 Elm St",
    "Items": [
      {
        "Item_Name": "Philly Cheesesteak",
        "Item_Price": 10.99,
        "Quantity": 2,
        "Total_Price": 21.98
      },
      {
        "Item_Name": "Fries",
        "Item_Price": 3.49,
        "Quantity": 1,
        "Total_Price": 3.49
      },
      {
        "Item_Name": "Iced Coffee",
        "Item_Price": 2.99,
        "Quantity": 3,
        "Total_Price": 8.97
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Delivered",
    "Delivery_Person": "Emily Parker",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1014,
    "Customer_Name": "Amelia Wilson",
    "Customer_Phone": "555-1357",
    "Customer_Address": "357 Pine St",
    "Items": [
      {
        "Item_Name": "Pad Krapow Moo",
        "Item_Price": 12.99,
        "Quantity": 2,
        "Total_Price": 25.98
      },
      {
        "Item_Name": "Tom Yum Soup",
        "Item_Price": 4.49,
        "Quantity": 1,
        "Total_Price": 4.49
      },
      {
        "Item_Name": "Thai Iced Coffee",
        "Item_Price": 3.99,
        "Quantity": 2,
        "Total_Price": 7.98
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Delivered",
    "Delivery_Person": "James Smith",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1015,
    "Customer_Name": "Benjamin Garcia",
    "Customer_Phone": "555-7890",
    "Customer_Address": "890 Cedar St",
    "Items": [
      {
        "Item_Name": "Steak",
        "Item_Price": 19.99,
        "Quantity": 1,
        "Total_Price": 19.99
      },
      {
        "Item_Name": "Baked Potato",
        "Item_Price": 4.99,
        "Quantity": 1,
        "Total_Price": 4.99
      },
      {
        "Item_Name": "Red Wine",
        "Item_Price": 12.99,
        "Quantity": 1,
        "Total_Price": 12.99
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "In Transit",
    "Delivery_Person": "David Lee",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1016,
    "Customer_Name": "Ethan Smith",
    "Customer_Phone": "555-3698",
    "Customer_Address": "698 Oak St",
    "Items": [
      {
        "Item_Name": "Beef Burrito",
        "Item_Price": 8.99,
        "Quantity": 2,
        "Total_Price": 17.98
      },
      {
        "Item_Name": "Guacamole",
        "Item_Price": 3.49,
        "Quantity": 1,
        "Total_Price": 3.49
      },
      {
        "Item_Name": "Soda",
        "Item_Price": 1.99,
        "Quantity": 3,
        "Total_Price": 5.97
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Pending",
    "Delivery_Person": "",
    "Delivery_Status": ""
  },
  {
    "Order_ID": 1017,
    "Customer_Name": "Evelyn Taylor",
    "Customer_Phone": "555-1357",
    "Customer_Address": "357 Oak St",
    "Items": [
      {
        "Item_Name": "Chicken Alfredo",
        "Item_Price": 14.99,
        "Quantity": 1,
        "Total_Price": 14.99
      },
      {
        "Item_Name": "Caesar Salad",
        "Item_Price": 7.99,
        "Quantity": 1,
        "Total_Price": 7.99
      },
      {
        "Item_Name": "Breadsticks",
        "Item_Price": 3.49,
        "Quantity": 2,
        "Total_Price": 6.98
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Delivered",
    "Delivery_Person": "Sarah Johnson",
    "Delivery_Status": "Delivered"
  },
  {
    "Order_ID": 1018,
    "Customer_Name": "Mason Martinez",
    "Customer_Phone": "555-7890",
    "Customer_Address": "890 Pine St",
    "Items": [
      {
        "Item_Name": "Hamburger",
        "Item_Price": 7.99,
        "Quantity": 2,
        "Total_Price": 15.98
      },
      {
        "Item_Name": "French Fries",
        "Item_Price": 3.99,
        "Quantity": 1,
        "Total_Price": 3.99
      },
      {
        "Item_Name": "Milkshake",
        "Item_Price": 4.99,
        "Quantity": 1,
        "Total_Price": 4.99
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "In Transit",
    "Delivery_Person": "Emily Parker",
    "Delivery_Status": "In Transit"
  },
  {
    "Order_ID": 1019,
    "Customer_Name": "Avery Brown",
    "Customer_Phone": "555-3698",
    "Customer_Address": "698 Cedar St",
    "Items": [
      {
        "Item_Name": "Taco Salad",
        "Item_Price": 10.99,
        "Quantity": 1,
        "Total_Price": 10.99
      },
      {
        "Item_Name": "Quesadilla",
        "Item_Price": 6.99,
        "Quantity": 1,
        "Total_Price": 6.99
      },
      {
        "Item_Name": "Churros",
        "Item_Price": 3.49,
        "Quantity": 2,
        "Total_Price": 6.98
      }
    ],
    "Order_Type": "Online",
    "Order_Status": "Pending",
    "Delivery_Person": "",
    "Delivery_Status": ""
  },
  {
    "Order_ID": 1020,
    "Customer_Name": "Scarlett White",
    "Customer_Phone": "555-1357",
    "Customer_Address": "357 Elm St",
    "Items": [
      {
        "Item_Name": "Chicken Teriyaki",
        "Item_Price": 13.99,
        "Quantity": 2,
        "Total_Price": 27.98
      },
      {
        "Item_Name": "Vegetable Tempura",
        "Item_Price": 8.49,
        "Quantity": 1,
        "Total_Price": 8.49
      },
      {
        "Item_Name": "Miso Soup",
        "Item_Price": 3.49,
        "Quantity": 3,
        "Total_Price": 10.47
      }
    ],
    "Order_Type": "Dine In",
    "Order_Status": "Delivered",
    "Delivery_Person": "James Smith",
    "Delivery_Status": "Delivered"
  }
];

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
    .reduce((sum, o) => sum + o.Items.reduce((iSum, item) => iSum + item.Total_Price, 0), 0),
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
  const exportCSV = () => {
    const filename = "order-summary.csv";
    if (!orders || !orders.length) return;
    const separator = ",";
    const header = ["Order ID", "Customer", "Status", "Total Price (₹)"];
    const csvRows = orders.map((order) => {
      const totalPrice = order.Items.reduce(
        (sum, item) => sum + item.Total_Price,
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
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
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
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ⬇️ Export CSV
        </button>
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
              {orders.map((order) => {
                const totalPrice = order.Items.reduce(
                  (sum, item) => sum + item.Total_Price,
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

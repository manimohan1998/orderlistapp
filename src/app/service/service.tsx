export const getItems = (): any => {
  return [
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

  ]
};
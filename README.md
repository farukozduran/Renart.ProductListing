# 🛍️ Renart Product Listing App – Full-Stack Case Study

This is a full-stack product listing application developed as a case study for the **Renart Full-Stack Development Internship**.  
It demonstrates practical backend and frontend skills including API development, real-time data handling, and responsive UI features.

---

## 🚀 Project Overview

The application consists of two main parts:

### 🧩 Backend API (Completed)
- Built with **ASP.NET Core Web API**
- Reads product data from a JSON file
- Dynamically calculates product prices based on the latest gold price from [GoldAPI.io](https://www.goldapi.io/)
- Handles fallback mechanisms for reliability

### 🎨 Frontend App (In Progress)
- Built with **React (Vite)**
- Displays product cards with:
  - Product name, price, and popularity score (1 decimal, 0–5 scale)
  - Color picker that switches product images
  - Responsive carousel with arrow and swipe support
  - Custom fonts and clean UI layout

---

## 🛠️ Technologies Used

### Backend
- **C# / ASP.NET Core Web API**
- **HttpClient** for consuming external APIs
- JSON file-based data handling
- Configuration via `appsettings.json`

### Frontend
- **React (Vite)**
- Classical CSS (without Tailwind)
- **keen-slider** for carousel functionality
- Responsive design principles

---

## ⚙️ Dynamic Price Calculation Formula



- `popularityScore`: Product-specific percentage score (0–100)
- `weight`: Product weight in grams
- `goldPrice`: Real-time gold price (USD/gram) from goldapi.io

### 🔁 Fallback Behavior
If real-time data fails:
1. Uses previous day's price (if available)
2. Defaults to a fallback price of **70 USD/g**

---

## 📦 API Endpoint

| Endpoint         | Method | Description                          |
|------------------|--------|--------------------------------------|
| `/api/products`  | GET    | Returns full product list with calculated prices |

---

## 🔐 GoldAPI Integration

To run this project, you need a valid [GoldAPI.io](https://www.goldapi.io/) API key.

### Add your key to the config:
```json
// appsettings.json
"GoldApi": {
  "ApiKey": "your-api-key",
  "BaseUrl": "https://www.goldapi.io/api",
  "Symbol": "XAU",
  "Currency": "USD"
}

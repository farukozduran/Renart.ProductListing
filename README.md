# 🛍️ Product Listing App – Case Study

This project is a **Full-Stack Product Listing Application** developed as a case study for the Renart Full-Stack Development Internship.

It demonstrates core backend and frontend functionalities, including dynamic pricing based on real-time gold prices, image selection by color, responsive UI, and more.

---

## 🚀 Project Overview

The application consists of two parts:

1. **Backend API**:  
   - Built with **ASP.NET Core Web API**  
   - Reads product data from a JSON source  
   - Calculates price dynamically based on:
     ```
     Price = (popularityScore + 1) * weight * goldPrice
     ```
   - Retrieves real-time gold price from [goldapi.io](https://www.goldapi.io)

2. **Frontend App** (Coming next):  
   - Will display product list with:
     - Product name, price, and popularity score
     - Color picker to change product image
     - Responsive carousel with swipe and arrow support

---

## ⚙️ Technologies Used

### Backend:
- C# / ASP.NET Core Web API
- HttpClient (for external API calls)
- JSON data handling
- Configuration via `appsettings.json`

---

## 📦 API Endpoint

| Endpoint       | Method | Description              |
|----------------|--------|--------------------------|
| `/api/products` | GET    | Returns product list with calculated prices |

---

## 📈 Dynamic Price Calculation

Prices are calculated using real-time gold price data retrieved from [GoldAPI.io](https://www.goldapi.io).  
If the latest price is unavailable (due to timezone or delay), the app falls back to the previous day's price.  
If both fail, a fallback value (70 USD/g) is used to ensure reliability.

---

## 🔐 API Key

To run this project, you need a valid API key from [GoldAPI.io](https://www.goldapi.io/).

Add your API key to the `appsettings.json` file:

```json
"GoldApi": {
  "ApiKey": "your-api-key",
  "BaseUrl": "https://www.goldapi.io/api",
  "Symbol": "XAU",
  "Currency": "USD"
}
```

📤 Deployment
The app will be deployed via Vercel for frontend and Render or Railway for backend.

📝 License
This project is for educational and demonstration purposes only.
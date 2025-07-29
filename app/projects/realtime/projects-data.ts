
export const realtimeProjects = [
  {
    id: "livestockpro",
    title: "LiveStockPro",
    description:
      "A real-time livestock trading platform with live market data feeds, WebSocket integration for instant price updates, and comprehensive trading analytics for livestock markets.",
    image: "https://drive.google.com/uc?export=view&id=1dVcW_bUQuem4ObW2RQEnkxAjLWAQmnpH",
    videoUrl: "https://drive.google.com/file/d/1Hz-YeCdI2q6vwOamgnPHcteEjpoOOhDS/view?usp=sharing",
    technologies: ["PHP", "WebSocket", "MySQL", "JavaScript", "Upstock API", "Real-time Data"],
    features: [
      "Real-time livestock price feeds from Upstock",
      "PHP-based data extraction and processing",
      "WebSocket-based live updates",
      "Market analytics dashboard",
      "Trading notifications",
      "Live stock market data integration",
      "Real-time bidding system",
      "Automated price monitoring"
    ],
    status: "Production",
    detailedDescription: `LiveStockPro is a comprehensive real-time livestock trading platform built with PHP that extracts and displays live price updates from Upstock. The system leverages WebSocket technology to provide instant market updates and live trading capabilities, processing live market data feeds and delivering real-time price updates to traders and livestock market participants.

The PHP-based backend efficiently communicates with the Upstock API to extract real-time market data, while the frontend uses WebSocket connections to push instant updates to connected clients. The system features a sophisticated architecture that handles thousands of concurrent connections, ensuring that market participants receive instant notifications about price changes, new listings, and trading opportunities.

The platform includes advanced analytics tools that process real-time data streams from Upstock to provide insights into market trends and trading patterns. Built with a robust PHP backend and modern web technologies, LiveStockPro offers a responsive interface that works seamlessly across desktop and mobile devices, enabling traders to stay connected to the market wherever they are.`
  }
]

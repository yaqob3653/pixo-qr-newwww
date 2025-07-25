import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/blog/Index";
import BestQrGuide from "./pages/blog/BestQrGuide";
import QrMarketingSales from "./pages/blog/QrMarketingSales";
import SmartBusinessCard from "./pages/blog/SmartBusinessCard";
import BestQrTools2024 from "./pages/blog/BestQrTools2024";
import ChooseBestGenerator2025 from "./pages/blog/ChooseBestGenerator2025";
import FAQ from "./pages/FAQ";

// ✅ 1. استيراد المقال الجديد
// ⚠️ ملاحظة: تأكد من أن اسم الملف هو 'DynamicVsStaticPost.tsx'
import DynamicVsStaticPost from "./pages/blog/DynamicVsStaticPost"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/best-qr-generator-guide" element={<BestQrGuide />} />
            <Route path="/blog/qr-marketing-sales" element={<QrMarketingSales />} />
            <Route path="/blog/smart-business-card" element={<SmartBusinessCard />} />
            <Route path="/blog/best-qr-tools-2024" element={<BestQrTools2024 />} />
            <Route path="/blog/choose-best-qr-generator-2025" element={<ChooseBestGenerator2025 />} />
            
            {/* ✅ 2. إضافة المسار (Route) الجديد للمقال */}
            <Route path="/blog/dynamic-vs-static-qr-codes" element={<DynamicVsStaticPost />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

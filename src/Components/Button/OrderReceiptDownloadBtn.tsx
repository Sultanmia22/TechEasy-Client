'use client'
import React from 'react'
import jsPDF from 'jspdf' 
import { domToPng } from 'modern-screenshot';

interface DownloadReceiptProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  orderId: string;
}

const OrderReceiptDownloadBtn: React.FC<DownloadReceiptProps> = ({ targetRef, orderId }) => {

 const handleDownload = async () => {
  const element = targetRef.current;
  if (!element) return;

  
  const originalStyle = element.style.width;
  element.style.width = "650px"; 

  try {
    const dataUrl = await domToPng(element, {
      scale: 3, 
      backgroundColor: '#ffffff',
    });

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [element.offsetWidth, element.offsetHeight],
    });

    pdf.addImage(dataUrl, 'PNG', 0, 0, element.offsetWidth, element.offsetHeight);
    pdf.save(`receipt-${orderId}.pdf`);
  } catch (error) {
    console.error("PDF download failed:", error);
  } finally {
   
    element.style.width = originalStyle;
  }
};

  return (
    <button 
      onClick={handleDownload}
      className="btn btn-primary btn-block text-white font-bold transition-transform active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download Receipt (PDF)
    </button>
  );
}

export default OrderReceiptDownloadBtn;
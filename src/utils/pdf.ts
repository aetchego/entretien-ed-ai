import jsPDF from "jspdf";

export const generatePdf = (text: string) => {
  const doc = new jsPDF();
  doc.text(text, 10, 10);
  const pdfBlob = doc.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);
  return pdfUrl;
  //    window.open(pdfUrl, "_blank");
};

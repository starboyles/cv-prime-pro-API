import PDFDocument from "pdfkit";

export const createPDF = async (cvData: any): Promise<Buffer> => {
  const doc = new PDFDocument();
  const buffers: Buffer[] = [];

  doc.on("data", buffers.push.bind(buffers));

  return new Promise((resolve, reject) => {
    doc.on("end", () => {
      // Once the PDF is complete, combine all buffer chunks into a single buffer
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });

    doc.on("error", (err) => {
      reject(err);
    });
    generatePDFContent(doc, cvData);
    doc.end();
  });
};

// Helper function to fill in the PDF content
const generatePDFContent = (doc: typeof PDFDocument, cvData: any) => {
  // Set up some styling for the PDF
  doc.fontSize(20).text("Curriculum Vitae", { align: "center" });
  doc.moveDown(2); // Move down to create some space

  // basic user information
  doc.fontSize(14).text(`Name: ${cvData.name}`);
  doc.text(`Email: ${cvData.email}`);
  doc.text(`Role: ${cvData.role}`);
  doc.text(`Company: ${cvData.company}`);
  doc.text(`Year: ${cvData.year}`);
  doc.text(`Currently Working: ${cvData.isCurrentlyWorking ? "Yes" : "No"}`);

  // Add experience
  doc.moveDown(1);
  doc.text("Experience:", { underline: true });
  doc.fontSize(12).list(cvData.experience);

  // profile image
  if (cvData.profileImage) {
    doc.moveDown(2);
    doc.image(cvData.profileImage, {
      fit: [150, 150],
      align: "center",
      valign: "center",
    });
  }
  doc.moveDown(3);
  doc.fontSize(10).text(`Generated on: ${new Date().toLocaleDateString()}`, {
    align: "center",
  });
};

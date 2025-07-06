'use client';

export const downloadResume = () => {
  // Create a new window for the resume
  const resumeWindow = window.open('', '_blank', 'width=800,height=600');
  
  if (!resumeWindow) {
    alert('Please allow popups to download the resume');
    return;
  }

  // Get the resume content
  const resumeContent = document.getElementById('resume-content');
  
  if (!resumeContent) {
    console.error('Resume content not found');
    return;
  }

  // Create the HTML document for printing
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bibek Acharya - Resume</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @media print {
          body { 
            margin: 0; 
            padding: 20px;
            font-size: 12px;
            line-height: 1.4;
          }
          .resume-document {
            max-width: none;
            margin: 0;
            padding: 0;
            box-shadow: none;
          }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          h1 { font-size: 24px; }
          h2 { font-size: 18px; }
          h3 { font-size: 16px; }
          h4 { font-size: 14px; }
        }
        
        @page {
          margin: 0.5in;
          size: A4;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1f2937;
        }
        
        .resume-document {
          background: white;
          max-width: 210mm;
          margin: 0 auto;
          padding: 20mm;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .print-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        
        .print-button:hover {
          background: #2563eb;
        }
      </style>
    </head>
    <body>
      <button class="print-button no-print" onclick="window.print()">
        📄 Download PDF
      </button>
      ${resumeContent.outerHTML}
      <script>
        // Auto-focus for better UX
        window.focus();
        
        // Optional: Auto-print after a short delay
        // setTimeout(() => window.print(), 1000);
      </script>
    </body>
    </html>
  `;

  // Write the content to the new window
  resumeWindow.document.write(htmlContent);
  resumeWindow.document.close();
};

export const openResumePreview = () => {
  // Create a new window for preview
  const previewWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes');
  
  if (!previewWindow) {
    alert('Please allow popups to preview the resume');
    return;
  }

  // Get the resume content
  const resumeContent = document.getElementById('resume-content');
  
  if (!resumeContent) {
    console.error('Resume content not found');
    return;
  }

  // Create the HTML document for preview
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume Preview - Bibek Acharya</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f3f4f6;
          margin: 0;
          padding: 20px;
        }
        
        .preview-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .preview-header {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .resume-document {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }
        
        .btn-primary {
          background: #3b82f6;
          color: white;
        }
        
        .btn-primary:hover {
          background: #2563eb;
        }
        
        .btn-secondary {
          background: #6b7280;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #4b5563;
        }
        
        @media print {
          .preview-header, .action-buttons { display: none !important; }
          body { background: white; padding: 0; }
          .preview-container { max-width: none; }
          .resume-document { box-shadow: none; border-radius: 0; }
        }
      </style>
    </head>
    <body>
      <div class="preview-container">
        <div class="preview-header">
          <h1 class="text-2xl font-bold text-gray-900 mb-2">Resume Preview</h1>
          <p class="text-gray-600">Review your resume before downloading</p>
        </div>
        
        <div class="action-buttons">
          <button class="btn btn-primary" onclick="window.print()">
            📄 Download as PDF
          </button>
          <button class="btn btn-secondary" onclick="window.close()">
            ✕ Close Preview
          </button>
        </div>
        
        ${resumeContent.outerHTML}
      </div>
    </body>
    </html>
  `;

  previewWindow.document.write(htmlContent);
  previewWindow.document.close();
  previewWindow.focus();
};
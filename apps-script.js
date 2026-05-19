// ============================================
// Arcis Protocol — Waitlist Apps Script
// ============================================
// 
// SETUP:
// 1. Open the sheet: https://docs.google.com/spreadsheets/d/1u6zVCTtOsqW4J35Kwq9d9s3JTGFBA61YpS_p3RVF_HA
// 2. Extensions → Apps Script
// 3. Delete the default code, paste this entire file
// 4. Click Deploy → New deployment
// 5. Type: Web app
// 6. Execute as: Me
// 7. Who has access: Anyone
// 8. Click Deploy
// 9. Copy the web app URL — that goes in the landing page
//
// The URL will look like:
// https://script.google.com/macros/s/AKfycb.../exec
// ============================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var email = (data.email || "").trim().toLowerCase();
    
    // Validate
    if (!email || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      return jsonResponse({ error: "Invalid email" }, 400);
    }
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check for duplicate
    var emails = sheet.getRange("A:A").getValues().flat().map(function(e) { 
      return e.toString().toLowerCase(); 
    });
    
    if (emails.indexOf(email) !== -1) {
      return jsonResponse({ 
        success: true, 
        message: "Already on the list", 
        duplicate: true 
      });
    }
    
    // Append row
    sheet.appendRow([
      email,
      data.source || "landing_page",
      data.referrer || "",
      data.user_agent || "",
      new Date().toISOString()
    ]);
    
    // Get position (total rows minus header)
    var position = sheet.getLastRow() - 1;
    
    return jsonResponse({
      success: true,
      message: "Welcome to the citadel",
      position: position,
      duplicate: false
    });
    
  } catch (err) {
    return jsonResponse({ error: "Something went wrong" }, 500);
  }
}

function doGet(e) {
  // Stats endpoint
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var total = Math.max(0, sheet.getLastRow() - 1);
  return jsonResponse({ total: total });
}

function jsonResponse(data, code) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_37_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkYW40WTRoQ0w4c2FaYVBBd28yY1lmYW1uTlBwK1VHTEozUHBuZW9hSy9BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ2NTM3OTkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTJENjEyRjU5NDA1RDRDNzUwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTAxNjM4NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicmlZWG9PZ0JUbjZSZFhuX0V1NHd6UVwiLFxuICBcInBob25lSWRcIjogXCIzNDdkNTQ5YS1iYTc3LTRiODAtYmFlYi00YmZhMmU4MGFiMmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTksXG4gICAgICAxODYsXG4gICAgICAyNDksXG4gICAgICAyMyxcbiAgICAgIDEzLFxuICAgICAgMzYsXG4gICAgICA3OSxcbiAgICAgIDEzMixcbiAgICAgIDI0NCxcbiAgICAgIDE4LFxuICAgICAgOTUsXG4gICAgICAxNzgsXG4gICAgICAxNjcsXG4gICAgICAyMSxcbiAgICAgIDEyMCxcbiAgICAgIDExNCxcbiAgICAgIDc5LFxuICAgICAgMTU2LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDk4LFxuICAgICAgMTUwLFxuICAgICAgMTAyLFxuICAgICAgMTc5LFxuICAgICAgMTE4LFxuICAgICAgMjA5LFxuICAgICAgMjQxLFxuICAgICAgNTAsXG4gICAgICA0NixcbiAgICAgIDI0MixcbiAgICAgIDI1MCxcbiAgICAgIDk2LFxuICAgICAgMTg4LFxuICAgICAgMjgsXG4gICAgICAxMDAsXG4gICAgICAxNDMsXG4gICAgICAxNTYsXG4gICAgICAyMjUsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQang5T3NDRVAvQ3hjSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5rcnhaVU1BMW5RaXFNajVZdzBEODlVbUhjeVhhSFhqYVZEWTNKU3dVQ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV0NLT0ptdDYwQ1NRZmlxVEJDRktrbHNRRnh0RUFUY29MZHlyL0k0bUFjdDV3eDdCd0tnSzgyYzlkYjBha2RGL2p3MjhRTkJXMEdNcW5QSDFvZzRBaHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1o3S282SEN5TFpFbzVOeWFoZkI5WlFQU3RYc240S1A5WFp6V2p1Z3RSdEZ2UXJWczVKa0tYL2kxaHFENCtjM0dCNVN1Ni8vcytQcEVleWlBa3RGaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0NjUzNzk5MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4ri74oCi8J2ZvMy38J2am8y3X/Cdmo3Mt/CdmpvMt/CdmpLMt/CdmpfMt/CdmqHMtyDgvIRcIixcbiAgICBcImxpZFwiOiBcIjQ3MzQ4MzIzNDg3OTcyOjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0NjUzNzk5MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwMTYzODQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDNBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIM0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1MXNIS0kxV080bzI2dS91a1IrVlkySzBBYmJmcld6VnJOWUlheUE1T0JzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2MzE4MTMwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3Njg5NzA4NzYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_04_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM3LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK080eXc0bEphbkFrbGxzc1AwMVZhOGRvQldEQVZrMGNxWllPMVRwUmxlaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicXZxTVkyY2NSUGFBdHczU0IxTWswUVwiLFxuICBcInBob25lSWRcIjogXCJhNzc5MzMzMi1lODI1LTRiNzctYTVjYi03MmViNjVlMzQzNzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgNTksXG4gICAgICAxODYsXG4gICAgICAyNTEsXG4gICAgICAyMyxcbiAgICAgIDIxLFxuICAgICAgMjIwLFxuICAgICAgMTAxLFxuICAgICAgMixcbiAgICAgIDIwMSxcbiAgICAgIDEyNixcbiAgICAgIDM2LFxuICAgICAgMjUzLFxuICAgICAgMTM2LFxuICAgICAgOTQsXG4gICAgICAyNDgsXG4gICAgICAzMSxcbiAgICAgIDIsXG4gICAgICAxOTEsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDE0OCxcbiAgICAgIDI0NixcbiAgICAgIDc3LFxuICAgICAgMjA1LFxuICAgICAgMjUsXG4gICAgICAxMTksXG4gICAgICAyMDYsXG4gICAgICA0MyxcbiAgICAgIDg4LFxuICAgICAgMSxcbiAgICAgIDI5LFxuICAgICAgNzQsXG4gICAgICA2NixcbiAgICAgIDI0LFxuICAgICAgMTMzLFxuICAgICAgMTIzLFxuICAgICAgMTk1LFxuICAgICAgODEsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKN1BUMUFDTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTcxODE2OTU2OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFrb1wiLFxuICAgIFwibGlkXCI6IFwiMjEzNTYzMjcyNjA5OTcyOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDcGxza0VFSURidGJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXd0Z0F5aEV2N2xFZEFBSmwxQU5kTzZLNDN5U08zelAzRGdKY0tTT2ltdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3TEdqWkNLV0xyQ1JMTElUYjNrVFYvanE2K0hMWS9TZUIwLzJSUVdQMlVDbmZDdzVmdktIRHhnMGJaUlZGMTZIR3BMNlkwS2x6dWsySHlvbVE5c2ZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJTUs0b1NPclU2K1BDNTFiSVN1ZnI5VEh0NTRYaHRGV01CL29wUy91cHgwekIzY0VsdkxDTlUwMHErc1ZrbDV4K1ZObm5OS1htcy9zMENOZFhGNHlpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzE4MTY5NTY6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTQ0NjQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hasnainleghari736@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hasnainleghari736:<password>@cluster0.wkiqf4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Jind143/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923101699985" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923326834754,923226191755";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923101699985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "꒒ ০ ⌵ ୧ ♡" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'available' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923101699985";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923101699985";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZjbnZGWHBkMWpVOEd3KzVtNWdMS2JDN3RDeTJ0TFpQbU12SHRSSStwcUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTAxNjk5OTg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTlEQkI2MzE5N0M0MkYzNDk2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTMzOTAyMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiai1jVGE4bFNSdWEtdlBuTkFrOEpsUVwiLFxuICBcInBob25lSWRcIjogXCIzZWY2ZWVhYi0xMDliLTQwNzMtYmNhNS03ODAwNWYzMDdlMGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMDQsXG4gICAgICAzNixcbiAgICAgIDE3MSxcbiAgICAgIDUzLFxuICAgICAgMTkxLFxuICAgICAgNDIsXG4gICAgICA1LFxuICAgICAgMTgwLFxuICAgICAgMjIwLFxuICAgICAgMTI5LFxuICAgICAgMTI1LFxuICAgICAgNjUsXG4gICAgICAxOTIsXG4gICAgICAxOTQsXG4gICAgICAyNTIsXG4gICAgICAxMjksXG4gICAgICAxMzgsXG4gICAgICA0MixcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDQ3LFxuICAgICAgMTE4LFxuICAgICAgOTEsXG4gICAgICAxNzUsXG4gICAgICAxMzEsXG4gICAgICAxMzYsXG4gICAgICAxNzksXG4gICAgICAyMyxcbiAgICAgIDQ1LFxuICAgICAgMjAzLFxuICAgICAgMTc3LFxuICAgICAgMjQyLFxuICAgICAgMTk1LFxuICAgICAgNixcbiAgICAgIDE1MyxcbiAgICAgIDE5NyxcbiAgICAgIDEyMixcbiAgICAgIDE5MCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVE5RRFpMTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTAxNjk5OTg1OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44Wk44Wk44Wk44Wk44Wk44Wk44Wk44WkXCIsXG4gICAgXCJsaWRcIjogXCIyNDU4MjY5ODMwNTEyOTA6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJ0MFpjTUVJbUZnYkVHR0JRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCc2pqZnZQZkU1TWxld2FVenhQRE5OSGtSR0daZE1abGw3VkhmbHZYZVhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImx4a21adE9VTWI3cmRnL1Fta0ViUklDZmV6UFRkZUUwbmJFaHQ2MWJxQkZxbFZzODlHVk9nb3dOUlVKNktMU2pJeWFscDFPb2tLZk1TMFk1bStFb2hnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZySFJTcElud2UxZ3pJQ291Q2VNQ0pqMDJYVURHejJXeWczUSs5cGh5UURkS2hGeUZVQ0xuc2R1V3Y4N0xuNlBQUjBWOEFrZ3pmODd5dEVkdkw5OGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwMTY5OTk4NTo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzM5MDIyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQ1lBQUdXZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFDWUFBR1dmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmpyOGYvTnFyd0dKMzdTaThpTjdadzhHb1lORlBBaWZuZTZScVBBVUpwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjcwODAxMDk4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbNywwLDM4LDIsM119LFwidGltZXN0YW1wXCI6XCIxNzEyNDgxNTc5NTM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| ꒒ ০ ⌵ ୧ ♡"",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MrHasnain",
  ownername:process.env.OWNER_NAME|| "It'x Hasnain",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-556bc716-eef5-47dd-a8cc-81a4edd71951",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "hasnain-suhailmd",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "fb94bb579de2a34d3880330ef54b4a58";
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

# VirtualGarage
Purpose:
This NodeJs project will help you add vehicle into your garage. Then later have a list of inventory items and the program will find the items in the inventory that match your selected vehicle 
DB setup:
You can uncomment the mock data section to have some test data or you can start seeding the Mongoldb with the following script. I am assuming that you have some Mongoldb background.

Status:
The project is still in its infancy.  It is by no means feature complete yet! 
Script:
use garage

db.owned.insert({ "Id":1,"Make": "Yamaha", "Model":"R1" , "Year":2015,  "Type":"motorcycle"})

db.owned.insert({ "Id":2,"Make": "Honda", "Model":"CBR" , "Year":2012, "Type":"motorcycle"})

db.owned.insert({ "Id":3,"Make": "Suzuki", "Model":"GSXR" , "Year":2008, "Type":"motorcycle"})

db.owned.insert({ "Id":4,"Make": "Nissan", "Model":"370z" , "Year":2011, "Type":"car"})

db.owned.find()

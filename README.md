# VirtualGarage
DB setup:
You can uncomment the Moc data section to have some test data or you can start seeding the Mongodb with the following script. I am assuming that you have some Mongodb background.

Script:
use garage

db.owned.insert({ "Id":1,"Make": "Yamaha", "Type":"R1", "Year":2015})

db.owned.insert({ "Id":2,"Make": "Honda", "Type":"CBR", "Year":2012})

db.owned.insert({ "Id":3,"Make": "Suzuki", "Type":"GSXR", "Year":2008}})

db.owned.find()

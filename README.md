# VirtualGarage
DB setup:
You can uncomment the Moc data section to have some test data or you can start seeding the Mongodb with the following script. I am assuming that you have some Mongodb background.

Script:
use garage

db.owned.insert({"bikes":[ { "Id":1,"Make": "Yamaha", "Type":"R1", "Year":2015},{ "Id":2,"Make": "Honda", "Type":"CBR", "Year":2012},{ "Id":3,"Make": "Suzuki", "Type":"GSXR", "Year":2008}]})
WriteResult({ "nInserted" : 1 })

db.owned.find()

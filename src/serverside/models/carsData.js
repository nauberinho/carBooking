/**
 * Created by naube on 2017-10-06.
 */

'use strict'

let carsList = [
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Mazda",
        "model": "323i",
        "year": 1991,
        "gearbox": "manuell",
        "dagshyra": 298,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/7/72/Mazda_323f_green_front_20080301.jpg"
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Volvo",
        "model": "V40",
        "year": 1997,
        "dagshyra": 349,
        "gearbox": "manuell",
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Volvo-V40.jpg"
    },
    {
        "fordonstyp": "lätt lastbil",
        "requiredDrivingLicense": "B",
        "brand": "Mercedez-Benz",
        "model": "Sprinter 316 CDI",
        "year": 2003,
        "dagshyra": 498
    },
    {
        "fordonstyp": "lätt lastbil",
        "requiredDrivingLicense": "B",
        "brand": "Volkswagen",
        "model": "LT 46b",
        "year": 1999
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Peugeot",
        "gearbox": "manuell",
        "model": "308",
        "year": 2007,
        "dagshyra": 298,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/4/40/Peugeot_308_5-T%C3%BCrer_front.JPG"
    },
    {
        "fordonstyp": "tung lastbil",
        "requiredDrivingLicense": "CE",
        "brand": "Mercedes-Benz",
        "model": "Atego 8 16 L 4 x 2",
        "year": 1995,
        "dagshyra": 850,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mercedes-Benz_Atego_white_strasbourg.JPG",
        "kommentarer": {
            "skador": "Större reva på högersida skåp."
        }
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Audi",
        "model": "A4",
        "gearbox": "automat",
        "year": 2000,
        "dagshyra": 398,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/7/79/Audi_A4_B7_Avant_2.0_TDI.JPG",
        "fuel": "95"
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Volvo",
        "model": "S50",
        "year": 2005,
        "gearbox": "manuell",
        "dagshyra": 498,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Volvo_V50_--_04-20-2010.jpg"
    },
    {
        "fordonstyp": "motorcykel",
        "requiredDrivingLicense": "A",
        "brand": "Yamaha",
        "model": "YCF R1",
        "year": 2001,
        "dagshyra": 498
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Toyota",
        "model": "Aygo",
        "dagshyra": 198,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Toyota_Aygo_front_20071204.jpg"
    },
    {
        "fordonstyp": "ATV",
        "requiredDrivingLicense": "A1",
        "brand": "Can-Am",
        "model": "Outlander 570",
        "year": 2008,
        "dagshyra": 598
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Saab",
        "model": "9-5 2.3 Super linear",
        "gearbox": "automat",
        "year": 2003,
        "fuel": "95",
        "dagshyra": 198
    },
    {
        "fordonstyp": "Trehjuling",
        "brand": "Can-Am",
        "model": "Spyder Roadster",
        "year": 2015,
        "dagshyra": 798,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/5/52/BRP_Can-Am_Spyder_Roadster_20100810c.JPG"
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Kia",
        "gearbox": "manuell",
        "model": "Optima kombi",
        "year": 2001,
        "dagshyra": 498,
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/e/eb/2011_Kia_Optima_Hybrid_--_05-19-2011.jpg"
    },
    {
        "fordonstyp": "lätt lastbil",
        "requiredDrivingLicense": "B",
        "brand": "Fiat",
        "model": "Ducato 2.3 Volymskåp maxi",
        "year": 2006,
        "dagshyra": 798
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Toyota",
        "model": "Aygo",
        "year": 2009,
        "gearbox": "manuell",
        "dagshyra": 198
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Volvo",
        "model": "c30",
        "dagshyra": 225,
        "fuel": "diesel",
        "kommentarer": {
            "skador": "Backen är väldigt trög att få i."
        }
    },
    {
        "fordonstyp": "personbil",
        "requiredDrivingLicense": "B",
        "brand": "Volvo",
        "model": "v70",
        "year": 1996,
        "dagshyra": 298,
        "fuel": "diesel",
    },
]

module.exports.carsList = carsList;

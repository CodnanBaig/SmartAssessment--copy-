import { AgentInfo } from "src/app/models/agent.model"
import { Listings } from "src/app/models/listings.model"

export interface ListState {
    records: Listings[]
}

export const initialState: ListState = {
    "records": [
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 74015,
            "name": "Listing #74015",
            "streetAddress": "Riveroad Ct",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/74015/micros/0b0ba.jpg",
            "favorite": true,
            "highestSentCommissions": 75,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1138.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1639.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Granite Countertops",
                "Dog/Walk Park",
                "Jogging Trail",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.42201",
                "Latitude": "32.700878",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 76204,
            "name": "Listing #76204",
            "streetAddress": "Bryant Irvin",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/76204/micros/0a.jpg",
            "favorite": true,
            "highestSentCommissions": 50,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1355.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1425.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1725.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Dog/Walk Park",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.419173",
                "Latitude": "32.674341",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 74007,
            "name": "Listing #74007",
            "streetAddress": "Bellaire",
            "city": "Benbrook",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/74007/micros/a0.jpg",
            "favorite": false,
            "highestSentCommissions": 50,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 959.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1219.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Dog/Walk Park",
                "Jogging Trail",
                "Tennis"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.420898",
                "Latitude": "32.695078",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 73933,
            "name": "Listing #73933",
            "streetAddress": "Oak Hill",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/73933/micros/1fe6b.jpg",
            "favorite": false,
            "highestSentCommissions": 50,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1295.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1610.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 2120.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Dog/Walk Park",
                "Jogging Trail",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.383017",
                "Latitude": "32.712804",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 73316,
            "name": "Listing #73316",
            "streetAddress": "Chickering",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/73316/micros/1b.jpg",
            "favorite": false,
            "highestSentCommissions": 50,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 919.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1079.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1219.0000
                }
            ],
            "highValueAmenities": [
                "Wood Floors",
                "Fitness Center",
                "Tennis"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.430361",
                "Latitude": "32.705048",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 101618,
            "name": "Listing #101618",
            "streetAddress": "Hulen",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/101618/micros/1.jpg",
            "favorite": false,
            "highestSentCommissions": 50,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1261.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1402.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1921.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Dog/Walk Park",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.387957",
                "Latitude": "32.721068",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 72333,
            "name": "Listing #72333",
            "streetAddress": "Wellesley",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/72333/micros/SlateApts-WEB-10.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 975.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1125.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Granite Countertops",
                "Dog/Walk Park"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.39105",
                "Latitude": "32.725568",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 72117,
            "name": "Listing #72117",
            "streetAddress": "Bellaire",
            "city": "Benbrook",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/72117/micros/a2.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1177.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1544.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Dog/Walk Park",
                "Jogging Trail",
                "Fitness Center"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.4148",
                "Latitude": "32.6954",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 86603,
            "name": "Listing #86603",
            "streetAddress": "West Lancaster",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/86603/micros/BL10.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 0,
                    "type": "Eff",
                    "price": 1125.0000
                },
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1380.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1610.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Granite Countertops",
                "Stained Concerete Floors",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.359472",
                "Latitude": "32.747698",
                "Percision": "RANGE_INTERPOLATED",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 74017,
            "name": "Listing #74017",
            "streetAddress": "River Park",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/74017/micros/1126.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1030.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1220.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 2045.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Jogging Trail",
                "Fitness Center"
            ],
            "paidUtilities": [
                "Trash",
                "Water"
            ],
            "geocode": {
                "Longitude": "-97.423602",
                "Latitude": "32.69913",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 74038,
            "name": "Listing #74038",
            "streetAddress": "River Park",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/74038/micros/a2.jpg",
            "favorite": true,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1095.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1231.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 2002.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Granite Countertops",
                "Dog/Walk Park",
                "Fitness Center",
                "Basketball",
                "Tennis",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.42563",
                "Latitude": "32.700414",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 71680,
            "name": "Listing #71680",
            "streetAddress": "Overton Ridge",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/71680/micros/a2.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 768.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1125.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1400.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Fitness Center"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.410761",
                "Latitude": "32.673911",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 76519,
            "name": "Listing #76519",
            "streetAddress": "Westridge",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/76519/micros/76519-2_737.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 935.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1273.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1637.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Fitness Center"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.415196",
                "Latitude": "32.726082",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 76643,
            "name": "Listing #76643",
            "streetAddress": "Park Hill",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/76643/micros/10.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1109.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1401.0000
                },
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 1704.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Dog/Walk Park",
                "Jogging Trail",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.349082",
                "Latitude": "32.715501",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 77439,
            "name": "Listing #77439",
            "streetAddress": "University",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/77439/micros/1a.jpg",
            "favorite": true,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 3,
                    "type": "3 Bed",
                    "price": 799.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Granite Countertops",
                "Dog/Walk Park",
                "Fitness Center"
            ],
            "paidUtilities": [
                "Cable",
                "Gas",
                "Trash",
                "Water"
            ],
            "geocode": {
                "Longitude": "-97.360138",
                "Latitude": "32.697651",
                "Percision": "ROOFTOP",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 72899,
            "name": "Listing #72899",
            "streetAddress": "Overton Ridge",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_FURNISHED",
            "photo": "",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 0,
                    "type": "Eff",
                    "price": 999.0000
                },
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 850.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1287.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Dog/Walk Park",
                "Fitness Center"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.408734",
                "Latitude": "32.674031",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        },
        {
            "listID": 5363950,
            "order": 0,
            "propertyID": 71132,
            "name": "Listing #71132",
            "streetAddress": "Riverpark",
            "city": "Fort Worth",
            "state": "TX",
            "pets": true,
            "washerDry": "FULLSIZE_CONNECTIONS",
            "photo": "https://d3d5tet3r0xd5y.cloudfront.net/photos/71132/micros/COR1.jpg",
            "favorite": false,
            "highestSentCommissions": 0,
            "onsiteManager": null,
            "management": null,
            "proximity": 0.0,
            "section8": false,
            "seniorHousing": false,
            "studentHousting": false,
            "floorplans": [
                {
                    "bedrooms": 1,
                    "type": "1 Bed",
                    "price": 1209.0000
                },
                {
                    "bedrooms": 2,
                    "type": "2 Bed",
                    "price": 1564.0000
                }
            ],
            "highValueAmenities": [
                "Black/Stainless Appliances",
                "Wood Floors",
                "Dog/Walk Park",
                "Jogging Trail",
                "Fitness Center",
                "ValletTrash"
            ],
            "paidUtilities": [],
            "geocode": {
                "Longitude": "-97.420898",
                "Latitude": "32.69929",
                "Percision": "GEOMETRIC_CENTER",
                "IsValid": true
            }
        }
    ] 
}
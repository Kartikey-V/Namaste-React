import React from 'react';
import ReactDOM from 'react-dom/client';

/*
        Header
            - Logo
            - List Items(right)
            - Cart
        Body
            - Search Bar
            - Restaurant List
                - Restaurant Card (Many)
                    - Image
                    - Name
                    - Rating 
                    - Cuisines
        Footer
            - Copyright
            
        */

const Title = () => (
  <a href="/">
    <img
      className='logo'
      src="https://dynamic.brandcrowd.com/asset/logo/e94a6dd4-56ea-4145-a63c-19d59312e922/logo-search-grid-1x?logoTemplateVersion=1&v=637829909691300000"
      alt="logo"
    />
  </a>
);
const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "57488",
      "name": "Nathu's Sweets",
      "uuid": "4cee2f40-6473-44d4-9e6b-514a6be6bb20",
      "city": "4",
      "area": "New Friends Colony",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "bigzh0stj2v4psnowvwa",
      "cuisines": [
        "Sweets",
        "Chaat",
        "Indian",
        "North Indian"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "nathus-sweets-new-friends-colony-jasola",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "19, Community Centre, New Friends Colony, New Delhi",
      "locality": "A Block",
      "parentId": 1945,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5844450~p=1~eid=00000186-458b-4fc4-3577-2155006e0124",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "57488",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "590026",
      "name": "Third Wave Coffee",
      "uuid": "b356d592-45e6-4e25-bae4-a81148432027",
      "city": "4",
      "area": "Kalkaji",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "47a01e69717e471c15b1d830a7b7f713",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 5.900000095367432,
      "slugs": {
        "restaurant": "third-wave-coffee-greater-kailash-2-greater-kailash-2-2",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Upper Ground Floor E-4,Kalkaji South East , Delhi- 110019",
      "locality": "E Block",
      "parentId": 274773,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5884256~p=13~eid=00000186-458b-4fc4-3577-2159006e0d71",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "590026",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "403382",
      "name": "Barista",
      "uuid": "06ce871a-b070-45dc-879f-b616014483e9",
      "city": "4",
      "area": "Lajpat Nagar 2",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "f00f4426ae280b0c0d34ed116e293585",
      "cuisines": [
        "Beverages",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "barista-lajpat-naga-lajpat-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "C-52 Lajpat Nagar-2 Delhi-110024",
      "locality": "C Block",
      "parentId": 2359,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "403382",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.4",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "655878",
      "name": "Chinese Wok",
      "uuid": "51f1f347-1507-4968-a9e6-740cd9a4ed1d",
      "city": "4",
      "area": "Amar Colony",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "4c0dc8fdc5f6f090d7416d6810d1cfe1",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3.799999952316284,
      "slugs": {
        "restaurant": "chinese-wok-kalka-devi-marg-lajpat-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Ground Floor, Property No- E-128, Amar Colony, Kalka Devi Marg, Lajpat Nagar- 4, New Delhi, CHANKYA PURI, New Delhi, Delhi, 110024",
      "locality": "Kalka Devi Marg",
      "parentId": 61955,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5884995~p=4~eid=00000186-458b-4fc4-3577-2156006e043d",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "655878",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.7",
      "totalRatings": 50,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "332864",
      "name": "DESI THAATH",
      "uuid": "f685bce5-17dd-4326-8bdd-8457dba18b71",
      "city": "4",
      "area": "Greater Kailash 3 (GK3)",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "dv8bjmycwxznfa60ausl",
      "cuisines": [
        "Indian",
        "Chinese",
        "Biryani"
      ],
      "tags": [

      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 6.5,
      "slugs": {
        "restaurant": "desi-thaath-malviya-nagar-malviya-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop 19, CSC Market, Masjid Moth Phase 2, Greater Kailash 2 (GK 2), New Delhi, District - South , STATE - Delhi",
      "locality": "Masjid Moth",
      "parentId": 14987,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "6.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "332864",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 6.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "33776",
      "name": "Bake Bank",
      "uuid": "8c0d9cac-9ede-4e7e-8736-a5077903067e",
      "city": "4",
      "area": "Mayur Vihar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "vpgz6o529ifs6ogbimea",
      "cuisines": [
        "Bakery",
        "Snacks",
        "Desserts"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 7.400000095367432,
      "slugs": {
        "restaurant": "bake-bank-mayur-vihar-phase-1-mayur-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "B-19, Acharya Niketan Market, Mayur Vihar Phase 1, New Delhi",
      "locality": "1st Phase",
      "parentId": 39876,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "7.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "33776",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 7.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "532321",
      "name": "Greenit - Healthy & Vegan",
      "uuid": "eb3621cf-52ec-413c-9e1d-cf5765c18942",
      "city": "4",
      "area": "Defence Colony",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "a1b75ecf37d994300c877e7e941a4108",
      "cuisines": [
        "Indian",
        "Continental",
        "Salads",
        "Pizzas",
        "Beverages",
        "Desserts",
        "Healthy Food",
        "Pastas",
        "Snacks",
        "Biryani",
        "Burgers",
        "Fast Food"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "greenit-south-extension-south-extension",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "1515, 1st floor, Wazir Nagar Kotla Mubarak pur, Defence Colony, New Delhi,110003",
      "locality": "South Extension",
      "parentId": 319619,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5918915~p=7~eid=00000186-458b-4fc4-3577-2157006e0764",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "532321",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 3.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "375163",
      "name": "Blue Tokai Coffee Roasters",
      "uuid": "c2c87bad-7644-4683-aae0-88b6b5bc9219",
      "city": "4",
      "area": "New Friends Colony",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "ulxidsj9egvgawtwbgff",
      "cuisines": [
        "Healthy Food",
        "American",
        "Lebanese",
        "Mediterranean",
        "European",
        "Juices",
        "Middle Eastern"
      ],
      "tags": [

      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "blue-tokai-coffee-roasters-jasola-jasola",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "8, Community Centre, New Friends Colony, New Delhi - 110025",
      "locality": "A Block",
      "parentId": 2682,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "375163",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "172862",
      "name": "Muradabadi Hyderabadi Biryani",
      "uuid": "f7b3bcfe-30e4-4487-b0c1-33453e6b78d7",
      "city": "4",
      "area": "Jasola",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "qofs4igwpehd52vrf9wv",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Mughlai"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "muradabadi-hyderabadi-biryani-nfc",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "SHOP NO-6, OKHLA, MAIN MARKET, JAMIA NAGAR, DELHI, District - South East, STATE - Delhi",
      "locality": "Okhla",
      "parentId": 141953,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "172862",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "102401",
      "name": "Aziz chicken corner",
      "uuid": "c0940e7a-7e7a-427e-845d-9ffe51bd3fb2",
      "city": "4",
      "area": "Jasola",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "rffihtxnpf9pj4kvdvpl",
      "cuisines": [
        "Mughlai"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "aziz-chicken-corner-new-delhi-nfc",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "SHOP NO 8, OKHLA MAIN BUS STAND JAMIA NACAR DELHI DEFENCE COLONY EAST DELHI",
      "locality": "Jamia Nagar",
      "parentId": 13560,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5920649~p=10~eid=00000186-458b-4fc4-3577-2158006e0a33",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "102401",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "204550",
      "name": "Zaika Biryani Muradabadi & Hyderabadi",
      "uuid": "acd568d1-4606-4ddf-abdc-b07f94d6e500",
      "city": "4",
      "area": "Kalkaji",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "oooijzoub3gdidlgnwkf",
      "cuisines": [
        "Mughlai",
        "Tandoor"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "zaika-biryani-muradabadi-&-hyderabadi-jasola-jasola",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A 119 A Block double story kalkaji 110019",
      "locality": "A Block",
      "parentId": 229166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "204550",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "402810",
      "name": "Henry Havaldar",
      "uuid": "a6551900-7fb6-4aca-90f4-5034d3975d70",
      "city": "4",
      "area": "Malviya Nagar",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "j06vbzam9b5zc9s34ed4",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Indian"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 7.900000095367432,
      "slugs": {
        "restaurant": "henry-havaldar-malviya-nagar-malviya-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop no.10 & 11, First & secod Floor, Corner Market, Malviya Nagar, New Delhi-110017",
      "locality": "Maharishi Dayanand Marg",
      "parentId": 246787,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [

        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "7.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "402810",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
]

const haldirams = {
  name: "Haldirams",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jbntk7eb7rrzpmjl0ggs",
  cusines: ["North Indian", "Chinese"],
  rating: "4.2"
}

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className='card'>
      <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className='restaurant-list'>
      {
        restaurantList.map(restaurant => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
      <h4>Body</h4>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <h4>Footer</h4>
    </>
  )
}

const AppLayout = () => {
  return (
    <>
      <></>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

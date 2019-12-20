{
    "productID": “KL2432”,
    “productName”: “Hugo Boss men’ s suit”,
    “productPrice”: 2500,
    “productPriceFormatted”: “DKK 2.500,
    00”“ inStock”: true,
    “relatedProducts”: [{“
            productID”: “KL2532”
        },
        {“
            productID”: “KL2341”
        }
    ]
}


{
    "review": {
        "id": 1,
        "title": "No skulls",
        "body": "I love the bracelets, but I do not ever wear skull...",
        "rating": 3,
        "product_id": 2,
        "reviewer_id": 1,
        "source": "email",
        "curated": "not-yet",
        "hidden": false,
        "verified": "buyer",
        "featured": true,
        "created_at": "2015-01-17T00:00:00+00:00",
        "updated_at": "2015-01-17T00:00:00+00:00",
        "pictures": [{
                2 items
            },
            {
                2 items
            }
        ]
    }
}




{
    "api_token": "xxxxxxxxx",
    "shop_domain": "shop_domain.example.com",
    "id": 1,
    "name": "#2026",
    "cancelled_at": "2017-10-24T03:42:46+00:00",
    "fulfillment_status": "fulfilled",
    "customer": {
        "first_name": "John",
        "last_name": "Doe",
        "email": "customer@example.com",
        "tag": "customer_tag, super_customer",
        "updated_at": "2015-01-17T00:00:00+00:00",
        "default_address": {
            "phone": "+84933387777"
        }
    },
    "shipping_address": {
        "country_code": "US"
    },
    "fulfillments": [{
            "id": 1,
            "created_at": "2015-01-17T00:00:00+00:00",
            "tracking_company": "ups",
            "tracking_number": "1Z12345E0205271688",
            "status": "success"
        },
        {
            "id": 2,
            "created_at": "2015-01-17T00:00:00+00:00",
            "tracking_company": "dhl",
            "tracking_number": "2345678901",
            "status": "success"
        }
    ],
    "line_items": [{
            "id": 1,
            "price": 10,
            "quantity": 5,
            "product_id": 12
        },
        {
            "id": 2,
            "price": 20,
            "quantity": 2,
            "product_id": 5
        }
    ]
}




{
"api_token": "xxxxxxxxx",
"shop_domain": "shop_domain.example.com",
"email": "reviewer+1@example.com",
"external_id": 100,
"query_type": "reviewers",
"reviewer": {
"email": "reviewer+updated@example.com",
"name": "Reviewer Name Updated",
"accepts_marketing": false,
"unsubscribed_at": "2017-11-21T01:17:12+00:00",
"tags": "super_customer_update, test_customer_update, customer_update",
"phone": "+84933387777"
}
}



{
"order_id": 9,
"order_name": "#2026",
"order_external_id": 2,
"line_items": [
{
"id": 1,
"status": "sent_by_shop",
"price": 700,
"quantity": 2,
"external_id": 1,
"product_id": 4,
"product_external_id": 34342424,
"processed_at": "2017-10-18T04:51:02+00:00",
"review_id": 4
},
{
"id": 2,
"status": "will_sent",
"price": 500,
"quantity": 4,
"external_id": 2,
"product_id": 7,
"product_external_id": 34343342424,
"processed_at": "2017-10-18T04:51:02+00:00",
"review_id": null
}
]
}


{
"product": {
"id": 1,
"external_id": 100,
"title": "Product Test",
"in_store": true,
"handle": "product-test",
"image_url": http://shopdomain.example/image-url-for-product.png,
"medium_image_url": http://shopdomain.example/medium-image-url-for-product.png,
"small_image_url": http://shopdomain.example/small-image-url-for-product.png,
"excluded": false,
"vendor": "Super vendor"
}
}

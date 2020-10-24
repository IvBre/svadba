# Svadba backend - PHP API

## Set up locally

- run `composer install`
- make sure you have PHP7 by running command `php -v`
- create a file `./config/mysql.json` where you need to set up database credentials, 
like for example:
```
{
  "host":  "66.147.242.182",
  "user": "<HIDDEN>",
  "password": "<HIDDEN>",
  "database": "<HIDDEN>"
}
```

If you have IntelliJ, the PHP server should already be in the "Run Configurations", 
just select it and press the green arrow button "Run".

In case you don't have it or it doesn't work, then you'll need to run it manually:
```
php -S localhost:5000
```

## Endpoints

- `GET /v/<CODE>` - This endpoint will return data we have related to the provided `code`.
Sample response:
```
HTTP/1.0 200 OK
Content-Type: application/json

{
  "status": "success",
  "data": {
    "email": "foobar@gmail.com",
    "maxGuests": 3,
    "updatedDatetime": "2020-10-24 15:46:41",
    "guests": [
      {
        "guestId": 1,
        "name": "Marko",
        "isComing": true,
        "isVegetarian": false
      },
      {
        "guestId": 2,
        "name": "Janko",
        "isComing": true,
        "isVegetarian": false
      }
    ]
  }
}
```

- `POST /u/<CODE>` - Update the existing invitation data for the provided `code`.
Sample request:
```
{
  "email": "foobar@gmail.com",
  "guests": [
    {
      "guestId": 1,
	  "name": "Marko",
      "isComing": true,
      "isVegetarian": false
    },
    {
      "guestId": 2,
	  "name": "Janko",
      "isComing": true,
      "isVegetarian": false
    },
	{
	  "name": "Branko",
      "isComing": true,
      "isVegetarian": true
    }
  ]
}
```
If the `guest` object doesn't have an `guestId`, that means it's a new guest added to this invite.

There is a lot of validation for this data, so do not worry, 
but you need to handle the errors in the frontend.
Here is an example response in case of a user error:
```
HTTP/1.0 400 Bad Request
Content-Type: application/json

{
  "status": "error",
  "message": "This invitation can only have maximum of 3 guest(s) in total, but you've added 4. Please add 3 or less invitees.",
  "title": "Bad Request"
}
```

And in case of a server error:
HTTP/1.0 500 Internal Server Error
Content-Type: application/json

```
{
  "status": "error",
  "message": "An unexpected error occurred.",
  "title": "Internal Server Error"
}
```
# CapSo frontend developer test task #

## Getting started ##

* Use bower and npm to install dependencies
* Run using `grunt serve`
* Go to localhost:9000 and further instructions will be provided there.

##My implementation
Hi there. My name is Michael. :) This describes my submission to your test.

I got through three of the four task, unfortunately time was against me. However, I found the test really useful. I also enjoyed working with ``ui-router``. That's powerfull!

I will say that I am a relative novice with Angular and this was a learning experience. But I enjoyed it and I look forward to working with it more in the future, hopefully with yourselves. :)

###On the data
I chose to serve up the data from a local server in order to get around any cross-origin request issues. I set up a couple of php files to get the data from.

Change the get URLs in each of the getData functions to switch back to your own URLs.

###Display a list of the companies in the ``companies.json`` dataset
I set up a new state in app.js which bound a ``CompaniesCtrl`` to a ``companies`` state with a ``companies.html`` view.

The controller is in ``companies.js`` and the ``GetCompaniesData`` service is injected to it. It gets all companies data and adds them to the scope. 

``companies.html`` uses this to fill out the companies information. In the view there is a ui-sref which changes the state to ``company`` and passes through a company id to the new state.

###Provide a view for each company, displaying their basic info and some details on their relevant bonds
The ``company`` state in app.js takes the company id passed in from ``companies.html`` and this is used in the ``CompaniesCtrl`` to parse out bonds from the ``bondmaster.json`` dataset. See ``controllers/company.js``.

**Note**: it is slow as quite a bit of data is processed in the client. Obviously, this would work better with a full API available. 

By default the bonds information is not visible. I set up a nested ``company.companybonds`` state and the click handler on the button in ``company.html`` toggles this state (the button state requires some work). 

There is a button in each bond listing to view the full bond information. The ui-sref directive on that switches the state to ``bond`` and passes thorough a bondId param. 

###Display the history of the price of each bond
The ``BondsCtrl`` in ``bonds.js`` gets the data for a particular bond in the ``bond`` state. 

To show the price history I got the closing price each day from the bond prices array - there are six prices for each day, I got the last one for each and I reversed the data to show the most recent first. It's a bit crude and it would be better to base it off a time but it works for now and could be improved with a little date maniputation. I added a priceHistory array to the scope to make this easy to access in the view.

I format the date and pull it into ``bond-prices.html`` view along with the price of the bond each day. 

**Note**: I would look to present this as a graph in real life.

###Show a list of the highest five moving bond prices for a particular time period

I didn't have time to get this one done, however I feel it is doable. It's about processing the bonds data. 

I would get the start and end time for the time period. 
* I would have an array of topFiveBonds with five elements
* For each bond I would get the price at the start time and at the end time. 
* If the difference is positive I would compare the difference in this bond with each of those in the topFive array. 
* If the difference is greater for the current bond than some bond in the arry I would add it to the array in the appropriate slot and shove one bond out.
* This would probably require a recursive function to push each element value down one place.
# Tracking Prices | Beginner

In this tutorial, you'll learn how to track [Event](../class/src/index.js~Event.html) values and 
test for the highest and lowest price values.

## Declaring your variables

Once you've opened your Javascript editor, you should see your default CEVNTPane and CEVNTFeed 
variables along with some new ones. These are most commonly defined as gEvntPane and gPaneFeed.  

```js
var gEvntPane;
var gPaneFeed;
var gFeedDraw;
var kSymbolName = "";

var gCalcTop, gCalcBot;
var gStatTop, gStatBot;
var gDrawTop, gDrawBot;

var gOnFirstEvent = true; //tracks whether or not our initial value has been set
var gTopPrice = 0.0; //tracks the top price value
var gBotPrice = 0.0; //tracks the bottom price value
```

- [CEvntCalc](../class/src/index.js~CEvntCalc.html) ```gCalcTop, gCalcBot```  
Make sure to create two variables to save our top and bottom-most prices.

- [CEvntStat](../class/src/index.js~CEvntStat.html) ```gStatTop, gStatBot```  
You'll also need to create two variables to display your top and bottom-most prices in your pane

- [CEVNTDraw](../class/src/index.js~CEvntDraw.html) ```gDrawTop, gDrawBot```  
Finally, you'll need to create two variables to draw lines corresponding to your top and bottom-most prices

- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) ```gOnFirstEvent```  
Since we'll be starting each symbol time period at an undetermined price, we'll need the first 
price as a starting point to base the rest of our conditional statements on
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) ```gTopPrice, gBotPrice```  
Finally, we'll need two simple variables to hold the number value corresponding to the highest and lowest prices of the period

## Initialization

Next, you'll need to initialize your variables. In a way, this step is very similar to the 
[onLoad](manual.html#onload) section of the manual's introduction to the built in [onLoad](../function/index.html#static-function-onLoad) 
function, but this time, you're going to need to prepare, or *initialize*, a few more variables.

### Your Pane

When initializing your [Pane](../class/src/index.js~CEvntPane.html), there are two additional 
attributes that you're able to apply to it. 

```js
gEvntPane = MakePane();

gEvntPane.title = "Top & Bottom Prices"; //text at the top of pane
gEvntPane.fillStyle = "#030308"; //background color in hexidecimal
```



### Your Feed



### Top price



### Bottom price



## Event handling



### Your *tTick* Event



### Your first Event



### Other Events



### Saving values



## Results

#### Congratulations

At this point, you should now be able to test, save, and display aspects of events, and 
you should see a chart based off of your selected Symbol for the most recent exchange period like 
the one shown below! Feel free to zoom in and out and scroll through your newly created chart.

Your script should now provide functionality similar to [this](https://github.com/PlGGS/Vertex-Analytics/blob/master/sample%20scripts/sampleTopBottomPrices.js)

[//]: # "Add finished script image ![view chart](asset/view_chart.png)"

#### Troubleshooting

For certain periods throughout the day, EVNTScript will not be able to generate charts. 
This is because the vNine platform makes use of the time in which the exchange is down to process and archive data. 
Below is a chart containing weekly hours of downtime.

| Monday        | Tuesday       | Wednesday     | Thursday      | Friday  | Saturday | Sunday  |
|---------------|---------------|---------------|---------------|---------|----------|---------|
| 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm- | -        | -5:00pm |

Also, please note that some contracts also stop the exchange from 3:15pm-3:30pm on weekdays.

#### Contact

If you come across any major issue/bugs, please let us know by sending an email with an explanation of what occured to 
[support@vertex-analytics.com](mailto:support@vertex-analytics.com).

Additionally, if there is something that you think we could improve about this documentation, 
please create a new issue at our repository's [issues page](https://github.com/PlGGS/xva-doc/issues).

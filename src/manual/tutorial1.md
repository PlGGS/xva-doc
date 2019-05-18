# Tutorial: The Basics

## Step 1: Pane creation

Drag a new pane into your vNine dashboard

![drag pane](drag_pane.png)

## Step 2: Opening the editor

Click the JS button to open up the Javascript-esc editor. 
You should be presented with an empty sample script corresponding to your new pane

![click js](click_js.png)

## Step 3: Variable declaration

Once you've opened your Javascript editor, you should see your main CEVNTPane and CEVNTFeed variables. 
These are most commonly defined as gEvntPane and gPaneFeed.  

```js
var gEvntPane;
var gPaneFeed;
var kSymbolName = "ESM9";
```

- [CEVNTPane](https://bblake.info/doc/class/src/index.js~CEvntPane.html) ```gEvntPane``` | 
Our pane variable allows us to create just about everything else we're going to need 
to make use of our script
- [CEVNTFeed](https://bblake.info/doc/class/src/index.js~CEvntFeed.html) ```gPaneFeed``` | 
Our feed variable will be used to track and make use of every single [Event](https://bblake.info/doc/class/src/index.js~Event.html) 
that has occured since the exchange last opened
- [string](//TODO link to string type) ```kSymbolName``` | 
The symbol name is the technical name of the symbol we want to interpret. 
A list of symbol names can be found at [symbols](//TODO link to symbol names)

## Step 4: onLoad

The built in onLoad function is called when the user clicks the run button shown below

![click run](click_run.png)

```js
function onLoad ()
{
	gEvntPane = MakePane();
    gPaneFeed = gEvntPane.MakeFeed(gSymbolName);
    gDrawFeed = gEvntPane.MakeDraw(gPaneFeed);	
}
```

- ```MakePane()``` | Returns a new [CEVNTPane](https://bblake.info/doc/class/src/index.js~CEvntPane.html) object
- ```gEvntPane.MakeFeed(gSymbolName)``` | Returns a new [CEVNTFeed](https://bblake.info/doc/class/src/index.js~CEvntFeed.html) object based on the specified symbol name 
- ```gEvntPane.MakeDraw(gPaneFeed)``` | Returns a new [CEVNTDraw](https://bblake.info/doc/class/src/index.js~CEVNTDraw.html) object

## Step 5: onOpen

## Step 6: onEvent

## Step 7: onStop

## Results

###### Thank you



###### Troublingshooting



###### Contact



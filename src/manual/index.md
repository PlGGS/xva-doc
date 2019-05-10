# Manual

## General Formatting

### Constants

Constants used for distinguishing variable roles

- `k` | K denotes a constant variable
- `g` | G denotes a global variable

##### Usage

```js
var gEvntPane;
var gPaneFeed;
var kSymbolName = "ESM9";
```
## Enumerated Constants

### CEvntFeed.FeedStep

Constants used for CEvntFeed.FeedStep

- `kStepShow` | Shows the event aggregating by time
- `kStepHide` | Withholds the even from the Symbol viewport
- `kStepHalt` | Shows the previous event
- `kStepNext` | Advances the step position

##### Usage

```js
gPaneFeed.FeedStep = kStepHide; //This will hide the current event in the feed
```

### kEvent.Type

Enumerated types of events

- `kEvent.Type.Trade` | 
- `kEvent.Type.Bid` | 
- `kEvent.Type.Ask` | 
- `kEvent.Type.ImpliedBid` | 
- `kEvent.Type.ImpliedAsk` | 
- `kEvent.Type.BookReset` | 

##### Usage

```js
if (tTick.Type == kEvent.Type.Trade)
{
	//Do something based on event being a trade
}
```

### kEvent.Trade.Aggressor

Enumerated values for getting the type of aggressor of a trade event

- `kEvent.Trade.Aggressor.Buy` | 
- `kEvent.Trade.Aggressor.Sell` | 

##### Usage

```js
if (tTick.Type == kEvent.Type.Trade)
{
	if (tTick.Trade.Aggressor == kEvent.Trade.Aggressor.Buy)
	{
		//Do something based on trade's aggressor being a buyer
	}
}
```

### kEvent.Bid.Type

Enumerated values for getting the type of a bid event

- `kEvent.Bid.Type.New` | 
- `kEvent.Bid.Type.Change` | 
- `kEvent.Bid.Type.Delete` | 
- `kEvent.Bid.Type.DeleteThru` | 
- `kEvent.Bid.Type.DeleteFrom` | 
- `kEvent.Bid.Type.Overlay` | 
- `kEvent.Bid.Type.Replace` | 

##### Usage

```js
if (tTick.Bid.Type == kEvent.Bid.Type.New)
{
	//Do something based on bid's type being new
}
```

### kEvent.Ask.Type

Enumerated values for getting the type of an ask event

- `kEvent.Ask.Type.New` | 
- `kEvent.Ask.Type.Change` | 
- `kEvent.Ask.Type.Delete` | 
- `kEvent.Ask.Type.DeleteThru` | 
- `kEvent.Ask.Type.DeleteFrom` | 

##### Usage

```js
if (tTick.Ask.Type == kEvent.Ask.Type.New)
{
	//Do something based on ask's type being new
}
```

### CEvntPane.Wave

Enumerated values for playing different audio files

- `Bang` | 
- `Clang` | 
- `Punch` | 
- `Ring_1` | 
- `Ring_2` | 
- `Ring_3` | 
- `Ring_4` | 
- `Ring_5` | 
- `Ring_6` | 
- `Ring_7` | 
- `Slap` | 


##### Usage

```js
CEvntPane.PlayWave(0); //Plays a bang!
```

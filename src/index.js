/**
 * Class representing the the pane that draws your symbol's Feed of Events.
 * @example
 * var gEvntPane;
 * function onLoad()
 * {
 *     gEvntPane = MakePane();
 *     //...
 * }
 */
export class CEvntPane
{
    /**
     * Creates a CEvntPane object
     */
    constructor()
    {
        /**
        * Text that appears at the top of the pane
        * @type {String}
        * @public
        */
        this.title = "";

        /**
        * String representing the pane's background color in hexidecimal (Make sure to include a # at the beginning)
        * @type {String}
        * @public
        */
        this.fillStyle = "#000000";
    }
    
    /**
     * Makes a CEvntFeed object.
     * @param {String} pSymb - Name of the symbol
     * @returns {CEvntFeed} a calculation object.
     */
    MakeFeed(pSymb)
    {

    }

    /**
     * Makes a CEvntTrig object.
     * @param {CEvntCalc} pItem - Calc object for your status object to read from
     * @returns {CEvntStat} a status object.
     */
    MakeStat(pItem)
    {

    }

    /**
     * Make a CEvntDraw object.
     * @param {CEvntCalc} pItem - Calc object for your draw object to read from
     * @returns {CEvntDraw} a draw object.
     */
    MakeDraw(pItem)
    {

    }

    /**
     * Plays a selected sound from a set of available pre-existing files. (See manual for enumerated sound options)
     * @param {Number} pWave - Enumerated wave files in CEvntPane.Wave (See manual for enumerated sound options)
     */
    PlayWave(pWave)
    {

    }
}

/**
 * Class representing an event feed. A CEvntFeed contains every single Event within a CEvntPane's provided symbol.
 */
export class CEvntFeed
{
    /**
     * Makes a CEvntCalc object.
     * @returns {CEvntCalc} a calculation object.
     */
    MakeCalc()
    {

    }

    /**
     * Makes a CEvntTrig object.
     * @returns {CEvntTrig} a trigger object.
     */
    MakeTrig()
    {

    }

    /**
     * Makes a CEvntFill object. (Users can make up to 4 CEvntFill objects per Pane)
     * @returns {CEvntFill} a trigger object.
     */
    MakeFill() {

    }

    /**
     * Reads an Event from position pSequ.
     * @param {Number} pSequ - Amount of events within this sequence
     * @returns {Event} an event object.
     */
    FeedRead(pSequ)
    {

    }

    /**
     * Assigns a step at the given position, pSequ.
     * @param {Number} pSequ - Event position to set step
     * @param {Number} pStep - Enumerated CEvntFeed FeedStep values in CEvntFeed.FeedStep (See manual for enumerated constants)
     */
    FeedStep(pSequ, pStep)
    {

    }

    /**
     * Assign a trigger at the given position, pSequ.
     * @param {Number} pSequ - Event position to set step
     * @param {Number} pTrig - Trigger you want to initialize
     */
    FeedTrig(pSequ, pTrig)
    {

    }
}

/**
 * Class representing a status indicator that displays the status of a stored variable in the top left of your Pane.
 */
export class CEvntStat
{
    /**
     * Creates an CEvntStat object.
     */
    constructor()
    {
        /**
         * Text color in hexadecimal
         * @type {String}
         * @public
         */
        this.textStyle = textStyle;

        /**
         * Text corresponding to what the status is tracking
         * @type {String}
         * @public
         */
        this.title = title;
    }
}

/**
 * Class that renders Events from a Feed object or lines between calculated values from a Calc object.
 */
export class CEvntDraw
{
    /**
     * Creates an CEvntDraw object.
     */
    constructor()
    {
        /**
         * Stroke width in pixels
         * @type {Number}
         * @public
         */
        this.lineWidth = lineWidth;

        /**
         * Stroke color in hexadecimal
         * @type {String}
         * @public
         */
        this.strokeStyle = strokeStyle;
    }
}

/**
 * Class that stores values at specfic locations in your Pane.
 */
export class CEvntCalc
{
    /**
     * Reads a calculated value at position pSequ.
     * @param {Number} pSequ - Event position to get data
     * @returns {Number} a calculated data.
     */
    CalcRead(pSequ)
    {

    }

    /**
     * Saves a calculated value at position pSequ.
     * @param {Number} pSequ - Event position to set data
     * @param {String} pData - Data to store
     */
    CalcSave(pSequ, pData)
    {

    }
}

/**
 * Class representing an event trigger that notifies the user when something important occurs.
 */
export class CEvntTrig
{
    /**
     * Creates an CEvntStat object.
     */
    constructor()
    {
        /**
         * Text color in hexadecimal
         * @type {String}
         * @public
         */
        this.fillStyle = "#ffa43d";

        /**
         * Text corresponding to the trigger's purpose
         * @type {String}
         * @public
         */
        this.title = "";

        /**
         * Length of time to display the trigger on screen in milliseconds
         * @type {Number}
         * @public
         */
        this.duration = 5000;
    }
}

/**
 * Class representing a custom color scheme that may be used to apply its textStyle and fillStyle fields to events. (Users can make up to 4 CEvntFill objects per Pane)
 */
export class CEvntFill {
    /**
     * Creates an CEvntStat object.
     */
    constructor() {
        /**
         * Text fill color in hexadecimal
         * @type {String}
         * @public
         */
        this.textStyle = "#b26f00";

        /**
         * Polyogn fill color in hexadecimal
         * @type {String}
         * @public
         */
        this.fillStyle = "#ffffff";
    }
}

/**
 * Class representing all other event types. (See manual for enumerated types of events)
 */
export class Event
{
    constructor()
    {
        /**
         * Time in nanosecond with 56 bit precision
         * @type {Number}
         * @private
         */
        this.Time = 0;

        /**
         * Instrument ID
         * @type {Number}
         * @private
         */
        this.Instrument = 0;

        /**
         * Enumerated event type in kEvent.Type (See manual for event types)
         * @type {Number}
         * @public
         */
        this.Type =
        {
            Trade: 0,
            Bid: 1,
            Ask: 2,
            ImpliedBid: 3,
            ImpliedAsk: 4,
            BookReset: 5,
        };
    }
}

/**
 * Class representing an event with Type trade. (Trade is not technically its own class. See manual for enumerated types of events)
 */
export class Trade extends Event
{
    constructor()
    {
        /**
         * Price of the trade
         * @type {Number}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the trade
         * @type {Number}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated event type in kEvent.Type (See manual for event types)
         * @type {Number}
         * @public
         */
        this.Aggressor =
        {
            Buy: 0,
            Sell: 1,
        };
    }
}
/**
 * Class representing an event with Type bid. (Bid is not technically its own class. See manual for enumerated types of events)
 */
export class Bid extends Event
{
    constructor()
    {
        /**
         * Price of the bid
         * @type {Number}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the bid
         * @type {Number}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated bid type in kEvent.Bid.Type (See manual for event types)
         * @type {Number}
         * @public
         */
        this.Type =
        {
            New: 0,
            Change: 1,
            Delete: 2,
            DeleteThru: 3,
            DeleteFrom: 4,
            Overlay: 5,
            Replace: 6,
        };
    }
}

/**
 * Class representing an event with Type ask. (Ask is not technically its own class. See manual for enumerated types of events)
 */
export class Ask extends Event
{
    constructor()
    {
        /**
         * Price of the bid
         * @type {Number}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the bid
         * @type {Number}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated ask type in kEvent.Ask.Type (See manual for event types)
         * @type {Number}
         * @public
         */
        this.Type =
        {
            New: 0,
            Change: 1,
            Delete: 2,
            DeleteThru: 3,
            DeleteFrom: 4,
        };
    }
}

/**
 * Public function used to return a new Pane object. (All other object creation methods are inside CEvnt classes)
 * @example
 * gEvntPane = MakePane();
 */
export function MakePane()
{

}

/**
 * Built in function that is called when the start button is pressed in order to initialize variables.
 */
export function onLoad()
{

}

/**
 * Built in function that is called once for each event in the symbol Feed.
 * @param {CEvntFeed} pFeed - A CEvntFeed object with timestamps measured in nanoseconds with 56 bit precision
 * @param {Number} pSequ - Amount of events to read within this sequence
 */
export function onEvent(pFeed, pSequ)
{

}

/**
 * Built in function that is called once the script has read every previous event in the symbol Feed.
 */
export function onOpen()
{

}

/**
 * Built in function that is called when the stop button is pressed.
 */
export function onStop()
{

}
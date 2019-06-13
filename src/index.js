/**
 * Class representing the a primary chart.
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
        * @type {Number}
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
     * Assigns a step at the given position, pSequ.
     * @param {Number} pWave - Enumerated wave files in CEvntPane.Wave (See manual for enumerated constants)
     */
    PlayWave(pWave)
    {

    }
}

/**
 * Class representing an event feed.
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
 * Class representing a status indicator in the top left of a chart.
 */
export class CEvntStat
{
    /**
     * @param {String} fillStyle - Text color in hexadecimal
     * @param {String} title - Text corresponding to what the status is tracking
     */
    constructor(fillStyle, title)
    {
        /**
         * Text color in hexadecimal
         * @type {String}
         * @public
         */
        this.fillStyle = fillStyle;

        /**
         * Text corresponding to what the status is tracking
         * @type {String}
         * @public
         */
        this.title = title;
    }
}

/**
 * Class representing the drawing element of a chart.
 */
export class CEvntDraw
{
    /**
     * @param {Number} lineWidth - Stroke width in pixels
     * @param {String} strokeStyle - Stroke color in hexadecimal
     */
    constructor(fillStyle, title)
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
 * Class representing a custom calculated element of a chart.
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
 * Class representing an event trigger.
 */
export class CEvntTrig
{
    /**
     * @param {String} fillStyle - Stroke color in hexadecimal
     * @param {String} title - Stroke width in pixels
     * @param {Number} duration - Stroke width in pixels
     */
    constructor(fillStyle, title)
    {
        /**
         * Stroke color in hexadecimal
         * @type {String}
         * @public
         */
        this.strokeStyle = strokeStyle;

        /**
         * Text corresponding to the trigger's purpose
         * @type {String}
         * @public
         */
        this.title = title;

        /**
         * Length of time to display the trigger on screen in milliseconds
         * @type {Number}
         * @public
         */
        this.duration = duration;
    }
}

/**
 * Base Event class that all event types are based off of. (See manual for enumerated types of events)
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
 * Class representing an event with Type trade. (Trade is not technically its own class. It is simply an Event with a selected Type field)
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
 * Class representing an event with Type bid. (Bid is not technically its own class. It is simply an Event with a selected Type field)
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
 * Class representing an event with Type ask. (Ask is not technically its own class. It is simply an Event with a selected Type field)
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
 * This public function is critical to creating your main pane.
 * @example
 * gEvntPane = MakePane();
 */
export function MakePane()
{

}

/**
 * This is a built in function which triggers when the script starts to get general script parameters, including the primary script symbol.
 */
export function onLoad()
{
    
}

/**
 * This is a built in function which triggers for each event in the pFeed stream.
 * @param {CEvntFeed} pFeed - A CEvntFeed object with timestamps measured in nanoseconds with 56 bit precision
 * @param {Number} pSequ - Amount of events to read within this sequence
 */
export function onEvent(pFeed, pSequ)
{

}

/**
 * This is a built in function which triggers when the symbol is successfully loaded and the EOS and instrument data is ready.
 */
export function onOpen()
{

}

/**
 * This is a built in function which triggers when the symbol is stopped by the user.
 */
export function onStop()
{

}
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
    /**
     * Makes a CEvntFeed object.
     * @param {string} pSymb - Name of the symbol
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
    MakeStat()
    {

    }

    /**
     * Make a CEvntDraw object.
     * @param {CEvntCalc} pItem - Calc object for your draw object to read from
     * @returns {CEvntDraw} a draw object.
     */
    MakeDraw(pSequ)
    {

    }

    /**
     * Assigns a step at the given position, pSequ.
     * @param {int} pWave - Enumerated wave files in CEvntPane.Wave (See manual for enumerated constants)
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
     * @param {int} pSequ - Amount of events within this sequence
     * @returns {Event} an event object.
     */
    FeedRead(pSequ)
    {

    }

    /**
     * Assigns a step at the given position, pSequ.
     * @param {int} pSequ - Event position to set step
     * @param {int} pStep - Enumerated CEvntFeed FeedStep values in CEvntFeed.FeedStep (See manual for enumerated constants)
     */
    FeedStep(pSequ, pStep)
    {

    }

    /**
     * Assign a trigger at the given position, pSequ.
     * @param {int} pSequ - Event position to set step
     * @param {int} pTrig - Trigger you want to initialize
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
     * Creates an CEvntStat object.
     * @param {string} fillStyle - Text color in hexadecimal
     * @param {string} title - Text corresponding to what the status is tracking
     */
    constructor(fillStyle, title)
    {
        /**
         * Text color in hexadecimal
         * @type {string}
         * @public
         */
        this.fillStyle = fillStyle;

        /**
         * Text corresponding to what the status is tracking
         * @type {string}
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
     * Creates an CEvntStat object.
     * @param {double} lineWidth - Stroke width in pixels
     * @param {string} strokeStyle - Stroke color in hexadecimal
     */
    constructor(fillStyle, title)
    {
        /**
         * Stroke width in pixels
         * @type {double}
         * @public
         */
        this.lineWidth = lineWidth;

        /**
         * Stroke color in hexadecimal
         * @type {string}
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
     * @param {int} pSequ - Event position to get data
     * @returns {int} a calculated data.
     */
    CalcRead(pSequ)
    {

    }

    /**
     * Saves a calculated value at position pSequ.
     * @param {int} pSequ - Event position to set data
     * @param {string} pData - Data to store
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
     * Creates an CEvntStat object.
     * @param {string} fillStyle - Stroke color in hexadecimal
     * @param {string} title - Stroke width in pixels
     * @param {int} duration - Stroke width in pixels
     */
    constructor(fillStyle, title)
    {
        /**
         * Stroke color in hexadecimal
         * @type {string}
         * @public
         */
        this.strokeStyle = strokeStyle;

        /**
         * Stroke width in pixels
         * @type {string}
         * @public
         */
        this.title = title;

        /**
         * Stroke width in pixels
         * @type {int}
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
         * @type {int}
         * @private
         */
        this.Time = 0;

        /**
         * Instrument ID
         * @type {int}
         * @private
         */
        this.Instrument = 0;

        /**
         * Enumerated event type in kEvent.Type (See manual for event types)
         * @type {int}
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
         * @type {int}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the trade
         * @type {int}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated event type in kEvent.Type (See manual for event types)
         * @type {int}
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
         * @type {int}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the bid
         * @type {int}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated bid type in kEvent.Bid.Type (See manual for event types)
         * @type {int}
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
         * @type {int}
         * @private
         */
        this.Price = -1;

        /**
         * Quantity of the bid
         * @type {int}
         * @private
         */
        this.Quantity = -1;

        /**
         * Enumerated ask type in kEvent.Ask.Type (See manual for event types)
         * @type {int}
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
 * This is a built in function which triggers when the script starts to get general script parameters, including the primary script symbol.
 */
export function onLoad()
{
    console.log("lmao");
}

/**
 * This is a built in function which triggers when the symbol is successfully loaded and the EOS and instrument data is ready.
 */
export function onOpen()
{

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
 * This is a built in function which triggers for each event in the pFeed stream.
 * @param {CEvntFeed} pFeed - Time in nanosecond with 56 bit precision
 * @param {int} pSequ - Amount of events within this sequence
 */
export function onEvent(pFeed, pSequ)
{

}

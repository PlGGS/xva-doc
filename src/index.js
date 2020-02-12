/**
 * Class representing all other event types. (See manual for enumerated types of events)
 */
export class Event {
    constructor() {
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
export class Trade extends Event {
    constructor() {
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
export class Bid extends Event {
    constructor() {
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
export class Ask extends Event {
    constructor() {
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

import { Base, BaseEvents } from "@chocolatelibui/core";


/** Base class for form elements for shared properties and methods*/
export abstract class Application<T extends BaseEvents = BaseEvents> extends Base<T> {
    /**Returns the name used to define the element*/
    static elementName() { return '@abstract@' }
    /**Returns the namespace override for the element*/
    static elementNameSpace() { return 'chocolatelibui-form'; }
    /**Returns the name override for the application*/
    static applicationName() { return 'app-application'; }

    constructor() {
        super();
    }

}
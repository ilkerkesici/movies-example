
/**
 * Util function class of the application
 */
class Utilities {
    /**
     * Check the given object is funtion
     * @param checkedObject is object which is checked.
     * @return a boolean
     */
    isFunction = (checkedObject: any): boolean => {
        return checkedObject &&
            (
                {}.toString.call(checkedObject) === '[object Function]' ||
                {}.toString.call(checkedObject) === '[object AsyncFunction]'
            );
    }

    /**
     * Get the year of the given text date
     * @param date is date as string (2020-10-05)
     */
    getYearFromStringDate = (date?: string): string => {
        if (!date) return 'Unknown';
        const splitedDate = date.split('-');
        return splitedDate[0];
    }

    /**
     * Uppercase the first latter the given string if it is a string
     * @param s is a string
     */
    capitalize = (s: string): string => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    /**
     * Convert run time to beauty string
     * @param minute is movie run time
     */
    minuteToHourAndMinuteString = (minute?: number | null): string => {
        if (!minute) return 'Unknown';
        const hour = Math.floor(minute / 60);
        const remainingMinute = minute % 60;
        return `${hour}h ${remainingMinute}m`;
    }
}

const Utils = new Utilities();

export default Utils;
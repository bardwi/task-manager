/** 
 * Normalize a possibly‐string date into a real Date object.
 * @param input A Date or an ISO-string
 */
function toDate(input?: string | Date): Date | undefined {
    if (!input) return undefined;
    return input instanceof Date ? input: new Date(input);
}

/**
 * Format a date (Date or ISO-string) as a localized date string.
 * @param input A Date or an ISO-string
 */

export const formatDate = (input?: string | Date): string => {
    const date = toDate(input);
    return date ? date.toLocaleDateString() : '';
}
/**
 * Check whether a date (Date or ISO-string) is strictly before now.
 * @param input A Date or an ISO-string
 */

export const isOverdue = (input? : string | Date ): boolean => {
    const date = toDate(input);
    if (!date) return false;
    return date.getTime() < Date.now();
 }
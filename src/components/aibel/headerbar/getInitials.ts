/**
 * Helper to get initials from name.
 * 1. If only a single name returns first character in uppercase
 * 2. If multiple names returns first character of first and last name in uppercase
 * 3. If no name returns empty string
 *
 * @param name to parse initials from
 */
export const getInitials = (name?: string) => {
    if (!name) return "";

    const allNames = name.trim().split(" ");

    if (allNames.length == 1) {
        return allNames[0].charAt(0).toUpperCase();
    }

    return `${allNames[0].charAt(0)}${allNames[allNames.length - 1].charAt(0)}`.toUpperCase();
};

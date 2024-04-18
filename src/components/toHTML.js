export const toHTML = (text) => {
    // Regular expression to match Markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    try {
        const htmlText = text?.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

        return htmlText;
    } catch (error) {
        console.log(text, error);
    }

    return text;
};

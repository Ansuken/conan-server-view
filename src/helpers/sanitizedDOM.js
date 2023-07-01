import DOMPurify from 'dompurify';
export const sanitizedDOM = (data) => ({
    __html: DOMPurify.sanitize(data)
});
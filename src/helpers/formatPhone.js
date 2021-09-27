export const formatPhone = (str) => {
    const cleanedStr = str.replace(/\D[^.]/g, "");
    return cleanedStr.slice(0, 3) + "-" + cleanedStr.slice(3, 6) + "-" + cleanedStr.slice(6);
}

export default formatPhone;
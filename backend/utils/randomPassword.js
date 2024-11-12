const generateRandomPassword = async (length, NumbersAndSpecialChars = true) => {
    let result = "";
    const characters = NumbersAndSpecialChars ? "ACDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#!"
                                        : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

module.exports = generateRandomPassword;
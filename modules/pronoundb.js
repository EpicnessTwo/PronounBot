const axios = require('axios');

async function getPronouns(userId) {
    try {
        const response = await axios.get(`https://pronoundb.org/api/v2/lookup?platform=discord&ids=${userId}`);
        return response.data[userId].sets.en.join('/');
    } catch (error) {
        console.error('Error fetching pronouns:', error);
        return null;
    }
}

module.exports = { getPronouns };

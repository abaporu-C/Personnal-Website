const axios = require('axios');

//

export default async function loadPosts() {
        const res = axios.get('https://api.medium.com/v1/me', {
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_MEDIUM_API_KEY}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Accept-Charset": "utf-8"
            }
        })

        console.log(res);
} 
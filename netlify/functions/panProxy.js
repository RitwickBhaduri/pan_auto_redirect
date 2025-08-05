
export async function handler(event, context) {
    const username = "9163925128";
    const token = "696ed8a1c3c13ab4a76f7ba1108cae58";
    const mobile_number = "9999999999";
    const orderid = "TTTEST" + Math.floor(1000 + Math.random() * 9000);

    const url = `https://connect.ekychub.in/v3/verification/pan_redirection?username=${username}&token=${token}&mobile_number=${mobile_number}&orderid=${orderid}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "Success" && data.redirect_url) {
            return {
                statusCode: 302,
                headers: {
                    Location: data.redirect_url
                },
                body: ""
            };
        }

        return {
            statusCode: 500,
            body: "API call failed"
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: "Error calling API"
        };
    }
}

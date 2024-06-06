const urlStatus = {};

export const handler = async (event) => {
  if (event.httpMethod === "GET") {
    const { url } = event.queryStringParameters;

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "URL is required" }),
      };
    }

    const statusInfo = urlStatus[url];

    if (!statusInfo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "URL not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(statusInfo),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};

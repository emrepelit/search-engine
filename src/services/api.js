//  https://help-search-api-prod.herokuapp.com/search This api endpoint is not working(404).
//  instead of this I used openverse public api endpoint
const API_URL = "https://api.openverse.org/v1";

export const fetchSearchResults = async (
  query,
  mediaType = "images",
  page = 1,
  pageSize = 5
) => {
  try {
    const response = await fetch(
      // I would build this URL in a more robust way, but for this example
      `${API_URL}/${mediaType}/?q=${encodeURIComponent(
        query
      )}&page=${page}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error(`Error in API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Error in API:", error);
    return [];
  }
};

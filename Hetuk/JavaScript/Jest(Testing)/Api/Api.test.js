import { apiCall } from "./Api";

describe("apiCall", () => {
  beforeEach(() => {
    global.fetch = jest.fn(); // Mock Fetch Globally
  });

  test("Should Return Data When Fetch Is Successful", async () => {
    const mockData = {
      message: "Hello World",
    };
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await apiCall("https://fakestoreapi.com/products");
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products"
    );
  });

  test("Should Handel Fetch Errors", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    global.fetch.mockRejectedValue(new Error("Network Error"));

    const result = await apiCall("https://fakestoreapi.com/products");
    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(new Error("Network Error"));

    consoleSpy.mockRestore();
  });
});

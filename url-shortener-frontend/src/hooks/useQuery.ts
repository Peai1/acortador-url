import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

interface MyShortUrl {
  id: string;
  shortUrl: string;
  originalUrl: string;
  createdDate: string;
  clickCount: number;
  username: string;
}

export const useFetchMyShortUrls = (token: string, onError: (error: unknown) => void) => {
  return useQuery({
    queryKey: ["my-short-urls"],
    queryFn: async () => {
      try {
        return await api.get("/api/urls/myurls", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        });
      } catch (error) {
        if (onError) {
          onError(error);
        }
        throw error;
      }
    },
    select: (data) => {
      const sortedData = (data.data as MyShortUrl[]).sort(
        (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );
      return sortedData;
      ;
    },
    staleTime: 5000,
  })
};

export const useFetchTotalClicks = (token: string, onError: (error: unknown) => void) => {
  return useQuery({
    queryKey: ["url-totalclick"],
    queryFn: async () => {
      try {
        return await api.get(
          "/api/urls/totalClicks?startDate=2024-01-01&endDate=2025-12-31",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
      } catch (error) {
        if (onError) {
          onError(error);
        }
        throw error;
      }
    },
    select: (data) => {
      // data.data =>
      //  {
      //       key : value
      //     "2024-01-01": 120,
      //     "2024-01-02": 95,
      //     "2024-01-03": 110,
      //   };
      const convertToArray = Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));
      return convertToArray;
    },
    staleTime: 5000,
  });
};

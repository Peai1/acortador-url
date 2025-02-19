import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

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

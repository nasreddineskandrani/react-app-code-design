import { mockConferences, mockSales } from "./mock-data";

function filterFakeResponse(data: any, startDate: Date, endDate: Date): any {
  const result = {
    ...data,
    data: data.data.filter((item: any) => {
      const d = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (start.getTime() <= d.getTime() && d.getTime() <= end.getTime()) {
        return true;
      }

      return false;
    })
  };
  return result;
}

function delay(timeout: any) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const getSales = (startDate: Date, endDate: Date) => {
  console.log("getSales - FAKE Backend API called", startDate, endDate);
  return delay(1001).then(() =>
    filterFakeResponse(mockSales, startDate, endDate)
  );
};

export const getConferences = (startDate: Date, endDate: Date) => {
  console.log("getConferences - FAKE Backend API called", startDate, endDate);
  return delay(1001).then(() =>
    filterFakeResponse(mockConferences, startDate, endDate)
  );
};

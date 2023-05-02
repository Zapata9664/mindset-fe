import axios from 'axios'

export const useGetAppointments = () => {

  const getAppointments = async (dateFilter: { month: number | null, year: number | null }): Promise<{ data: any[] }> => {
    return await axios.get(`http://localhost:3200/appointment/FindByMonthAndYear/${dateFilter.month}/${dateFilter.year}`);
  }
  return { getAppointments };
};

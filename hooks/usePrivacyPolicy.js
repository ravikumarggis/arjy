import { useState, useEffect, useMemo } from "react";
import axios from "axios";
const baseUrl = "https://stgapiv2.tarality.io/api/v1/";
const usePrivacyPolicy = (type) => {
  const [privacyList, setPrivacyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPrivacyPolicy = async () => {
      try {
        const response = await axios.get(`${baseUrl}user/staticList`);
        setPrivacyList(response?.data?.result || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPrivacyPolicy();
  }, []);

  const description = useMemo(() => {
    const item = privacyList.find((item) => item?.type === type);
    return item?.description;
  }, [privacyList, type]);

  return { description, loading, error };
};

export default usePrivacyPolicy;

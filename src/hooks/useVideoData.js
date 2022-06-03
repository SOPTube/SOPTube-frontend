import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { getMainVideoList, getRecommandVideoList } from '../lib/getVideoList';

export const useVideoData = ({ type, params }) => {
  const [status, setStatus] = useState('LOADING');
  const [data, setData] = useState();
  const [error, setError] = useState();
  const changeStatus = (currentStatus) => {
    switch (currentStatus) {
      case 'LOADING':
        flushSync(() => setStatus('LOADING'));
        break;
      case 'ERROR':
        flushSync(() => setStatus('ERROR'));
        break;
      default:
        flushSync(() => setStatus('COMPLETE'));
        break;
    }
  };
  const getRecommendVideoData = async () => {
    changeStatus('LOADING');
    try {
      const data = await getRecommandVideoList();
      setData(data?.data?.data);
      changeStatus('COMPLETE');
    } catch (e) {
      changeStatus('ERROR');
      setError(e);
    }
  };

  const getMainCategoryVideoData = async (params) => {
    changeStatus('LOADING');
    try {
      const data = await getMainVideoList(params);
      setData(data?.data?.data);
      changeStatus('COMPLETE');
    } catch (e) {
      changeStatus('ERROR');
      setError(e);
    }
  };

  useEffect(() => {
    switch (type) {
      case 'recommendedVideo':
        getRecommendVideoData();
        break;
      default:
        getMainCategoryVideoData(params);
        break;
    }
  }, []);

  return { status, data, isLoading: status === 'LOADING', error };
};

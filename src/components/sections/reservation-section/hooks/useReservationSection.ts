import { useEffect, useState } from 'react';
import { ModelOnSubmit } from '../types/modelReservationForm';

const useReservationSection = () => {
  const [isReservationSend, setIsReservationSend] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState<ModelOnSubmit>();

  useEffect(() => {
    if (isReservationSend === true) {
      setTimeout(() => {
        setIsReservationSend(false);
      }, 16000);
    }
  }, [isReservationSend]);

  const onSubmit = (data: ModelOnSubmit) => {
    console.log(data);
    setDataForm(data);
    setIsReservationSend(true);
  };

  return {
    isReservationSend,
    setIsReservationSend,
    dataForm,
    setDataForm,
    onSubmit
  };
};

export default useReservationSection;

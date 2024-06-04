import { SubmitHandler } from 'react-hook-form';

export type ModelReservationForm = {
  onSubmit: SubmitHandler<ModelOnSubmit>;
};

export type ModelOnSubmit = {
  name: string;
  email: string;
  date: string;
  time: string;
  people: string;
};

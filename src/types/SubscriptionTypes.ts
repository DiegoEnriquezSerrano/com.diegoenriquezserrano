import { UserType } from "./UserTypes";

export type SubscriptionType = {
  activated_date: string;
  active: boolean;
  created_on: string;
  email: string;
  name: string;
  user: UserType;
};

export type CreateSubscriptionType = {
  challenge_answer: string;
  email: string;
  name: string;
  signed_answer: string;
};

export type SubscriptionsResponseType = {
  json: SubscriptionType[];
  response: Response;
};

export type SubscriptionResponseType = {
  json: SubscriptionType;
  response: Response;
};

import { Request } from "express";
import { Params } from "express-serve-static-core";

export const makeMockRequest = ({
  params,
  query,
}: { params?: Params; query?: Params } = {}) => {
  const request = {
    params: params || {},
    query: query || {},
  } as unknown;

  return request as Request;
};

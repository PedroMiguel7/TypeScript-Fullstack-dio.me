import { EntityManager } from "typeorm";

interface mockManagerArgs {
  saveReturn?: object | [object];
  findOneReturn?: object;
  findReturn?: [object];
  deleteReturn?: void;
}

export const getMockEntityManager = async ({
  saveReturn = undefined,
  findOneReturn = undefined,
  findReturn = undefined,
  deleteReturn = undefined,
}: mockManagerArgs = {}): Promise<EntityManager> => {
  const manager: Partial<EntityManager> = {};
  manager.save = jest
    .fn()
    .mockImplementation(() => Promise.resolve(saveReturn));

  manager.findOne = jest
    .fn()
    .mockImplementation(() => Promise.resolve(findOneReturn));

  manager.find = jest
    .fn()
    .mockImplementation(() => Promise.resolve([findReturn]));

  manager.delete = jest
    .fn()
    .mockImplementation(() => Promise.resolve(deleteReturn));

  return manager as EntityManager;
};

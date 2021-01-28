import { environment } from "../../../environments/environment";

const apiPath = environment.apiPath;

export const APIConstant = {
    basePath: apiPath,

    candles: `${apiPath}/markets/exchange/prices`,
};

export const PublicAPI = [];

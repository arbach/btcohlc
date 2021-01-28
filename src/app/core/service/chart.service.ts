import { Injectable } from "@angular/core";
import { CandleResponse } from "@app-models";
import { Observable } from "rxjs";
import { APIConstant } from "../constant";
import { CommonUtility } from "../utilities/common";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: "root",
})
export class ChartService {

    constructor(private baseService: BaseService) {
    }

    getData(params: Record<string, string | number>): Observable<CandleResponse> {
        const query = CommonUtility.convertObjectToParams(params);
        return this.baseService.get(`${APIConstant.candles}?${query}`);
    }

}

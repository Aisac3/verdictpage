import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getSuggestions(term: string): Observable<any[]> {
    const filteredSuggestions = DATA.search
    .filter(item => item.tag == 'Stock')
    .filter(item =>
      item.Company.toLowerCase().includes(term.toLowerCase())
    );
    return of(filteredSuggestions);
  }

  getData(id: number): Observable<any> {
      const companyData = DATA.data.find(item => item.data.stock_details.sid === id);
      console.log(companyData)
    return of(companyData);
    
  }
}
export interface PriceInfo {
  vol_msg: string;
  mcap_class: string;
  no_of_shares: number;
  div_yeild: number;
  net_profit: number;
  pe_ratio: number;
  ind_pe_ratio: string;
  deb_equity: number;
  price_to_book: number;
  net_npa_perc: string;
  gross_npa_perc: string;
  p_adj_bv: string;
  ind_p_adj_bv: string;
  stock_status: string;
  is_traded: number;
  mcap: number;
  roe: number;
  car: string;
  roa: string;
  net_sale: number;
  sector_chgp: number;
  index_label: string;
  '5D_avg_vol': number;
  open_price: number;
  cmp: number;
  day_high: number;
  day_low: number;
  vol: number;
  dt: string;
  val_trd: number;
  bid_price: number;
  bid_qty: number;
  offer_price: number;
  offer_qty: number;
  mcap_grade: string;
  '52wk_low_dt': string;
  '52wk_high_dt': string;
  altm_high: number;
  altm_low_dt: string;
  altm_high_dt: string;
  altm_low: number;
  wk_high52: number;
  wk_low52: number;
}

export interface CoverSummary {
  big_txt: string;
  small_txt: string;
}

export interface CoverPageData {
  cover_headline: string;
  cover_summary: CoverSummary[];
}

export interface StockDetails {
  sid: number;
  sname: string;
  short_name: string;
  scripcode: string;
  symbol: string;
  isin: string;
  status: string;
  ind_code: number;
  ind_name: string;
  sublisting: string;
  alias: string;
  fincode: number;
  fv: number;
  header_msg: string;
  mcap_type: number;
  inc_mnth: string;
  inc_yr: string;
  is_seasonal: string;
  acc_ind_name: string;
  hse_code: string;
  amfi_mcapsizerank: string;
  jan31_high_2018: {
    nse: number;
    bse: number;
  };
  updated_at: string;
  nsedt: string;
  bsedt: string;
}

export interface CompanyData {
  Company: string;
  code: number;
  message: string;
  data: {
    price_info: PriceInfo;
    cover_page_data: CoverPageData;
    score_text: string;
    cover_clr: string;
    stock_details: StockDetails;
    block_page: number;
    remaining_views: number;
    total_views: number;
    show_fallstock: string;
  };
}

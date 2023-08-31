import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WineryResponse } from '../../models/WineryResponse';
import { WineResponse } from '../../models/WineResponse';
import { WineNoteResponse } from '../../models/WineNoteResponse';
import { WineRatingResponse } from '../../models/WineRatingResponse';
import { WineryRequest } from '../../models/WineryRequest';
import { WineRequest } from '../../models/WineRequest';
import { WineRatingRequest } from '../../models/WineRatingRequest';
import { WineNoteRequest } from '../../models/WineNoteRequest';
import { WineDisplay } from '../../models/WineDisplay';
import { WineImageResponse } from '../../models/WineImageResponse';
import { WineRatingEditRequest } from '../../models/WineRatingEditRequest';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private readonly API = 'https://lordgasmic.com/api';
  private readonly WINERIES = '/v1/wineries/';
  private readonly WINES = '/v1/wines/';
  private readonly WINE_NOTES = '/v1/wineNotes/';
  private readonly WINE_RATING = '/v1/wineRating/';
  private readonly WINE_RATING_EDIT = '/v1/wineRating/edit';
  private readonly WINE_IMAGES = '/v1/wineImages';

  constructor(private http: HttpClient) { }

  getWineries(): Observable<Array<WineryResponse>> {
    return this.http.get<Array<WineryResponse>>(this.API + this.WINERIES);
  }

  getWinery(id: number): Observable<WineryResponse> {
    return this.http.get<WineryResponse>(this.API + this.WINERIES + id);
  }

  getAllWines(): Observable<Array<WineResponse>> {
    return this.http.get<Array<WineResponse>>(this.API + this.WINES);
  }

  getWinesByWinery(id: number): Observable<Array<WineDisplay>> {
    return this.http.get<Array<WineDisplay>>(this.API + this.WINES + `?wineryId=${id}`);
  }

  getWineById(id: number): Observable<WineResponse> {
    return this.http.get<WineResponse>(this.API + this.WINES + `?wineId=${id}`);
  }

  getAllWineNotes(): Observable<WineNoteResponse> {
    return this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES);
  }

  getWineNotesByUser(user: string): Observable<WineNoteResponse> {
    return this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES + `?user=${user}`);
  }

  getWineNotesByWineId(wineId: number): Observable<WineNoteResponse> {
    return this.http.get<WineNoteResponse>(this.API + this.WINE_NOTES + `?wineId=${wineId}`);
  }

  getAllWineRatings(): Observable<Array<WineRatingResponse>> {
    return this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING);
  }

  getWineRatingsByUser(user: string): Observable<Array<WineRatingResponse>> {
    return this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING + `?user=${user}`);
  }

  getWineRatingByWineId(wineId: number): Observable<Array<WineRatingResponse>> {
    return this.http.get<Array<WineRatingResponse>>(this.API + this.WINE_RATING + `?wineId=${wineId}`);
  }

  getWineRatingsByUsersForWineIds(users: string[], wineIds: number[]): Observable<Array<WineRatingResponse>> {
    return this.http.post<Array<WineRatingResponse>>(this.API + this.WINE_RATING, { users, wineIds });
  }

  addWinery(wineryRequest: WineryRequest): Observable<WineryResponse> {
    return this.http.put<WineryResponse>(this.API + this.WINERIES, wineryRequest);
  }

  addWine(wineRequest: WineRequest): Observable<WineResponse> {
    return this.http.put<WineResponse>(this.API + this.WINES, wineRequest);
  }

  addWineRating(wineRatingRequest: WineRatingRequest): Observable<WineRatingResponse> {
    return this.http.put<WineRatingResponse>(this.API + this.WINE_RATING, wineRatingRequest);
  }

  editWineRating(request: WineRatingEditRequest): Observable<WineRatingResponse> {
    return this.http.put<WineRatingResponse>(this.API + this.WINE_RATING_EDIT, request);
  }

  addWineNotes(wineNotesRequest: WineNoteRequest): Observable<WineNoteResponse> {
    return this.http.put<WineNoteResponse>(this.API + this.WINE_NOTES, wineNotesRequest);
  }

  addWineImage(uploadImageData: FormData): Observable<WineImageResponse> {
    return this.http.put<WineImageResponse>(this.API + this.WINE_IMAGES, uploadImageData);
  }

  getWineImages(wineId: number): Observable<WineImageResponse> {
    return this.http.get<WineImageResponse>(this.API + this.WINE_IMAGES + `?wineId=${wineId}`);
  }
}

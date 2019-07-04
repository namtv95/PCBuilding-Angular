import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {
  readonly ACCESS_KEY_ID: string = 'AKIA47VZCDI7TPOCR2ON';
  readonly SERCRET_ACCESS_KEY: string = 'UpRLOfoAOA5T4OsAW5TjD9q7K27llZWyzSdqsul3';
  readonly REGION: string = 'ap-southeast-1';
  readonly BUCKET_NAME: string = 'pc-building-bucket';
  readonly DEFAULT_SAVE_FOLDER: string = 'hardware_setting/';
  readonly HARDWARE_SETTING_FILE: string = 'hardware_setting.json';
  readonly SIGNED_URL_EXPIRE_SECONDS: number = 60 * 5; // your expiry time in seconds.
  readonly DEFAULT_SETTINGS_FILE: string = './assets/default_settings.json';
}

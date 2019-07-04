import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { Config } from '../config';


@Injectable({
  providedIn: 'root'
})
export class FileutilService {
  bucket: S3 = null;

  constructor(
    private config: Config
  ) {
    this.bucket = new S3(
      {
        accessKeyId: this.config.ACCESS_KEY_ID,
        secretAccessKey: this.config.SERCRET_ACCESS_KEY,
        region: this.config.REGION
      }
    );
  }

  /**
   * Load file to aws s3 server
   * @param fileUrl file url
   * @param dataCallbackFunction success callback function
   * @param errorCallbackFunction failed callback function
   */
  public loadFile(fileUrl: string, dataCallbackFunction: (data: any) => void, errorCallbackFunction: (error: any) => void): void {
    const params: any = {
      Bucket: this.config.BUCKET_NAME,
      Key: fileUrl
    };

    this.bucket.getObject(params, (error, data) => {
      if (error != null) {
        errorCallbackFunction(error);
      } else {
        dataCallbackFunction(data.Body);
      }
    });
  }

  /**
   * Upload file to aws s3 server
   * @param fileData file data
   * @param fileName  file name
   * @param fileFolder  file save folder
   */
  public uploadFile(fileData: any, fileName: string, fileFolder: string = this.config.DEFAULT_SAVE_FOLDER): void {
    const params: any = {
      Bucket: this.config.BUCKET_NAME,
      Key: fileFolder + fileName,
      Body: fileData
    };

    this.bucket.upload(params, (error: any, data: any) => {
      if (error) {
        console.log('There was an error uploading your file: ', error);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}

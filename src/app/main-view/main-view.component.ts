import { Component, OnInit, ViewChild } from '@angular/core';
import { HardWare } from 'src/model/hardware';
import { FileutilService } from '../common/file-util/fileutil.service';
import { Config } from '../common/config';
import { Computer } from 'src/model/computer';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  /**
   * Base hardware list
   */
  hardwareList: Array<HardWare> = [];
  /**
   * Hardware list for display in view
   */
  hardwareDisplayList: Array<HardWare> = [];
  displayTotalPrice: string = '';


  constructor(
    private fileUtil: FileutilService,
    private config: Config,
    private settingPopup: Popup
  ) {
    this.settingPopup.options = {
      header: 'Settings Computer',
      color: '#02133f', // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: 'Save', // The text on your confirm button
      cancleBtnContent: 'Cancel', // the text on your cancel button
      confirmBtnClass: 'btn btn-primary ml-2', // your class for styling the confirm button
      cancleBtnClass: 'btn btn-danger', // you class for styling the cancel button
      animation: 'fadeInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
  }

  ngOnInit() {
    this.loadHardwareSetting();
  }

  /**
   * Open setting hardware dialog
   */
  public openSettingHardwareDialog(): void {
    this.settingPopup.show(this.settingPopup.options);
  }

  /**
   * Update setting to aws server
   */
  public updateSettingHanlder(): void {
    this.fileUtil.uploadFile(JSON.stringify(this.hardwareList), this.config.HARDWARE_SETTING_FILE);
    this.convertViewHardwareSetting(this.hardwareList);
    this.settingPopup.hide();
  }

  /**
   * Get hardware setting from aws
   */
  private loadHardwareSetting(): void {
    if (this.hardwareDisplayList.length === 0) {
      const fileUrl = this.config.DEFAULT_SAVE_FOLDER + this.config.HARDWARE_SETTING_FILE;
      this.fileUtil.loadFile(fileUrl, this.settingsDataResponseHandler, this.errorDataResponseHandler);
    }
  }

  /**
   * Get hardware setting handler
   */
  private settingsDataResponseHandler = (settingData: any): void => {
    const settingDataString = String(settingData);
    if (settingDataString) {
      const settings: Computer = new Computer();
      settings.computer = JSON.parse(settingDataString);
      if (settings.computer) {
        this.convertViewHardwareSetting(settings.computer);
      }
    }
  }

  /**
   * Error handler
   * Upload default setting to aws s3
   */
  private errorDataResponseHandler = (error: any): void => {
    if (error.code === 'NoSuchKey') {
      const defaultSetting: Computer = new Computer();
      this.fileUtil.uploadFile(JSON.stringify(defaultSetting.computer), this.config.HARDWARE_SETTING_FILE);
      this.convertViewHardwareSetting(defaultSetting.computer);
    }
  }

  /**
   * Convert setting to view
   * @param setting setting list
   */
  private convertViewHardwareSetting(setting: Array<HardWare>): void {
    this.hardwareList = setting;
    this.hardwareDisplayList = [...this.hardwareList];
    this.convertPrice();
  }

  /**
   * Convert price of hardware for display
   */
  private convertPrice(): void {
    if (this.hardwareDisplayList.length === 0) {
      return;
    }

    let totalPrice: number = 0;
    this.hardwareDisplayList.map(item => {
      if (Number(item.oldPrice) === Number(item.currentPrice)) {
        item.displayOldPrice = '';
      } else {
        item.displayOldPrice = this.formatPrice(item.oldPrice);
      }

      item.displayCurrentPrice = this.formatPrice(item.currentPrice);

      if (item.countPrice) {
        totalPrice += Number(item.currentPrice);
      }

      return item;
    });

    this.displayTotalPrice = this.formatPrice(totalPrice);
  }

  /**
   * Format price to vnd
   */
  private formatPrice(price: number) {
    return Number(price).toLocaleString() + ' đ';
  }
}

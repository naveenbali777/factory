import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { InpectionDataService } from '../../services/inpection-data.service';


@Component({
  selector: 'app-inspection-data',
  templateUrl: './inspection-data.html',
  styleUrls: ['./inspection-data.css'],
  providers: [InpectionDataService]
})
export class InspectionDataComponent implements OnInit {

  csvProductData;
  csvDefectsData;
  fileCheck = {productFile: false, defectFile: false};
  handleError: any;  

  constructor(
      private router: Router,
      private inpectionDataService: InpectionDataService
    ) { }

  ngOnInit() {
    this.showData();
  }

  showData(){
    this.inpectionDataService.productData().subscribe(
      response => { 
        this.showProductData(response);
      }
    );

    this.inpectionDataService.defectData().subscribe(
      response => {
        this.showDefectData(response);
      }
    );
  }

  showProductData(responseProData){
    this.csvProductData = responseProData.data;
    for (let i = 0; i < this.csvProductData.length; i++) { 
      if(i==0){
        this.csvProductData[i].status = true ;
      }else{
        this.csvProductData[i].status = false ;
      }                 
    }
  }

  showDefectData(responseDefData){ 
    this.csvDefectsData = responseDefData.data;
    for (let j = 0; j < this.csvDefectsData.length; j++) { 
      if(j==0){
        this.csvDefectsData[j].status = true;
      }else{
        this.csvDefectsData[j].status = false ;              
      }                    
    }
  }

  download(downloadOpt){
    this.inpectionDataService.fileDownload(downloadOpt);
  }  

  onChange(files,checkUpload){    
    if(files) {
      this.inpectionDataService.postWithFile('dss/v1/'+checkUpload+'/import',files,checkUpload).then(result => {
        if(checkUpload == 'products'){
          this.fileCheck.productFile= false;
          this.showProductData(result);
        }

        if(checkUpload == 'defects'){
          this.fileCheck.defectFile= false;
          this.showDefectData(result);
        }

      });

    }
  }

 

}
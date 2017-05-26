import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Map, Marker, GeoJSONSource, LngLatBounds} from 'mapbox-gl';


let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyaXBhbHMiLCJhIjoiY2l5ZHp6M21xMDBjZTMzcDE4am40eXg3eSJ9._7tmAS90MGXHKL40WYju8w';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, AfterViewInit {

    private map: Map;
    private userLocation: number[];
    mapReadyPromise: Promise<boolean>;

    public deflectLabels: string[] = ['Fail Inspections due to Critical Deflects', 'Fail Inspections due to Major Deflects', 'Fail Inspections due to Minor Deflects', 'No deflect'];
    public deflectData: number[] = [0.5, 20, 53.67, 35.83];
    public deflectColors:Array<any> = [
        {
            backgroundColor: ['#ee1b22','#dece45','#f5861d','#2a7191'],
            borderWidth:0
        },
    ];

    public measurementLabels: string[] = ['In Tolerance Measurements', 'Major Tolerance Variations', 'Minor Tolerance Issues'];
    public measurementData: number[] = [11, 4, 85];


    public measurementColors:Array<any> = [
        {
            backgroundColor: ['#f5861d','#dece45','#2a7191'],
            borderWidth:0
        },
    ];

    public pieChartType: string = 'pie';
    public pieChartOptions: any = {
        responsive: true,
        legend: {
            position:"bottom",
            labels:{
                boxWidth:12
            }
        },
    };

    public countries = require ("../../assets/sample-data/country-iso3166.json");

    constructor() {

    }

    ngAfterViewInit() {
        this.mapReadyPromise = this.getCurrentUserLocation();
    }

    private initMap(center?: number[]) {
        return new Promise((resolve, reject) => {
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/bright-v9',
                zoom: 9,
                center: center || [0, 0]
            });
            this.map.on('load', () => {
                resolve(true);
            });
        });
    }

    setMapCenter(center: number[], zoom?: number) {
        this.map.flyTo({
            center: center,
            speed: 2.5,
            zoom: zoom || 7
        });
    }

    private getCurrentUserLocation() {
        return new Promise((resolve, reject) => {
            if (window.navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.userLocation = [position.coords.longitude, position.coords.latitude];
                    let center = this.calculateCenterLocation();
                    resolve(this.initMap(center));
                }, (e) => {
                    resolve(this.initMap());
                });
            } else {
                resolve(this.initMap());
            }
        });
    }


    private calculateCenterLocation() {


        let lstLongitudes = [this.userLocation[0]];
        let lstLatitudes = [this.userLocation[1]];

        lstLongitudes.sort();
        lstLatitudes.sort();

        let sw = new mapboxgl.LngLat(lstLongitudes[0], lstLatitudes[lstLatitudes.length - 1]);
        let ne = new mapboxgl.LngLat(lstLongitudes[lstLongitudes.length - 1], lstLatitudes[0]);
        let llb: LngLatBounds = new mapboxgl.LngLatBounds(sw, ne);
        return llb.getCenter().toArray();
    }


    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public clearFilter(){
        console.log("clear filter")
    }

    ngOnInit() {
    }

}

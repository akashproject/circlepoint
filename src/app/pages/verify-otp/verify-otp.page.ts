import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { Router, NavigationExtras } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.page.html",
  styleUrls: ["./verify-otp.page.scss"],
})
export class VerifyOtpPage implements OnInit {
  constructor(
    private router: Router,
    public util: UtilService,
    private navCtrl: NavController,
    private api: ApiService
  ) {}

  ngOnInit() {}
}

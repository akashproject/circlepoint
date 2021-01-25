/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { Router, NavigationExtras } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: any = "";
  mobile: any = "";
  //password: any = '';
  loggedIn: boolean;
  showOtp = false;
  otp_value: any = "";
  hidden_otp_value: any = "";
  constructor(
    private router: Router,
    public util: UtilService,
    private navCtrl: NavController,
    private api: ApiService
  ) {}

  ngOnInit() {}

  openMenu() {
    this.util.openMenu();
  }
  sendOtp(resend) {
    if (!this.mobile) {
      this.util.showToast(
        this.util.getString("Mobile number are required"),
        "dark",
        "bottom"
      );
      return false;
    }
    let mobile = new String(this.mobile);
    console.log(mobile);
    console.log("Length " + mobile.length);
    if (mobile.length != 10) {
      this.util.showToast(
        this.util.getString("invalid Mobile number"),
        "dark",
        "bottom"
      );
      return false;
    }

    const param = {
      mobile: this.mobile,
    };

    this.api.post("users/sendLoginOtp", param).subscribe(
      (data: any) => {
        if (data && data.status === 200) {
          if (!resend) {
            this.showOtp = true;
          }
          this.hidden_otp_value = data.data.otp_value;
        } else if (data && data.status === 500) {
          console.log("500");
          this.util.errorToast(data.data.message);
        } else {
          console.log("wrong");
          this.util.errorToast(this.util.getString("Something went wrong"));
        }
      },
      (error) => {
        console.log(error);
        this.loggedIn = false;
        this.util.errorToast(this.util.getString("Something went wrong"));
      }
    );
  }

  verifyOtp() {
    if (this.hidden_otp_value == this.otp_value) {
      this.login();
    } else {
      this.util.errorToast("invalid one time password");
    }
  }

  login() {
    console.log("login");
    this.loggedIn = true;
    const param = {
      mobile: this.mobile,
    };
    this.api.post("users/login", param).subscribe(
      (data: any) => {
        this.loggedIn = false;
        console.log(data);
        if (data && data.status === 200) {
          if (data && data.data && data.data.type === "user") {
            if (data.data.status === "1") {
              localStorage.setItem("uid", data.data.id);
              this.util.userInfo = data.data;
              const fcm = localStorage.getItem("fcm");
              if (fcm && fcm !== null && fcm !== "null") {
                const updateParam = {
                  id: data.data.id,
                  fcm_token: fcm,
                };
                this.api.post("users/edit_profile", updateParam).subscribe(
                  (data: any) => {
                    console.log("user info=>", data);
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              }

              const favParam = {
                id: data.data.id,
              };
              this.api.post("favourite/getByUid", favParam).subscribe(
                (data: any) => {
                  console.log("fav data", data);
                  if (data && data.status === 200 && data.data.length > 0) {
                    this.util.haveFav = true;
                    try {
                      this.util.favIds = data.data[0].ids.split(",");
                    } catch (error) {
                      console.log("eroor", error);
                    }
                  } else {
                    this.util.haveFav = false;
                  }
                },
                (error) => {
                  this.util.haveFav = false;
                  console.log("fav error", error);
                }
              );

              this.navCtrl.navigateRoot([""]);
            } else {
              console.log("not valid");
              Swal.fire({
                title: this.util.getString("Error"),
                text: this.util.getString(
                  "Your are blocked please contact administrator"
                ),
                icon: "error",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: this.util.getString("Need Help?"),
                backdrop: false,
                background: "white",
              }).then((status) => {
                if (status && status.value) {
                  // localStorage.setItem('helpId', data.data.id);
                  // this.router.navigate(['inbox']);
                  const inboxParam: NavigationExtras = {
                    queryParams: {
                      id: 0,
                      name: "Support",
                      uid: data.data.id,
                    },
                  };
                  this.router.navigate(["inbox"], inboxParam);
                }
              });
            }
          } else {
            this.util.errorToast(this.util.getString("Not valid user"));
            this.mobile = "";
          }
        } else if (data && data.status === 500) {
          this.util.errorToast(data.data.message);
        } else {
          this.util.errorToast(this.util.getString("Something went wrong"));
        }
      },
      (error) => {
        console.log(error);
        this.loggedIn = false;
        this.util.errorToast(this.util.getString("Something went wrong"));
      }
    );
  }

  ionViewDidEnter() {
    console.log("enter");
  }

  create() {
    this.router.navigate(["register"]);
  }

  reset() {
    this.router.navigate(["reset-password"]);
  }
}

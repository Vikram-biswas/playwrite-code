const { test, expect } = require('@playwright/test');

class pageObject {
    constructor(page){
        this.page = page;
    };
   
    async launchPage(){
        await this.page.goto("https://app.rationarium.com/");
      }

   async getSignInLink(){
      await this.page.locator("(//*[contains(text(),'Sign In')])[1]").click();
    }

    async getUserName(username){
        await this.page.locator("//input[@formcontrolname='username']").type(username);
    }

    async IsUserNameVisible(){
        await this.page.locator("//input[@formcontrolname='username']");
    }

    async getPassword(password){
        await this.page.locator("//input[@formcontrolname='password']").type(password);
    }

    async getSignButton(){
        await this.page.locator("(//button[contains(text(),'Sign In')])[2]").click();
    }

    async isAlertPop(){
        await this.page.locator("//span[contains(text(),'Click to Stay here')]");
    }

    async errorPassword(){
        await page.locator("//span[@class='mat-simple-snack-bar-content']");
    }


    
    async closeBrowser(){
        this.page
    }
    
}
module.exports = pageObject;

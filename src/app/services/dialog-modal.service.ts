import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogComponent } from '../directives/modal-dialog/modal-dialog.component';
import { PromoDetails } from '../contents/models/promos';

@Injectable({
    providedIn: 'root'
})
export class DialogModalService {
    public dialogRef: MatDialogRef<ModalDialogComponent> | undefined;

    constructor(public dialog: MatDialog) {}

    private openDialog(modalData: any) {
        this.dialogRef = this.dialog.open(ModalDialogComponent, {
            disableClose: true,
            data: modalData,
            panelClass: 'my-panel',
            hasBackdrop: false
        });

        // Prevent memory leaks by unsubscribing after execution
        this.dialogRef.afterClosed().subscribe(() => {
            this.dialogRef = undefined;
        });
    }

    addDynamicDialogComponentBase(_titleText: string, _bodyText: string) {
        this.openDialog({ headerText: _titleText, bodyText: _bodyText });
    }

    addDynamicDialogWithImageUrl(_titleText: string, _bodyText: string, _imageUrl: string) {
        this.openDialog({
            headerText: '',
            bodyText: '',
            bodyHtmlText: _bodyText,
            bodyHeadingText: _titleText,
            footerBodyText: '',
            headerImageUrl: _imageUrl
        });
    }

    addDynamicDialogWithImageUrlAndFooter(_titleText: string, _bodyText: string, _imageUrl: string, _footerText: string) {
        this.openDialog({
            headerText: '',
            bodyText: '',
            bodyHtmlText: _bodyText,
            bodyHeadingText: _titleText,
            footerBodyText: _footerText,
            headerImageUrl: _imageUrl
        });
    }

    openPromoCalendar(promo: any) {
        this.addDynamicDialogWithImageUrlAndFooter(
            '',
            `<p>${promo.offer.description}</p><p>${promo.offer.details}</p>`,
            promo.offer.modalBackgroundImage,
            ''
        );
    }

    openPromoIdDialog(promoId: number) {
        const promoMap: { [key: number]: PromoDetails } = {
            1: promo1,
            2: promo2,
            3: promo3,
            4: promo4,
            5: promo5,
            6: promo6,
            7: promo7,
            8: promo8,
            9: promo9
        };

        const promo = promoMap[promoId];
        if (promo) {
            this.addDynamicDialogWithImageUrlAndFooter(
                promo.heading,
                promo.bodyInnerHtmlText,
                promo.headerImageUrl,
                promo.footerInnerHtmlText
            );
        }
    }
}

// Storing promos in an object instead of global variables
const promo1: PromoDetails = new PromoDetails(
    'Welcome Bonus',
    `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
    `<em> <h6 style="color: green;">Welcome Bonus Promotional Terms:</h6> <em/>
     <ol style="margin-left: 20px; color: darkblue;">
       <li>Welcome bonus is available for new players on their first deposit.</li>
       <li>Code WELCOME1 must be redeemed...</li>
     </ol>`,
    'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
  );
  

const promo2: PromoDetails = new PromoDetails(
    'Welcome Bonus',
    `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
    `<em> <h6 style="color: green;">Welcome Bonus Promotional Terms:</h6> <em/>
     <ol style="margin-left: 20px; color: darkblue;">
       <li>Welcome bonus is available for new players on their first deposit.</li>
       <li>Code WELCOME1 must be redeemed...</li>
     </ol>`,
    'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
);

var promo3: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

var promo4: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

var promo5: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

var promo6: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

var promo7: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

var promo8: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}


var promo9: PromoDetails = {
    heading: "Daily Cashback",
    bodyInnerHtmlText:     `<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula enim ut libero posuere, vel ultricies nulla laoreet. Nulla facilisi. Sed ut sapien vel libero consequat facilisis. Etiam euismod, nunc eget condimentum dignissim, libero lorem sollicitudin augue, ac vulputate purus felis non odio. Fusce vulputate dui quis mi bibendum mollis. Nulla sit amet velit quis lorem feugiat tincidunt. Proin cursus est at sapien luctus, at vulputate urna laoreet.</p>`,
  footerInnerHtmlText: ` <ol style="margin-left: 20px; color: darkblue;">
  <li>Welcome bonus is available for new players on their first deposit.</li>
  <li>Code WELCOME1 must be redeemed...</li>
</ol>`,
  headerImageUrl: 'https://t3.ftcdn.net/jpg/05/71/90/86/240_F_571908639_H44DawLjikT8GMHx0ESX9iFqO2ohDKvu.jpg'
}

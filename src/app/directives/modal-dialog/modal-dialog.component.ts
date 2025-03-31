import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderService } from '../../services/loader.service';
import { UtilityDataService } from '../../services/utility-data.service';
import { ModalDialogDetails } from '../../contents/models/modal-dialog-details';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  imports: [
    CommonModule, // Ensure CommonModule is imported for directives like *ngIf
    // other modules
  ],
})
export class ModalDialogComponent implements OnInit, AfterViewInit {
  
  // Injecting dialog data through MAT_DIALOG_DATA
  dialogData: ModalDialogDetails;

  // Booleans to control content visibility
  existsHeaderImage = false;
  existsFooterText = false;
  existsBodyHtml = false;

  @ViewChild('myDialogLoader') loader!: LoaderComponent; // Reference to the loader component

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private utilityDataService: UtilityDataService,
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // The injected data from the dialog
    private elementRef: ElementRef,
    private loaderService: LoaderService
  ) {
    this.dialogData = data; // Initialize dialogData with the injected data
  }

  ngAfterViewInit(): void {
    // Adding event listeners after view is initialized
    const signup = this.elementRef.nativeElement.querySelector('#signup');
    const login = this.elementRef.nativeElement.querySelector('#login');

    if (signup) {
      signup.addEventListener('click', () => this.LoadRedirectUrls('signup'));
    }

    if (login) {
      login.addEventListener('click', () => this.LoadRedirectUrls('login'));
    }

    // Set loading state to true when view initializes
    if (this.loader) {
      this.loader.loading = true;
    }
  }

  ngOnInit(): void {
    // Check for header image, footer text, and body HTML text availability
    if (this.dialogData?.headerImageUrl) {
      this.existsHeaderImage = true;
    }

    if (this.dialogData?.footerBodyText) {
      this.existsFooterText = true;
    }

    if (this.dialogData?.bodyHtmlText) {
      this.existsBodyHtml = true;
    }
  }

  closeLoader(): void {
    if (this.loader) {
      this.loader.loading = false;  // Set loading to false when closing loader
    }
  }

  LoadRedirectUrls(mode: string): void {
    this.document.location.href = this.utilityDataService.getLobbyRedirectUrl(mode);
  }

  // Add this method to close the modal
  closeModal(): void {
    this.dialogRef.close(); // This will close the dialog
  }
}

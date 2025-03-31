export class ModalDialogDetails {
    constructor(
        public headerText: string,
        public bodyText: string,
        public bodyHtmlText: string, // Fixed casing issue
        public bodyHeadingText?: string,
        public footerBodyText?: string,
        public headerImageUrl?: string
    ) {}
}


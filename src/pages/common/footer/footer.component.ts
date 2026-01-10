import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucideAngularModule, MapPin, X, CheckCircle, XCircle } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [FormsModule, LucideAngularModule],
})
export class FooterComponent implements OnInit {
  // Random location coordinates (change later)
  mapLat = 27.166894;
  mapLng = 88.477358;

  icon = {
    mapPin: MapPin,
    x: X,
    checkCircle: CheckCircle,
    xCircle: XCircle,
  };

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Google Maps embed URL using coordinates (no API key needed)
    const url = `https://www.google.com/maps?q=${this.mapLat},${this.mapLng}&hl=en&z=15&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {}

  contactForm = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  messageConfig = {
    isSending: false,
    showModal: false,
    modalMessage: '',
    modalType: '',
  };

  async submit() {
    if (
      this.contactForm.name === '' ||
      this.contactForm.email === '' ||
      this.contactForm.mobile === '' ||
      this.contactForm.message === ''
    ) {
      this.messageConfig.modalMessage = 'Please fill all the fields';
      this.messageConfig.modalType = 'error';
      this.messageConfig.showModal = true;
      this.autoHideModal();
      return;
    }

    this.messageConfig.isSending = true;
    const formData = new FormData();

    Object.entries(this.contactForm).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch('https://formspree.io/f/xbddraqg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (res.ok) {
        this.messageConfig.modalMessage = 'Message sent successfully!';
        this.messageConfig.modalType = 'success';
        this.messageConfig.showModal = true;
        this.contactForm = { name: '', email: '', mobile: '', message: '' };
        this.autoHideModal();
      } else {
        this.messageConfig.modalMessage = 'Failed to send message';
        this.messageConfig.modalType = 'error';
        this.messageConfig.showModal = true;
        this.autoHideModal();
      }
    } catch (err) {
      console.error('Network error:', err);
      this.messageConfig.modalMessage = 'Network error. Please try again later.';
      this.messageConfig.modalType = 'error';
      this.messageConfig.showModal = true;
      this.autoHideModal();
    } finally {
      this.messageConfig.isSending = false;
    }
  }

  autoHideModal() {
    setTimeout(() => {
      this.messageConfig.showModal = false;
    }, 3000); // Hide after 5 seconds
  }
}

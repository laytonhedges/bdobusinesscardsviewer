import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface BusinessCardDetails {
  fullName?: string;
  jobTitle?: string;
  department?: string;
  email?: string;
  phone?: string;
  extraDetails?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public businessCardDetails?: BusinessCardDetails;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((query) => {
      const businessCardDetails: BusinessCardDetails = {};

      businessCardDetails.fullName = query['fullName'] ?? 'Joe Soap';
      businessCardDetails.jobTitle = query['jobTitle'] ?? 'Senior Auditor';
      businessCardDetails.department = query['department'] ?? 'AUDIT';
      businessCardDetails.email = query['email'] ?? 'jsoap@bdo.co.za';
      businessCardDetails.phone = query['phone'] ?? '(011) 112-3456';
      businessCardDetails.extraDetails = query['extraDetails'] ?? null;

      this.businessCardDetails = businessCardDetails;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'configuration-github',
  templateUrl: './configuration-github.component.html',
  styleUrls: ['./configuration-github.component.scss']
})
export class ConfigurationGithubComponent implements OnInit {
  configureGithubForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.configureGithubForm = this.fb.group({
      gitHubUsername: [''],
      gitHubPassword: [''],
      gitHubUrl: [''],
      gitHubRepoName: ['']
    });
  }

  onSubmit() {
    // Feature should be documented and released to production environment
  }
}
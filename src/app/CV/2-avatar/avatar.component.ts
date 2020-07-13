import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  testString:string = "test";

  onExperienceSign:boolean = false;
  onEducationSign:boolean = false;
  onTeachnicalSkillsSign:boolean = false;
  onSelfIntroductionSign:boolean = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onExperience(){
    this.onExperienceSign = true;
    this.onEducationSign = false;
    this.onTeachnicalSkillsSign = false;
    this.onSelfIntroductionSign = false;
  }
  onEducation(){
    this.onExperienceSign = false;
    this.onEducationSign = true;
    this.onTeachnicalSkillsSign = false;
    this.onSelfIntroductionSign = false;
  }
  onTeachnicalSkills(){
    this.onExperienceSign = false;
    this.onEducationSign = false;
    this.onTeachnicalSkillsSign = true;
    this.onSelfIntroductionSign = false;
  }
  onSelfIntroduction(){
    this.onExperienceSign = false;
    this.onEducationSign = false;
    this.onTeachnicalSkillsSign = false;
    this.onSelfIntroductionSign = true;
  }

  test(){
    alert("it works!");
  }

  onClickAvatarCard(){
    this.snackBar.open("William like Donload Trump!","Avatar",{duration: 500});
  }

  onClickInformationCard(){
    this.snackBar.open("William welcomes you!","Personal Information",{duration: 500});
  }

}

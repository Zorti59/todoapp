import { Component, ElementRef, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { create } from 'domain';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  taskName: string = '';
  taskList = [];
  checkBox = false;
  

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      inputs: [
        {
          name: 'taskName',
          type: 'text',
          placeholder: 'Indiquez votre tâche',
        },
      ],
      buttons: [
        {
          text: 'Enregistrer',
          handler: data => {
          this.taskName = data.taskName;
          this.taskList.push(this.taskName);
          console.log(this.taskList);
          }
        },
        {
          text: 'Annuler',
        }
      ]
    });
    await prompt.present();
  }
  deleteTask(index) {
      this.alertCtrl.create({
        header: 'Confirmez',
        message: 'Êtes vous sûr de supprimer ?',
        buttons: [
          {
            text: 'Oui',
            handler: () => {
              this.taskList.splice(index, 1);
            }
          },
          {
            text: 'Non',
            handler: () => {
            }
          }
        ]
      }).then(res => {
        res.present();
        
      });
    }

    taskDone() {
      if(this.checkBox == true) {
        this.taskName.fontcolor("grey");
      }
    }
  }
